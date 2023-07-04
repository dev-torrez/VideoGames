const axios = require('axios');
require('dotenv').config();
const {key} = process.env;
const {Videogame} = require('../db.js');
const {Op} = require('sequelize');

const getNameVideogames = async(req, res)=>{
    const {name} = req.query;
    try{
        const dbVideogames = await Videogame.findAll({
            where:{
                name:{
                    [Op.like]: `%${name}%`,
                }
            }
        })
        const response = await axios.get(`https://api.rawg.io/api/games?search=${name}&key=${key}&limit=2`);
        const api = response.data.results;
        if(api.length>0){
            const videogamesMax = [];
            if(api.length < 15){
                for(let i=0; i<api.length; i++){
                    videogamesMax.push(api[i])
                } 
            }
            else{
                for(let i=0; i<15; i++){
                    videogamesMax.push(api[i])
                } 
            }
                const apiVideogames =await Promise.all(videogamesMax.map(element=>{
                    return axios.get(`https://api.rawg.io/api/games/${element.id}?key=${key}`)
                    .then(respuesta=>{
                        return{
                            id: element.id,
                            name: element.name,
                            description: respuesta.data.description,
                            platforms: element.platforms.map(el=>el.platform.name),
                            image: element.background_image,
                            date: element.released,
                            rating: element.rating,
                            genres: element.genres.map(el=>el.name)
                        }
                    })
                }))
                const videogames = [...dbVideogames, ...apiVideogames];
                res.status(200).json(videogames);
        }
        else{
            res.status(404).json({message: 'El videojuego solicitado no existe'});
        }
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
}

module.exports = getNameVideogames;