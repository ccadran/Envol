const path = require("path");
const Multer = require("multer");
const { Storage } = require("@google-cloud/storage");

// Configuration du module Multer pour le téléchargement de fichiers
const upload = Multer({
  storage: Multer.memoryStorage(),
  limits: {
    fileSize: 1024 * 1024 * 3,
  },
});

// Configuration des informations d'identification Google Cloud Storage
const projectId = "envol-des-papillons"; // Remplacez par votre projet ID
const keyFilename = "../mykey.json"; // Chemin vers votre fichier de clé privée JSON
const storage = new Storage({
  projectId,
  keyFilename,
});
const bucket = storage.bucket("blog-storage-envol");

module.exports = upload;
