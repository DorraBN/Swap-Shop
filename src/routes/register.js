const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');
const { GridFsStorage } = require('multer-gridfs-storage');

const port = 3000;
const bcrypt = require('bcryptjs');

const mongo_url = "mongodb://localhost:27017/dbconnect";
(async () => {
    try {
        await mongoose.connect(mongo_url);
        console.log("Connexion réussie à MongoDB");
    } catch (error) {
        console.error(error.message);
    }
})();

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

const userSchema = new mongoose.Schema({
    username: String,
    phone: String,
    email: String,
    password: String,
    role: String,
    profileImage: String // Ajout du champ profileImage dans le schéma de l'utilisateur
});
const User = mongoose.model('User', userSchema);

// Configuration de multer pour la gestion des téléchargements d'images
const storage = new GridFsStorage({
    url: 'mongodb://localhost:27017/dbconnect',
    options: { useNewUrlParser: true, useUnifiedTopology: true },
    file: (req, file) => {
        return {
            filename: file.originalname, // Nom du fichier dans la base de données
            bucketName: 'profileImages' // Nom du bucket dans la base de données
        };
    }
});

const upload = multer({ storage });





// Définition du modèle Mongoose pour la collection 'produit'


const produitSchema = new mongoose.Schema({
    email: String,
    nom: String,
    description: String,
    price: String,
    image: Buffer, // Utilisez un champ Buffer pour stocker les données binaires de l'image
    quantity: String,
    color: String,
    brand: String
});

const Produit = mongoose.model('Produit', produitSchema);

app.post('/produit', async (req, res) => {
    console.log('Requête POST reçue sur /produit', req.body);
    try {
        const { email, nom, description, price, quantity, color, brand } = req.body;
        let { image } = req.body;

        // Convertir l'image en un Buffer avant de l'enregistrer
        image = Buffer.from(image, 'base64');

        const existingProduit = await Produit.findOne({ nom });
        if (existingProduit) {
            return res.status(400).json({ message: 'Produit already exists' });
        }

        const nouveauProduit = new Produit({
            email,
            nom,
            description,
            price,
            image,
            quantity,
            color,
            brand
        });

        await nouveauProduit.save();
        
        res.status(200).json({ message: 'Produit registered successfully' });
    } catch (error) {
        console.error('Error registering produit:', error);
        res.status(500).json({ message: 'Error registering produit' });
    }
});

    

// Définition du modèle Mongoose pour la collection 'vendeurs'
const vendeurSchema = new mongoose.Schema({
    email: String, // Ajout du champ email
    NomEntreprise: String,
    catprod: [String],
    methpay: [String],
    adresse: String,
    methliv: String
});

const Vendeur = mongoose.model('Vendeurs', vendeurSchema);

// Définition de la route POST pour '/vendeur'
app.post('/vendeur', async (req, res) => {
    console.log('Requête POST reçue sur /vendeur', req.body);
    try {
        const { email, NomEntreprise, catprod, methpay, adresse, methliv } = req.body;
        const existingVendeur = await Vendeur.findOne({ NomEntreprise });
        if (existingVendeur) {
            return res.status(400).json({ message: 'Vendeur already exists' });
        }

        const nouveauVendeur = new Vendeur({
            email, // Ajout de l'e-mail ici
            NomEntreprise,
            catprod,
            methpay,
            adresse,
            methliv
        });

        await nouveauVendeur.save();
        
        res.status(200).json({ message: 'Vendeur registered successfully' });
    } catch (error) {
        console.error('Error registering vendeur:', error);
        res.status(500).json({ message: 'Error registering vendeur' });
    }
});
// Route pour enregistrer un nouvel utilisateur avec une image de profil
app.post('/register', upload.single('profileImage'), async (req, res) => {
    console.log('Requête POST reçue sur /register', req.body);
    try {
        const { username, phone, email, password, role,profileImage } = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
      

        const newUser = new User({ username, phone, email, password: hashedPassword, role, profileImage });
        await newUser.save();
        
        res.status(200).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error registering user' });
    }
});

app.post('/login', async (req, res) => {
    console.log('Requête POST reçue sur /login', req.body);
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'User not found' });
        }
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ message: 'Incorrect password' });
        }
        res.status(200).json({ message: 'Authentication successful', user: user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error authenticating user' });
    }
});




app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});



/*
// MySQL Connection Configuration
const mysql = require('mysql');
const bodyParser = require('body-parser');
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'sport',
});

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Registration Endpoint
app.post('/register', (req, res) => {
    const { nom, prenom, email, password, confirmPassword, tel } = req.body;

    // Check if any field is missing or empty
    if (!nom || nom.trim() === '' || !prenom || prenom.trim() === '' ||
        !email || email.trim() === '' || !password || password.trim() === '' ||
        !confirmPassword || confirmPassword.trim() === '' || !tel || tel.trim() === '') {
        res.status(400).send('All fields are required.');
        return;
    }

    // Check if password and confirm password match
    if (password !== confirmPassword) {
        res.status(400).send('Password and Confirm Password do not match.');
        return;
    }

    const sql = 'INSERT INTO sport (nom, prenom, email, password, tel) VALUES (?, ?, ?, ?, ?)';
    db.query(sql, [nom, prenom, email, password, tel], (err, result) => {
        if (err) {
            console.error('Registration error:', err);
            res.status(500).send(`Registration failed. Error: ${err.message}`);
            return;
        }

        // Redirect to another page (replace '/dashboard' with your desired route)
        res.redirect('/dashboard');
    });
});

// ... (Other code)

// Login Endpoint
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    // Check if 'email' or 'password' is missing or empty
    if (!email || email.trim() === '' || !password || password.trim() === '') {
        res.status(400).send('Email and Password are required.');
        return;
    }

    const sql = 'SELECT * FROM sport WHERE email = ? AND password = ?';
    db.query(sql, [email, password], (err, results) => {
        if (err) {
            console.error('Login error:', err);
            res.status(500).send('Login failed.');
            return;
        }
        if (results.length > 0) {
            res.send('Login successful.');
        } else {
            res.status(401).send('Invalid login credentials.');
        }
    });
});

// ... (Other code)

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
*/
