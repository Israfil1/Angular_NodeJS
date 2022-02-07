const router = require('express').Router();
const categoriesRouter = require('./categories.routes');
const formateursRouter = require('./formateurs.routes');
const formationsRouter = require('./formations.routes');
const stagiairesRouter = require('./stagiaires.routes')

router.use('/categorie', categoriesRouter);
router.use('/formateurs', formateursRouter);
router.use('/formations', formationsRouter);
router.use('/stagiaires', stagiairesRouter)



module.exports = router;