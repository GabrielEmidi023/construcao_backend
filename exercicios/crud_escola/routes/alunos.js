const express = require('express');
const router = express.Router();

let alunos = [
  { id: 1, nome: 'João', email: 'joao@email.com', cpf: '123', telefone: '99999-9999', dataNascimento: '2000-01-01' },
  { id: 2, nome: 'Maria', email: 'maria@email.com', cpf: '456', telefone: '88888-8888', dataNascimento: '2001-02-02' }
];

// Listar todos
router.get('/', (req, res) => res.json(alunos));

// Buscar por ID
router.get('/:id', (req, res) => {
  const aluno = alunos.find(a => a.id === parseInt(req.params.id));
  aluno ? res.json(aluno) : res.status(404).json({ message: 'Aluno não encontrado' });
});

// Criar novo
router.post('/', (req, res) => {
  const novo = { id: alunos.length + 1, ...req.body };
  alunos.push(novo);
  res.status(201).json(novo);
});

// Atualizar
router.put('/:id', (req, res) => {
  const idx = alunos.findIndex(a => a.id === parseInt(req.params.id));
  if (idx === -1) return res.status(404).json({ message: 'Aluno não encontrado' });
  alunos[idx] = { id: parseInt(req.params.id), ...req.body };
  res.json(alunos[idx]);
});

// Deletar
router.delete('/:id', (req, res) => {
  alunos = alunos.filter(a => a.id !== parseInt(req.params.id));
  res.status(204).send();
});

module.exports = router;
