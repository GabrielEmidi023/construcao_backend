// importa o express
const express = require('express');

// crio uma instancia da aplicação
const app = express();

// Middleware (intermediarios)
// intermediario de log
app.use((req, res, next) => {
    console.log("-------------####-------------")
    console.log("Tempo: ", new Date().toLocaleString())
    console.log("Método: ", req.method)
    console.log("Rota: ", req.url)
    next()
})

app.get('/nome', (req, res, next) => {
    const primeiroNome = req.query.primeiroNome
    const sobrenome = req.query.sobrenome
    res.send("Ola "+ primeiroNome + " " + sobrenome)
})

// importando o router calculadiraNota
const calculadoraNotaRouter = require('./routes/CalculadoraNota')
// toda requisição que chegar em /calculadora será direcionada para o router calculadoraNotaRouter
app.use('/calculadora', calculadoraNotaRouter)

// executar a aplicação
app.listen(3000, () => {
    console.log("Aplicação rodando em http://localhost:3000")
})