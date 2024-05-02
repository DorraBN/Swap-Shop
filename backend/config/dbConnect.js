// Importer le module Mongoose et assigner l'objet 'mongoose' à la propriété 'default'
const { default: mongoose } = require("mongoose");

// Définition de la fonction dbConnect
const dbConnect = () => {
    try {
        // Tenter d'établir une connexion à la base de données MongoDB
        const conn = mongoose.connect('mongodb://localhost:27017/Swapshop');
    } catch (error) {
        // Capturer toute erreur qui pourrait survenir lors de la connexion
        console.error('Erreur de connexion à la base de données MongoDB:', error.message);
    }
}

// Exporter la fonction dbConnect pour qu'elle puisse être utilisée dans d'autres fichiers
module.exports = dbConnect;
