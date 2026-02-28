import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Middleware pour parser le JSON
  app.use(express.json());

  // --- API ROUTES ---
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", message: "SAS Finance API is running" });
  });

  // Exemple de route pour les transactions (à connecter à une DB plus tard)
  app.get("/api/transactions", (req, res) => {
    // Ici vous récupéreriez les données de votre base de données
    res.json({ message: "Connectez votre base de données ici" });
  });

  // --- VITE MIDDLEWARE / STATIC FILES ---
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // En production, on sert les fichiers statiques du dossier dist
    app.use(express.static(path.join(__dirname, "dist")));
    
    // Fallback pour le routage SPA
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "dist", "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
