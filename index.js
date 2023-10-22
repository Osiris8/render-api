const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors()); // Active CORS
const corsOptions = {
  origin: "http://votre-frontend.com", // Remplacez par le domaine de votre frontend
  optionsSuccessStatus: 200, // Pour répondre avec le statut 200 pour les requêtes préflight
};

app.use(cors(corsOptions));

require("dotenv").config();

app.get("/", (req, res) => {
  res.send("Bienvenue sur votre serveur Node.js !");
});

app.listen(port, () => {
  console.log(`Le serveur est en cours d'exécution sur le port ${port}`);
});
