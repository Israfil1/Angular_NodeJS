const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2')
const app = express();

app.use(cors());
app.use(bodyparser.json());


//Connection à la base de données
const db = mysql.createConnection({
    host: "localhost",
    user : 'root',
    password : '',
    database : "m2i_angular_nodejs"

})

 //vérifier la connexion à la base
 db.connect(err => {
     if (err) {
         console.log('Erreur lors de la connexion à la base de données', err.message)
     }
     console.log("Connexion réussie à la base de données")
 }) 
 
        // --------------------------------------------------------- TABLE categorie -------------------------------------------------

 //récupérer toutes les catégories
 app.get('/categorie', (req, res) => {
    let sql = 'select * from categorie'

    db.query(sql, (err, result) => {

       if(err) 
       {
           console.log(err, 'erreur récupération données catégorie')
       }
       if(result.length > 0)
       {
           res.send({
               message:'Toutes les categories',
               data: result
           })
       }
    })
})

//récupérer une catégorie
app.get('/categorie/:idCategorie', (req, res) =>{
   let idCategorie = req.params.idCategorie;

   let sql = `select * from categorie where idCategorie = ${idCategorie}`
   
   db.query(sql, (err, result) =>{
       if(err) {
           console.log('Erreur lors la récupération de la catégorie avec id' + idCategorie, err.message)
       }
       if(result.length > 0 )
       {
           res.send({
               message:'La catégorie',
               data: result
           })
       }
       else {
           res.send({
               message : "La categorie n'a pas été trouvée"
           })
       }
   }) 

})

//Ajouter une catégorie

app.post('/categorie', (req, res) => {
   console.log(req.body, 'Ajouter une categorie')

   let nomCategorie = req.body.nomCategorie;
   let sql = `INSERT INTO categorie(nomCategorie) VALUES ('${nomCategorie}')` 

   db.query(sql, (err, result) => {
       if(err) {
           console.log('Erreur lors de lajout ', err)
       }
           res.send({
               message : "Categorie ajoutée"
           })
   })

})

//Modifier une catégorie

app.put('/categorie/:idCategorie', (req, res) => {
   console.log(req.body, 'Modifier une catégorie')

   let idCategorie = req.params.idCategorie;
   let nomCategorie = req.body.nomCategorie;
   let sql = `UPDATE categorie set nomCategorie = '${nomCategorie}' WHERE idCategorie = ${idCategorie}`;
   
   db.query(sql, (err, result) => {
       if(err) {
           console.log('erreur de la modification ', err.message)
       }
       res.send({
           message:'catégorie modifiée'
       })
   })

})

//Supprimer une catégorie
app.delete('/categorie/:idCategorie', (req, res) => {

   let idCategorie = req.params.idCategorie;

   let sql = `delete FROM categorie WHERE idCategorie = ${idCategorie}`;
   db.query(sql,(err, result)=> {
       if(err) {
           console.log('erreur de la suppression ', err.message)
       }
       res.send({
           message:'Catégorie supprimée'
       })

   }) 
})
    // --------------------------------------------------------- TABLE formateurs -------------------------------------------------

 //récupérer tous les formateurs
 app.get('/formateurs', (req, res) => {
    let sql = 'select * from formateurs'

    db.query(sql, (err, result) => {

       if(err) 
       {
           console.log(err, 'erreur récupération données formateurs')
       }
       if(result.length > 0)
       {
           res.send({
               message:'Tous les formateurs',
               data: result
           })
       }
    })
})

//récupérer un formateur
app.get('/formateurs/:idFormateur', (req, res) =>{
   let idFormateur = req.params.idFormateur;

   let sql = `select * from formateurs where idFormateur = ${idFormateur}`
   
   db.query(sql, (err, result) =>{
       if(err) {
           console.log('Erreur lors la récupération du formateur avec id' + idFormateur, err.message)
       }
       if(result.length > 0 )
       {
           res.send({
               message:'Le formateur',
               data: result
           })
       }
       else {
           res.send({
               message : "Le formateur n'a pas été trouvé"
           })
       }
   }) 

})

//Ajouter un formateur

app.post('/formateurs', (req, res) => {
    console.log(req.body, 'Ajouter un formateur')
 
    let nomFormateur = req.body.nomFormateur;
    let prenomFormateur = req.body.prenomFormateur;
    let mailFormateur = req.body.mailFormateur;
    let photoFormateur = req.body.photoFormateur;
    let sql = `INSERT INTO formateurs(nomFormateur, prenomFormateur, mailFormateur, photoFormateur) VALUES ('${nomFormateur}','${prenomFormateur}','${mailFormateur}','${photoFormateur}')` 
 
    db.query(sql, (err, result) => {
        if(err) {
            console.log('Erreur lors de lajout ', err)
        }
            res.send({
                message : "Formateur ajouté"
            })
    })
 
 })
 
 //Modifier un formateur
 
 app.put('/formateurs/:idFormateur', (req, res) => {
    console.log(req.body, 'Modifier un formateur')
 
    let idFormateur = req.params.idFormateur;
    let nomFormateur = req.body.nomFormateur;
    let prenomFormateur = req.body.prenomFormateur;
    let mailFormateur = req.body.mailFormateur;
    let photoFormateur = req.body.photoFormateur;
    let sql = `UPDATE formateurs set nomFormateur = '${nomFormateur}', prenomFormateur = '${prenomFormateur}', mailFormateur = '${mailFormateur}', photoFormateur = '${photoFormateur}' WHERE idFormateur = ${idFormateur}`;
    
    db.query(sql, (err, result) => {
        if(err) {
            console.log('erreur de la modification ', err.message)
        }
        res.send({
            message:'Formateur modifié'
        })
    })
 
 })

//Supprimer un formateur
app.delete('/formateurs/:idFormateur', (req, res) => {

   let idFormateur = req.params.idFormateur;

   let sql = `delete FROM formateurs WHERE idFormateur = ${idFormateur}`;
   db.query(sql,(err, result)=> {
       if(err) {
           console.log('erreur de la suppression ', err.message)
       }
       res.send({
           message:'Formateur supprimé'
       })

   }) 
})

        // --------------------------------------------------------- TABLE FORMATIONS -------------------------------------------------

 //récupérer toutes les formations
 app.get('/formations', (req, res) => {
     let sql = 'select * from Formations f, Formateurs fo, categorie c WHERE f.idFormateur = fo.idFormateur AND f.idCategorie = c.idCategorie'

     db.query(sql, (err, result) => {

        if(err) 
        {
            console.log(err, 'erreur récupération données Formations')
        }
        if(result.length > 0)
        {
            res.send({
                message:'Toutes les formations',
                data: result
            })
        }
     })
 })

//récupérer une formation
app.get('/formations/:idFormation', (req, res) =>{
    let idFormation = req.params.idFormation;

    let sql = `select * from formations where idFormation = ${idFormation}`
    
    db.query(sql, (err, result) =>{
        if(err) {
            console.log('Erreur lors la récupération de la formation avec id' + idFormation, err.message)
        }
        if(result.length > 0 )
        {
            res.send({
                message:'La formation',
                data: result
            })
        }
        else {
            res.send({
                message : "La formation n'a pas été trouvée"
            })
        }
    }) 

})

//Ajouter une formation

app.post('/formations', (req, res) => {
    console.log(req.body, 'Ajouter une formation')

    let nomFormation = req.body.nomFormation;
    let dureeFormation = req.body.dureeFormation;
    let sql = `INSERT INTO formations(nomFormation, dureeFormation, idFormateur, idCategorie) VALUES ('${nomFormation}', '${dureeFormation}', 1, 1)` 

    db.query(sql, (err, result) => {
        if(err) {
            console.log('Erreur lors de lajout ', err)
        }
            res.send({
                message : "Formation ajoutée"
            })
    })

})

//Modifier une formation

app.put('/formations/:idFormation', (req, res) => {
    console.log(req.body, 'Modifier une formation')

    let idFormation = req.params.idFormation;
    let nomFormation = req.body.nomFormation;
    let dureeFormation = req.body.dureeFormation;
    let sql = `UPDATE formations set nomFormation = '${nomFormation}', dureeFormation = ${dureeFormation}, idFormateur = 1, idCategorie = 1 WHERE idFormation = ${idFormation}`;
    
    db.query(sql, (err, result) => {
        if(err) {
            console.log('erreur de la modification ', err.message)
        }
        res.send({
            message:'Formation modifiée'
        })
    })

})

//Supprimer une formation
app.delete('/formations/:idFormation', (req, res) => {

    let idFormation = req.params.idFormation;

    let sql = `delete FROM formations WHERE idFormation = ${idFormation}`;
    db.query(sql,(err, result)=> {
        if(err) {
            console.log('erreur de la suppression ', err.message)
        }
        res.send({
            message:'Formation supprimée'
        })

    }) 
})
 // --------------------------------------------------------- TABLE stagiaires -------------------------------------------------

 //récupérer tous les formateurs
 app.get('/stagiaires', (req, res) => {
    let sql = 'select * from stagiaires'

    db.query(sql, (err, result) => {

       if(err) 
       {
           console.log(err, 'erreur récupération données stagiaires')
       }
       if(result.length > 0)
       {
           res.send({
               message:'Tous les stagiaires',
               data: result
           })
       }
    })
})

//récupérer un formateur
app.get('/stagiaires/:idStagiaire', (req, res) =>{
   let idStagiaire = req.params.idStagiaire;

   let sql = `select * from stagiaires where idStagiaire = ${idStagiaire}`
   
   db.query(sql, (err, result) =>{
       if(err) {
           console.log('Erreur lors la récupération du staigiare avec id' + idFormateur, err.message)
       }
       if(result.length > 0 )
       {
           res.send({
               message:'Le stagiaire',
               data: result
           })
       }
       else {
           res.send({
               message : "Le stagiaire n'a pas été trouvé"
           })
       }
   }) 

})

//Ajouter un stagiaire

app.post('/stagiaires', (req, res) => {
   console.log(req.body, 'Ajouter un stagiaire')

   let nomStagiaire = req.body.nomStagiaire;
   let sql = `INSERT INTO stagiaires(nomStagiaire) VALUES ('${nomStagiaire}')` 

   db.query(sql, (err, result) => {
       if(err) {
           console.log('Erreur lors de lajout ', err)
       }
           res.send({
               message : "Stagiaire ajouté"
           })
   })

})

//Modifier un stagiaire

app.put('/stagiaires/:idStagiaire', (req, res) => {
   console.log(req.body, 'Modifier un Stagiaire')

   let idStagiaire = req.params.idStagiaire;
   let nomStagiaire = req.body.nomStagiaire;
   let sql = `UPDATE stagiaires set nomStagiaire = '${nomStagiaire}' WHERE idStagiaire = ${idStagiaire}`;
   
   db.query(sql, (err, result) => {
       if(err) {
           console.log('erreur de la modification ', err.message)
       }
       res.send({
           message:'Stagiaire modifié'
       })
   })

})

//Supprimer un stagiaire
app.delete('/stagiaires/:idStagiaire', (req, res) => {

   let idStagiaire = req.params.idStagiaire;

   let sql = `delete FROM stagiaires WHERE idStagiaire = ${idStagiaire}`;
   db.query(sql,(err, result)=> {
       if(err) {
           console.log('erreur de la suppression ', err.message)
       }
       res.send({
           message:'Stagiaire supprimé'
       })

   }) 
})


app.listen(3000,() => {
    console.log("Serveur activé")
})