// routes/calculadora.js
const express = require('express');
const router = express.Router();

// função auxiliar para converter query em número
const toNumber = (v) => {
  const n = Number(v);
  return Number.isFinite(n) ? n : null;
};

// Somar
router.get('/somar', (req, res) => {
  const a = toNumber(req.query.numA);
  const b = toNumber(req.query.numB);
  if (a === null || b === null) return res.status(400).json({ error: 'numA e numB devem ser números' });
  res.json({ result: a + b });
});

// Subtrair
router.get('/subtrair', (req, res) => {
  const a = toNumber(req.query.numA);
  const b = toNumber(req.query.numB);
  if (a === null || b === null) return res.status(400).json({ error: 'numA e numB devem ser números' });
  res.json({ result: a - b });
});

// Multiplicar
router.get('/multiplicar', (req, res) => {
  const a = toNumber(req.query.numA);
  const b = toNumber(req.query.numB);
  if (a === null || b === null) return res.status(400).json({ error: 'numA e numB devem ser números' });
  res.json({ result: a * b });
});

// Dividir
router.get('/dividir', (req, res) => {
  const a = toNumber(req.query.numA);
  const b = toNumber(req.query.numB);
  if (a === null || b === null) return res.status(400).json({ error: 'numA e numB devem ser números' });
  if (b === 0) return res.status(400).json({ error: 'Divisão por zero não permitida' });
  res.json({ result: a / b });
});

// Ao quadrado
router.get('/aoQuadrado', (req, res) => {
  const a = toNumber(req.query.num);
  if (a === null) return res.status(400).json({ error: 'num deve ser número' });
  res.json({ result: a * a });
});

// Raiz quadrada
router.get('/raizQuadrada', (req, res) => {
  const a = toNumber(req.query.num);
  if (a === null) return res.status(400).json({ error: 'num deve ser número' });
  if (a < 0) return res.status(400).json({ error: 'Não existe raiz quadrada real de número negativo' });
  res.json({ result: Math.sqrt(a) });
});

module.exports = router;