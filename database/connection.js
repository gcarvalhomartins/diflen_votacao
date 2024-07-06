const Sequelize = require('sequelize');

const connection = new Sequelize('form_diflen','root','051020',{
    host:'localhost',
    dialect:'mysql',
});

module.exports = connection;


