const {connection} = require('../db_connection');
const router = require("express").Router()

// --------------------------------------------------------- TABLE categorie -------------------------------------------------

 //récupérer toutes les catégories

router.get('/', (req, res) => {
    let sql = 'select * from categorie'

    connection.query(sql, (err, result) => {

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

//récupérer une catégorie ************************************
router.get('/:idCategorie', (req, res) =>{
    let idCategorie = req.params.idCategorie;
 
    let sql = `select * from categorie where idCategorie = ${idCategorie}`
    
    connection.query(sql, (err, result) =>{  
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

router.post('/', (req, res) => {
    console.log(req.body, 'Ajouter une categorie')
 
    let nomCategorie = req.body.nomCategorie;
    let sql = `INSERT INTO categorie(nomCategorie) VALUES ('${nomCategorie}')` 
 
    connection.query(sql, (err, result) => {
        if(err) {
            console.log('Erreur lors de lajout ', err)
        }
            res.send({
                message : "Categorie ajoutée"
            })
    })
 
 })

 //Modifier une catégorie

router.put('/:idCategorie', (req, res) => {
    console.log(req.body, 'Modifier une catégorie')
 
    let idCategorie = req.params.idCategorie;
    let nomCategorie = req.body.nomCategorie;
    let sql = `UPDATE categorie set nomCategorie = '${nomCategorie}' WHERE idCategorie = ${idCategorie}`;
    
    connection.query(sql, (err, result) => {
        if(err) {
            console.log('erreur de la modification ', err.message)
        }
        res.send({
            message:'catégorie modifiée'
        })
    })
 
 })


//Supprimer une catégorie
router.delete('/:idCategorie', (req, res) => {

    let idCategorie = req.params.idCategorie;
 
    let sql = `delete FROM categorie WHERE idCategorie = ${idCategorie}`;
    connection.query(sql,(err, result)=> {
        if(err) {
            console.log('erreur de la suppression ', err.message)
        }
        res.send({
            message:'Catégorie supprimée'
        })
 
    }) 
 })

module.exports = router;