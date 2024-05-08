const mongoose = require('mongoose');

// Définition du schéma pour le modèle Image
const imageSchema = new mongoose.Schema({
    filename: String, // Nom du fichier
    data: Buffer, // Données binaires de l'image
    contentType: String // Type de contenu de l'image (par exemple, 'image/jpeg', 'image/png', etc.)
});

// Création du modèle Image à partir du schéma défini
const Image = mongoose.model('Image', imageSchema);

// Export du modèle Image pour pouvoir l'utiliser dans d'autres fichiers
module.exports = Image;
