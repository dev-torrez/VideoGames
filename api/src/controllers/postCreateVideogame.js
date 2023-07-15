const {Videogame, Genre} = require('../db');

const postCreateVideogame = async(req, res)=>{
    const {name, image, description, platforms, date, rating, genres} = req.body;
    try{
        const videogame = await Videogame.create({name, image, description, platforms, date, rating});
        const genresToAdd = await Genre.findAll({where:{name: genres}});
        await videogame.addGenre(genresToAdd);
        res.status(200).json({message: 'Videojuego creado con exito...'});
    }
    catch(error){
        res.status(500).json({message: 'Faltan datos para crear el videojuego...'});
    }
}

module.exports = postCreateVideogame;