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
    brand: String,
    catprod: [String],
});

const Produit = mongoose.model('Produit', produitSchema);

app.post('/produit', async (req, res) => {
    console.log('Requête POST reçue sur /produit', req.body);
    try {
        const { email, nom, description, price, quantity, color, brand,catprod } = req.body;
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
            brand,
            catprod
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

app.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        console.error('Erreur lors de la récupération des utilisateurs', error);
        res.status(500).json({ message: 'Erreur lors de la récupération des utilisateurs' });
    }
});

// Route GET pour récupérer tous les vendeurs
app.get('/vendeurs', async (req, res) => {
    try {
        const vendeurs = await Vendeur.find();
        res.status(200).json(vendeurs);
    } catch (error) {
        console.error('Erreur lors de la récupération des vendeurs', error);
        res.status(500).json({ message: 'Erreur lors de la récupération des vendeurs' });
    }
});

app.get('/produits', async (req, res) => {
    try {
        const produits = await Produit.find();
        res.status(200).json(produits);
    } catch (error) {
        console.error('Erreur lors de la récupération desproduits', error);
        res.status(500).json({ message: 'Erreur lors de la récupération des produits' });
    }
});


// Route GET pour récupérer tous les utilisateurs avec le rôle "seller"
app.get('/seller', async (req, res) => {
    try {
        const users = await User.find({ role: 'seller' }); // Filtrer les utilisateurs par le rôle "seller"
        res.status(200).json(users);
    } catch (error) {
        console.error('Erreur lors de la récupération des utilisateurs', error);
        res.status(500).json({ message: 'Erreur lors de la récupération des utilisateurs' });
    }
});



// Route DELETE pour supprimer un vendeur par ID
app.delete('/seller/:email', async (req, res) => {
    try {
        const sellerEmail = req.params.email;
        const deletedSeller = await User.findOneAndDelete({ email: sellerEmail, role: 'seller' });
        if (!deletedSeller) {
            return res.status(404).json({ message: 'Seller not found' });
        }
        res.status(200).json({ message: 'Seller deleted successfully' });
    } catch (error) {
        console.error('Error deleting seller:', error);
        res.status(500).json({ message: 'Error deleting seller' });
    }
});



app.delete('/product/:email', async (req, res) => {
    try {
        const productEmail = req.params.email;
        const deletedProduct = await Product.findOneAndDelete({ email: productEmail });
        if (!deletedProduct) {
            return res.status(404).json({ message: 'product not found' });
        }
        res.status(200).json({ message: 'product deleted successfully' });
    } catch (error) {
        console.error('Error deleting product:', error);
        res.status(500).json({ message: 'Error deleting product' });
    }
});


app.get('/meubles', async (req, res) => {
    try {
        console.log('Tentative de récupération des produits meubles...');
        // Correction ici : Utiliser le modèle Produit au lieu de Produits
        const produits = await Produit.find({ catprod: 'Meubles' });
        console.log('Produits récupérés avec succès:', produits);
        res.status(200).json(produits);
    } catch (error) {
        console.error('Erreur lors de la récupération des produits:', error);
        res.status(500).json({ message: 'Erreur lors de la récupération des produits' });
    }
});


app.get('/vetements', async (req, res) => {
    try {
        console.log('Tentative de récupération des produits meubles...');
        // Correction ici : Utiliser le modèle Produit au lieu de Produits
        const produits = await Produit.find({ catprod: 'Vêtements' });
        console.log('Produits récupérés avec succès:', produits);
        res.status(200).json(produits);
    } catch (error) {
        console.error('Erreur lors de la récupération des produits:', error);
        res.status(500).json({ message: 'Erreur lors de la récupération des produits' });
    }
});



// Route GET pour récupérer tous les utilisateurs avec le rôle "buyer"
app.get('/buyers', async (req, res) => {
    try {
        const buyers = await User.find({ role: 'buyer' }); // Filtrer les utilisateurs par le rôle "buyer"
        res.status(200).json(buyers);
    } catch (error) {
        console.error('Erreur lors de la récupération des utilisateurs acheteurs', error);
        res.status(500).json({ message: 'Erreur lors de la récupération des utilisateurs acheteurs' });
    }
});




const favorisSchema = new mongoose.Schema({
    email: String,
    nom: String,
    description: String,
    price: String,
    image: Buffer, // Utilisez un champ Buffer pour stocker les données binaires de l'image
    quantity: String,
    color: String,
    brand: String,
    catprod: [String],
});

const Favories = mongoose.model('Favories', favorisSchema);



// Route pour ajouter un produit aux favoris
app.post('/favorites', async (req, res) => {
    try {
      // Récupérer les données du produit à ajouter aux favoris depuis le corps de la requête
      const { email, nom, description, price, image, quantity, color, brand, catprod } = req.body;
  
      // Créer un nouvel objet Produit pour le produit à ajouter aux favoris
      const nouveauProduitFavoris = new Produit({
        email,
        nom,
        description,
        price,
        image,
        quantity,
        color,
        brand,
        catprod
      });
  
      // Enregistrer le produit dans la collection "Favoris"
      await nouveauProduitFavoris.save();
  
      // Répondre avec un message de succès
      res.status(200).json({ message: 'Produit ajouté aux favoris avec succès' });
    } catch (error) {
      // En cas d'erreur, répondre avec un message d'erreur
      console.error('Erreur lors de l\'ajout du produit aux favoris:', error);
      res.status(500).json({ message: 'Erreur lors de l\'ajout du produit aux favoris' });
    }
  });


  app.get('/favories', async (req, res) => {
    try {
        const favories = await Favories.find();
        res.status(200).json(favories);
    } catch (error) {
        console.error('Erreur lors de la récupération des favories', error);
        res.status(500).json({ message: 'Erreur lors de la récupération des favories' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});


