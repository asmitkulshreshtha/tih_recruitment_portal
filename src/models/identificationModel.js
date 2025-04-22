const {sequelize} = require('../config/db.js');
const {DataTypes, Model} = require('sequelize');

class Identification extends Model {}
Identification.init({
    id:{
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    idProofType:{
        type: DataTypes.ENUM("aadhar", "voterid", "pancard","drivinglicense"),
        allowNull: false,
    },
    idProofPath:{
        type: DataTypes.TEXT,
        allowNull: false,
    },
    userImagePath:{
        type: DataTypes.TEXT,
        allowNull: false,
    },
    signaturePath:{
        type: DataTypes.TEXT,
        allowNull: false,
    }
},{
    sequelize,
    modelName:'Identification',
    tableName:'identifications',
    timestamps:true
});

module.exports = Identification;