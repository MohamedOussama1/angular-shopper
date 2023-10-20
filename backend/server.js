const express = require('express');
const path = require('path');

const PORT = 3000;
const HOST = "localhost";
const app = express();

app.use('/', express.static(path.join(__dirname, 'angular', 'ecom-app')));
console.log(__dirname);
app.get('', (req, res) =>
{
  res.sendFile(path.join(__dirname, 'angular', 'ecom-app', 'index.html'))
})

//lancement
app.listen(PORT, () => {
  console.log(`server running at http://${HOST}:${PORT}`)
})
