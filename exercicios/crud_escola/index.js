const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const alunosRouter = require('./routes/alunos'); // caminho correto
app.use('/alunos', alunosRouter);

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
