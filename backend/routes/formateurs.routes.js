const {connection} = require('../db_connection');
const router = require("express").Router()


 // --------------------------------------------------------- TABLE formateurs -------------------------------------------------

 //récupérer tous les formateurs
 router.get('/', (req, res) => {
    let sql = 'select * from formateurs'

    connection.query(sql, (err, result) => {

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
router.get('/:idFormateur', (req, res) =>{
   let idFormateur = req.params.idFormateur;

   let sql = `select * from formateurs where idFormateur = ${idFormateur}`
   
   connection.query(sql, (err, result) =>{
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

router.post('/', (req, res) => {
    console.log(req.body, 'Ajouter un formateur')
 
    let nomFormateur = req.body.nomFormateur;
    let prenomFormateur = req.body.prenomFormateur;
    let mailFormateur = req.body.mailFormateur;
    let photoFormateur = req.body.photoFormateur;
    let sql = `INSERT INTO formateurs(nomFormateur, prenomFormateur, mailFormateur, photoFormateur) VALUES ('${nomFormateur}','${prenomFormateur}','${mailFormateur}','${photoFormateur}')` 
 
    connection.query(sql, (err, result) => {
        if(err) {
            console.log('Erreur lors de lajout ', err)
        }
            result.send({
                message : "Formateur ajouté"
            })
    })
 
 })
 
 //Modifier un formateur
 
 router.put('/:idFormateur', (req, res) => {
    console.log(req.body, 'Modifier un formateur')
 
    let idFormateur = req.params.idFormateur;
    let nomFormateur = req.body.nomFormateur;
    let prenomFormateur = req.body.prenomFormateur;
    let mailFormateur = req.body.mailFormateur;
    let photoFormateur = req.body.photoFormateur;
    let sql = `UPDATE formateurs set nomFormateur = '${nomFormateur}', prenomFormateur = '${prenomFormateur}', mailFormateur = '${mailFormateur}', photoFormateur = '${photoFormateur}' WHERE idFormateur = ${idFormateur}`;
    
    connection.query(sql, (err, result) => {
        if(err) {
            console.log('erreur de la modification ', err.message)
        }
        res.send({
            message:'Formateur modifié'
        })
    })
 
 })

//Supprimer un formateur
router.delete('/:idFormateur', (req, res) => {

   let idFormateur = req.params.idFormateur;

   let sql = `delete FROM formateurs WHERE idFormateur = ${idFormateur}`;
   connection.query(sql,(err, result)=> {
       if(err) {
           console.log('erreur de la suppression ', err.message)
       }
       res.send({
           message:'Formateur supprimé'
       })

   }) 
})


module.exports = router;