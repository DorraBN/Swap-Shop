// Importer le module Express
const express = require('express');

// Importer la fonction createProduct du contrôleur de produit
const { createProduct ,getaProduct,getAllProducts,updateProduct,deleteProduct} = require("../controller/productCtrl");

// Créer un nouveau routeur Express
const router = express.Router();

// Définir une route POST pour la création de produit
// Lorsqu'une requête POST est reçue sur le chemin '/', la fonction createProduct du contrôleur de produit sera appelée pour gérer la requête
router.post("/", createProduct);
router.get("/:id",getaProduct);
router.put("/:id",updateProduct);
router.delete("/:id",deleteProduct);
router.get("/",getAllProducts);
 
// Exporter le routeur pour qu'il puisse être utilisé dans d'autres fichiers
module.exports = router;
