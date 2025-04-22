const {Sequelize} = require('sequelize');   
require('dotenv').config();


const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    port: process.env.DB_PORT
});

async function initializeDatabase() {
    try {
        await sequelize.query(`
            CREATE SEQUENCE IF NOT EXISTS product_code_seq
            START WITH 1001
            INCREMENT BY 1
            NO MINVALUE
            NO MAXVALUE
            CACHE 1;
          `);
        
        await sequelize.sync({ force: false }); // Only during development
        console.log('Database synchronized');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

module.exports = {sequelize,initializeDatabase};    