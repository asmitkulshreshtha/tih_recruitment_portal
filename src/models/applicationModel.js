const {sequelize} = require('../config/db.js');
const {DataTypes, Model} = require('sequelize');

class Application extends Model {}  
Application.init({
    id:{
        type:DataTypes.BIGINT,
        primaryKey:true, 
        autoIncrement:true
    },
    applicant_age:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
    status:{
        type:DataTypes.ENUM("pending", "approved", "rejected"),
        allowNull:false,
        defaultValue:'pending'
    }
},{sequelize,modelName:'Application',tableName:'applications',  timestamps:true}
);

module.exports = Application;