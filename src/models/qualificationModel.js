const {sequelize} = require('../config/db.js');
const {DataTypes, Model} = require('sequelize');

class Qualification extends Model {}  
Qualification.init({
    id:{
        type: DataTypes.BIGINT,
        primaryKey: true,   
        autoIncrement: true,

    },
    high_school:{
        type: DataTypes.JSONB,
        allowNull: false,
        defaultValue: {
            board:"",
            passing_year:"",
            percentage:""
            }
        },
    intermediate:{
        type: DataTypes.JSONB,
        allowNull: false,
        defaultValue: {
            board:"",
            passing_year:"",
            percentage:""
            }
    }, 
    graduation:{
        type: DataTypes.JSONB,
        allowNull: false,
        defaultValue: {
            university:"",
            passing_year:"",
            percentage:""
            }
    },
    post_graduation:{
        type: DataTypes.JSONB,
        defaultValue: {
            university:"",
            passing_year:"",
            percentage:""
            }
    },
    other:{
        type: DataTypes.JSONB
    },
},{
    sequelize,
    modelName:'Qualification',
    tableName:'qualifications',
    timestamps:true
});

module.exports = Qualification;