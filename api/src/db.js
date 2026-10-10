const { Sequelize } = require('sequelize');
const Videogame = require("./models/Videogame")
const Genre = require("./models/Genre")
const {DB_USER, DB_PASSWORD, DB_HOST, DB_DEPLOY} = process.env;

/*const sequelize = new Sequelize('videogames', `${DB_USER}`, `${DB_PASSWORD}`,{
  host: `${DB_HOST}`,
  dialect: 'postgres',
  logging: false
});*/

const sequelize = new Sequelize(DB_DEPLOY,{
  host: `${DB_HOST}`,
  dialect: 'postgres',
  logging: false,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

Videogame(sequelize)
Genre(sequelize)
const { videogame: VideogameModel, genre: GenreModel } = sequelize.models;
VideogameModel.belongsToMany(GenreModel, {through: 'videogame_genre'});
GenreModel.belongsToMany(VideogameModel, {through: 'videogame_genre'});

module.exports = {
  ...sequelize.models,
  conn: sequelize,
};