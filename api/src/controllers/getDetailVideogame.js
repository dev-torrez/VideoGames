const {Videogame} = require('../db.js');
require('dotenv').config();
const axios = require('axios');
const {key} = process.env;

const getDetailVideogame = async(req, res)=>{
    const {idVideogame} = req.params;
    try{
        if(idVideogame.includes('-')){
            const detail = await Videogame.findOne({
                where: { id: idVideogame }
            });
            res.status(200).json(detail);
        }
        else{
            const response =await axios.get(`https://api.rawg.io/api/games/${idVideogame}?key=${key}`)
            const data = response.data;
            const detailVideogame = {
                id: data.id,
                name: data.name,
                image: data.background_image,
                platforms: data.platforms.map(el=>el.platform.name),
                description: data.description,
                date: data.released,
                rating: data.rating,
                genre: data.genres.map(el=>el.name)
            }
            res.status(200).json(detailVideogame);
        }
    }
    catch(error){
        res.status(404).json({message: error.message})
    }
}

module.exports = getDetailVideogame;