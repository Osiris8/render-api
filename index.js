const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
require("dotenv").config({ path: ".env.local" });

app.use(cors()); // Active CORS
const corsOptions = {
  origin: ["http://localhost:3000", "https://render-ai-pi.vercel.app"], // Remplacez par le domaine de votre frontend
  optionsSuccessStatus: 200, // Pour répondre avec le statut 200 pour les requêtes préflight
};

app.use(cors(corsOptions));

// Middleware pour le message de bienvenue personnalisé
function messageMiddleware(req, res, next) {
  // Ici, vous pouvez mettre en place la logique pour personnaliser le message de bienvenue.
  // Vous pouvez accéder aux données de l'utilisateur, aux préférences, etc., et personnaliser le message en conséquence.
  const user = { name: "John" }; // Exemple de données utilisateur

  const welcomeMessage = `Bienvenue, ${user.name}, sur votre application de recommandation de contenu !`;

  res.send(welcomeMessage);
}

// Utilisation du middleware pour la route principale
app.get("/", messageMiddleware);

app.listen(port, () => {
  console.log(`Le serveur est en cours d'exécution sur le port ${port}`);
});

/*****************MONGO DB */
// Import the mongoose module
const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

// Define the database URL to connect to.
const mongoDB =
  "mongodb+srv://" +
  process.env.MONGODB_USERNAME +
  ":" +
  process.env.MONGODB_PASSWORD +
  "@cluster0.z3a2i.mongodb.net/source";

// Wait for database to connect, logging an error if there is a problem
main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(mongoDB).then(() => {
    console.log("Connected to MongoDB");
  });
  try {
    await mongoose.connect(mongoDB);
  } catch (err) {
    console.log(err);
  }
}

/**************ChatGPT Integration */
