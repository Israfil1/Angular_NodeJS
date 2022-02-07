const {connection} = require('../db_connection');
const router = require("express").Router();

       
 // --------------------------------------------------------- TABLE stagiaires -------------------------------------------------

 //récupérer tous les formateurs
 router.get('/', (req, res) => {
    let sql = 'select * from stagiaires'

    connection.query(sql, (err, result) => {

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
router.get('/:idStagiaire', (req, res) =>{
   let idStagiaire = req.params.idStagiaire;

   let sql = `select * from stagiaires where idStagiaire = ${idStagiaire}`
   
   connection.query(sql, (err, result) =>{
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

router.post('/', (req, res) => {
   console.log(req.body, 'Ajouter un stagiaire')

   let nomStagiaire = req.body.nomStagiaire;
   let sql = `INSERT INTO stagiaires(nomStagiaire) VALUES ('${nomStagiaire}')` 

   connection.query(sql, (err, result) => {
       if(err) {
           console.log('Erreur lors de lajout ', err)
       }
           res.send({
               message : "Stagiaire ajouté"
           })
   })

})

//Modifier un stagiaire

router.put('/:idStagiaire', (req, res) => {
   console.log(req.body, 'Modifier un Stagiaire')

   let idStagiaire = req.params.idStagiaire;
   let nomStagiaire = req.body.nomStagiaire;
   let sql = `UPDATE stagiaires set nomStagiaire = '${nomStagiaire}' WHERE idStagiaire = ${idStagiaire}`;
   
   connection.query(sql, (err, result) => {
       if(err) {
           console.log('erreur de la modification ', err.message)
       }
       res.send({
           message:'Stagiaire modifié'
       })
   })

})

//Supprimer un stagiaire
router.delete('/:idStagiaire', (req, res) => {

   let idStagiaire = req.params.idStagiaire;

   let sql = `delete FROM stagiaires WHERE idStagiaire = ${idStagiaire}`;
   connection.query(sql,(err, result)=> {
       if(err) {
           console.log('erreur de la suppression ', err.message)
       }
       res.send({
           message:'Stagiaire supprimé'
       })

   }) 
})


module.exports = router;