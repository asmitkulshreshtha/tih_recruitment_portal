const {sequelize} = require('../config/db.js');
const {DataTypes, Model} = require('sequelize');

class PersonalInfo extends Model {}
PersonalInfo.init({
    id:{
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    father_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    mother_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    date_of_birth:{
        type: DataTypes.DATE,
        allowNull: false,  
    },
    gender:{
        type:DataTypes.ENUM("male", "female", "other"),
        allowNull: false,
    },
    nationality:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    
    category:{
        type: DataTypes.ENUM("general", "obc", "sc", "st"),
        allowNull: false,
    },
    State:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    district:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    city:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    address:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    pin_code:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    permanet_address:{
        type: DataTypes.STRING,
        allowNull: false,
    }
},{
    sequelize,
    modelName:'PersonalInfo',
    tableName:'personal_info',
    timestamps:true
});

module.exports = PersonalInfo;