                                                                                                                                                                  const express = require('express');
const app = express();

// configurar e mapear os intermediarios
const cors = require('cors');
app.use(cors()); // habilitar CORS
app.use(express.json()); // receber JSON no body das requisições

// mapear as routes
const pessoasRouter = require('./routes/Pessoas')
app.use(pessoasRouter)


// executar a aplicação
app.listen(3000, () => {
    console.log('Aplicação rodando em http://localhost:3000')
})