// index.js
const express = require('express');
const app = express();

// importa o router da calculadora
const calculadoraRouter = require('./routes/calculadora');

// usa o router em /calculadora
app.use('/calculadora', calculadoraRouter);

// rota raiz opcional
app.get('/', (req, res) => {
  res.send('API Calculadora funcionando!');
});

// inicia o servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});