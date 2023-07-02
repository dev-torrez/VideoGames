const axios = require('axios');

const getVideogames = async(req, res)=>{
    try{
        const response = await axios.get('https://api.rawg.io/api/games?key=5222a739f04b461aa5b39e4d80a61456');
        const videogames = response.data;
        res.json(videogames);
    }
    catch(error){

    }
}

module.exports = getVideogames;