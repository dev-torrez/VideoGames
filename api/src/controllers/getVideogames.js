const axios = require('axios');
require('dotenv').config();
const {key} = process.env;
const {Videogame} = require('../db.js');

const getVideogames = async(req, res)=>{
    const promesas = [];
        try{
            const dbVideogames = await Videogame.findAll();

            for (let i = 1; i < 2; i++) {
                const promesa = axios.get(`https://api.rawg.io/api/games?key=${key}&page=${i}`);
                promesas.push(promesa); 
              }
            
              const response = await Promise.all(promesas);
            
              const apiVideogames =await Promise.all(response.map((response) => response.data.results).flat().map((el)=>{
                return axios.get(`https://api.rawg.io/api/games/${el.id}?key=${key}`)
                .then((respuesta) => {
                  return {
                    id: el.id,
                    name: el.name,
                    description: respuesta.data.description,
                    platforms: el.platforms.map((platform) => platform.platform.name),
                    image: el.background_image,
                    date: el.released,
                    rating: el.rating,
                    genres: el.genres.map((genre) => genre.name),
                  };
                });
              }))
              const videogames = [...dbVideogames,...apiVideogames];
              res.status(200).json(videogames);
        }
        catch(error){
            res.status(500).json({message: error.message});
        }
}

module.exports = getVideogames;