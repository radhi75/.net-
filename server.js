
const express = require('express');
const app = express();
const port = 3000;



const bodyParser = require('body-parser');
const { route } = require('./routes');

app.use(bodyParser.json()); 
app.use("/",route)
app.listen(port, () => {
  console.log(`Serveur en cours d'exécution sur le port ${port}`);
});
