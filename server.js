const express = require('express');
const app = express();
const port = 3000;
app.listen(port, () => {
  console.log(`o servidor foi instanciado na porta ${port}`);
});

app.get('/', (req, res) => {
  res.send('Minha primeiro rota');
});

app.get('/sobre', (req, res) => {
  res.send('Informações referente sobre a empresa');
});

app.get('/sobre/empresa', (req, res) => {
  res.send('História da empresa');
});
