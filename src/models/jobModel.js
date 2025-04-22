const {sequelize} = require('../config/db.js');
const {DataTypes, Model} = require('sequelize');

class Job extends Model {}
Job.init({
    id:{
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    jobTitle:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    jobDescription:{
        type: DataTypes.TEXT,
        allowNull: false,
    },
    qualification:{
        type: DataTypes.TEXT,
        allowNull: false,
    },
    experience:{
        type: DataTypes.TEXT,
        allowNull: false,
    },
    ageRequirement:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    other_requirements:{
        type: DataTypes.TEXT,
        allowNull: false,
    },
    salary:{
        type: DataTypes.TEXT,
        allowNull: false,
    },
},{
    sequelize,
    modelName:'Job',
    tableName:'jobs',
    timestamps:true
});

module.exports = Job;