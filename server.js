const express = require('express');
const bodyParser = require('body-parser');

const app = express();
let port = 3000;
app.listen(port, () => {
  console.log(`o servidor foi instanciado na porta ${port}`);
});
app.use(bodyParser.json());
const users = {};

app.get('/', (req, res) => {
  res.json({ users });
});

app.post('/', (req, res) => {
  const { nome, cidade, idade } = req.body;
  users[nome] = { cidade, idade, nome };
  res.json({ msg: 'usuário criado com sucesso!!' });
});

app.put('/:nome', (req, res) => {
  const { nome } = req.params;
  const { cidade, idade } = req.body;

  users[nome] = { cidade, idade, nome };
  res.json({ msg: 'usuario editado com sucesso' });
});

app.delete('/:nome', (req, res) => {
  const { nome } = req.params;
  delete users[nome];
  res.json({ msg: 'usuário deletado com sucesso' });
});
