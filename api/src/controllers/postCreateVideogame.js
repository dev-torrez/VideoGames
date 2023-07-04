const {Videogame} = require('../db');

const postCreateVideogame = async(req, res)=>{
    console.log(Videogame);
    const {name, image, description, platforms, date, rating, genres} = req.body;
    try{
        const videogame = await Videogame.create({name, image, description, platforms, date, rating});
        res.status(200).json({message: 'Videojuego creado con exito...'});
    }
    catch(error){
        res.status(500).json({message: 'Falatan datos para crear el videojuego...'});
    }
}

module.exports = postCreateVideogame;