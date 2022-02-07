const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2')
const app = express();

app.use(cors());
app.use(bodyparser.json());

// import du router pour séparer les routes des données

const router = require('./routes/index.routes')




// CONNEXION A L'API DEPUIS LA RACINE *********************************************************************

app.get('/', (req, res) => {
     res.send("Bienvenue sur la partie back du projet de groupe <br></br> Pour accèder aux données voici les différentes routes : <br></br> /categorie <br></br> /formateurs<br></br> /formations <br></br> /stagiaires <br></br> ")
 })


 
  // Accès aux différentes routes       
 app.use('/', router);

   

 

app.listen(3001,() => {
    console.log("Serveur activé")
})

module.exports = app