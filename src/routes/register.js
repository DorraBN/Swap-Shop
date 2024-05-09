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
app.use(express.static('public'));

const userSchema = new mongoose.Schema({
    username: String,
    phone: String,
    email: String,
    password: String,
    role: String,
    profileImageURL: String
});
const User = mongoose.model('User', userSchema);


const storage = new GridFsStorage({
    url: 'mongodb://localhost:27017/dbconnect',
    options: { useNewUrlParser: true, useUnifiedTopology: true },
    file: (req, file) => {
        return {
            filename: file.originalname,
        };
    }
});

const upload = multer({ storage });




const produitSchema = new mongoose.Schema({
    email: String,
    nom: String,
    description: String,
    price: Number, 
    quantity: Number, 
    color: String,
    brand: String,
    catprod: [String],
    profileImageURL: { type: String, required: true } 
});

const Produit = mongoose.model('Produit', produitSchema);

app.post('/produit', async (req, res) => {
    console.log('Requête POST reçue sur /produit', req.body);
    try {
        const { email, nom, description, price, quantity, color, brand, catprod, profileImageURL } = req.body;

      
        const existingProduit = await Produit.findOne({ nom });
        if (existingProduit) {
            return res.status(409).json({ message: 'Produit already exists' }); 
        }

 
        const nouveauProduit = new Produit({
            email,
            nom,
            description,
            price,
            quantity,
            color,
            brand,
            catprod,
            profileImageURL
        });

        await nouveauProduit.save();
        
        res.status(201).json({ message: 'Produit registered successfully' }); 
    } catch (error) {
        console.error('Error registering produit:', error);
        res.status(500).json({ message: 'Error registering produit' }); 
    }
});


// Définition du modèle Mongoose pour la collection 'vendeurs'
const vendeurSchema = new mongoose.Schema({
    email: String, 
    NomEntreprise: String,
    catprod: [String],
    methpay: [String],
    adresse: String,
    methliv: String
});

const Vendeur = mongoose.model('Vendeurs', vendeurSchema);

app.post('/vendeur', async (req, res) => {
    console.log('Requête POST reçue sur /vendeur', req.body);
    try {
        const { email, NomEntreprise, catprod, methpay, adresse, methliv } = req.body;
        const existingVendeur = await Vendeur.findOne({ NomEntreprise });
        if (existingVendeur) {
            return res.status(400).json({ message: 'Vendeur already exists' });
        }

        const nouveauVendeur = new Vendeur({
            email, 
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
app.post('/register',  upload.single('profileImageURL'), async (req, res) => {
    console.log('Requête POST reçue sur /register', req.body);
    try {
        const { username, phone, email, password, role,profileImageURL } = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
      

        const newUser = new User({ username, phone, email, password: hashedPassword, role, profileImageURL });
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
        const users = await User.find({ role: 'seller' }); 
        res.status(200).json(users);
    } catch (error) {
        console.error('Erreur lors de la récupération des utilisateurs', error);
        res.status(500).json({ message: 'Erreur lors de la récupération des utilisateurs' });
    }
});

app.get('/acheteurs', async (req, res) => {
    try {
        const users = await User.find({ role: 'buyer' }); 
        res.status(200).json(users);
    } catch (error) {
        console.error('Erreur lors de la récupération des utilisateurs', error);
        res.status(500).json({ message: 'Erreur lors de la récupération des utilisateurs' });
    }
});




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

app.delete('/produit/:productName', async (req, res) => {
    try {
      const productName = req.params.productName;
      const deletedProduct = await Produit.findOneAndDelete({ nom: productName });
      if (!deletedProduct) {
        return res.status(404).json({ message: 'Le produit n\'a pas été trouvé.' });
      }
      res.status(200).json({ message: 'Produit supprimé avec succès.' });
    } catch (err) {
      console.error('Erreur lors de la suppression du produit :', err);
      res.status(500).json({ error: 'Erreur lors de la suppression du produit.' });
    }
  });


app.get('/meubles', async (req, res) => {
    try {
        console.log('Tentative de récupération des produits meubles...');
    
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
     
        const produits = await Produit.find({ catprod: 'Vêtements' });
        console.log('Produits récupérés avec succès:', produits);
        res.status(200).json(produits);
    } catch (error) {
        console.error('Erreur lors de la récupération des produits:', error);
        res.status(500).json({ message: 'Erreur lors de la récupération des produits' });
    }
});




app.get('/buyers', async (req, res) => {
    try {
        const buyers = await User.find({ role: 'buyer' }); 
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
    image: Buffer,
    quantity: String,
    color: String,
    brand: String,
    catprod: [String],
});

const Favories = mongoose.model('Favories', favorisSchema);



app.post('/favorites', async (req, res) => {
    try {

      const { email, nom, description, price, image, quantity, color, brand, catprod } = req.body;
  

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
  

      await nouveauProduitFavoris.save();
 
      res.status(200).json({ message: 'Produit ajouté aux favoris avec succès' });
    } catch (error) {

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



app.get('/user/:email', async (req, res) => {
    try {
      const userEmail = req.params.email;
      const user = await User.findOne({ email: userEmail });
      if (!user) {
        return res.status(404).json({ message: 'Utilisateur non trouvé' });
      }
      res.status(200).json(user);
    } catch (error) {
      console.error('Erreur lors de la récupération de l\'utilisateur', error);
      res.status(500).json({ message: 'Erreur lors de la récupération de l\'utilisateur' });
    }
  });

app.get('/images/:imageId', async (req, res) => {
    try {
        const imageId = req.params.imageId;
        const image = await VotreModel.findOne({ _id: imageId });
        if (!image) {
            return res.status(404).json({ message: 'Image not found' });
        }

        res.set('Content-Type', image.contentType);
        res.send(image.data); 
    } catch (error) {
        console.error('Error fetching image:', error);
        res.status(500).json({ message: 'Error fetching image' });
    }
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});


