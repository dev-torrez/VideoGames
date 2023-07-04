const { Router } = require('express');
const getVideogames = require('../controllers/getVideogames.js');
const getDetailVideogame = require('../controllers/getDetailVideogame.js');
const getNameVideogames = require('../controllers/getNameVideogames.js');
const postCreateVideogame = require('../controllers/postCreateVideogame.js');
const getGenres = require('../controllers/getGenres.js');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();

router.get('/videogames', getVideogames);
router.get('/videogames/:idVideogame', getDetailVideogame);
router.get('/videogame', getNameVideogames);
router.post('/videogames', postCreateVideogame);
router.get('/genres', getGenres);
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
