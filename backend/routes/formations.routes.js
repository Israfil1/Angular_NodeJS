const {connection} = require('../db_connection');
const router = require("express").Router();

// --------------------------------------------------------- TABLE FORMATIONS -------------------------------------------------

 //récupérer toutes les formations
 router.get('/', (req, res) => {
    let sql = 'select * from formations f, formateurs fo, categorie c WHERE f.idFormateur = fo.idFormateur AND f.idCategorie = c.idCategorie'

    connection.query(sql, (err, result) => {

       if(err) 
       {
           console.log(err, 'erreur récupération données Formations')
       }
       if(res.length > 0)
       {
           res.send({
               message:'Toutes les formations',
               data: result
           })
       }
    })
})

//récupérer une formation
router.get('/:idFormation', (req, res) =>{
   let idFormation = req.params.idFormation;

   let sql = `select * from formations where idFormation = ${idFormation}`
   
   connection.query(sql, (err, result) =>{
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

router.post('/', (req, res) => {
   console.log(req.body, 'Ajouter une formation')

   let nomFormation = req.body.nomFormation;
   let dureeFormation = req.body.dureeFormation;
   let sql = `INSERT INTO formations(nomFormation, dureeFormation, idFormateur, idCategorie) VALUES ('${nomFormation}', '${dureeFormation}', 1, 1)` 

   connection.query(sql, (err, result) => {
       if(err) {
           console.log('Erreur lors de lajout ', err)
       }
           res.send({
               message : "Formation ajoutée"
           })
   })

})

//Modifier une formation

router.put('/:idFormation', (req, res) => {
   console.log(req.body, 'Modifier une formation')

   let idFormation = req.params.idFormation;
   let nomFormation = req.body.nomFormation;
   let dureeFormation = req.body.dureeFormation;
   let sql = `UPDATE formations set nomFormation = '${nomFormation}', dureeFormation = ${dureeFormation}, idFormateur = 1, idCategorie = 1 WHERE idFormation = ${idFormation}`;
   
   connection.query(sql, (err, result) => {
       if(err) {
           console.log('erreur de la modification ', err.message)
       }
       res.send({
           message:'Formation modifiée'
       })
   })

})

//Supprimer une formation
router.delete('/:idFormation', (req, res) => {

   let idFormation = req.params.idFormation;

   let sql = `delete FROM formations WHERE idFormation = ${idFormation}`;
   connection.query(sql,(err, result)=> {
       if(err) {
           console.log('erreur de la suppression ', err.message)
       }
       res.send({
           message:'Formation supprimée'
       })

   }) 
})

module.exports = router;