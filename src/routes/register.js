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
