require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

// Conexão com MongoDB Atlas
const { DB_USER, DB_PASS, DB_HOST, DB_NAME, PORT } = process.env;

mongoose.connect(
  `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`
)
.then(() => console.log("✅ Conectado ao MongoDB Atlas"))
.catch((err) => console.error("❌ Erro ao conectar:", err));

// Modelo de Livro
const livroSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  autor: { type: String, required: true },
  editora: { type: String, required: true },
  ano: { type: Number, required: true },
  preco: { type: Number, required: true }
});

const Livro = mongoose.model("Livro", livroSchema);

// Rotas CRUD

// ➕ Criar livro
app.post("/livros", async (req, res) => {
  try {
    const livro = await Livro.create(req.body);
    res.status(201).json(livro);
  } catch (error) {
    res.status(400).json({ error: "Erro ao criar livro", detalhes: error.message });
  }
});

// 📚 Listar todos os livros
app.get("/livros", async (req, res) => {
  const livros = await Livro.find();
  res.json(livros);
});

// 🔍 Buscar por ID
app.get("/livros/:id", async (req, res) => {
  try {
    const livro = await Livro.findById(req.params.id);
    if (!livro) return res.status(404).json({ message: "Livro não encontrado" });
    res.json(livro);
  } catch {
    res.status(400).json({ error: "ID inválido" });
  }
});

// ✏️ Atualizar por ID
app.put("/livros/:id", async (req, res) => {
  try {
    const livro = await Livro.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!livro) return res.status(404).json({ message: "Livro não encontrado" });
    res.json(livro);
  } catch {
    res.status(400).json({ error: "Erro ao atualizar" });
  }
});

// 🗑️ Remover por ID
app.delete("/livros/:id", async (req, res) => {
  try {
    const livro = await Livro.findByIdAndDelete(req.params.id);
    if (!livro) return res.status(404).json({ message: "Livro não encontrado" });
    res.json({ message: "Livro removido com sucesso" });
  } catch {
    res.status(400).json({ error: "Erro ao remover" });
  }
});

// Servidor
app.listen(PORT || 3000, () => console.log(`🚀 Servidor rodando na porta ${PORT || 3000}`));
