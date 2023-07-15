const axios = require('axios');
require('dotenv').config();
const {key} = process.env;
const {Genre} = require('../db.js');

const getGenres = async(req, res)=>{
    try{
        const response = await axios.get(`https://api.rawg.io/api/genres?key=${key}`);
        const genres = response.data.results; 
        const gen = genres.map(el=>el.name);
        gen.map((name)=>{
            Genre.create({name});
        })
        res.json(gen);
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
}

module.exports = getGenres;