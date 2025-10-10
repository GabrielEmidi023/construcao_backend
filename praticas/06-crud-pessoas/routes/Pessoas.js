const express = require('express');
const router = express.Router();

// lista de pessoas para simular um banco de dados
let listaPessoas = [
    { id: 1, nome: 'João', cpf: '123.456.789-00', email: 'jopao@gmail.com', dataNascimento: '01/01/2000'},
    { id: 2, nome: 'Maria', cpf: '103.466.719-01', email: 'maria@gmail.com', dataNascimento: '22/12/2005'}
]

// mapear as rotas e a logica
// Busca
// GET /pessoas
router.get('/pessoas', (req, res, next) => {
    res.json(listaPessoas)
})

// GET /pessoas/:id
router.get('/pessoas:id', (req, res, next) => {
    const id = req.params.id
    const pessoas = listaPessoas.find(p => pessoa.id == id)
    if (!pessoas) {
        return res.status(404).json({ error: 'Pessoa não encontrada' })
    }
    res.json(pessoa)
})




// exportar o router
module.exports = router;