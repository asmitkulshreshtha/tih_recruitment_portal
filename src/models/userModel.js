const {sequelize} = require('../config/db.js');
const {DataTypes, Model} = require('sequelize');

class User extends Model {}
User.init(
    {
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    userId:{
        type: DataTypes.BIGINT,
        allowNull: false,
        unique: true,
        defaultValue: sequelize.literal("nextval('product_code_seq')")
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    mobile: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    designation:{
        type: DataTypes.STRING,
        allowNull: true,
    },
    role: {
        type: DataTypes.ENUM("admin", "user", "developer"),
        allowNull: false,
        defaultValue: "user",
    },
    passwordResetToken: {
        type: DataTypes.STRING,
        allowNull: true
      },
      tokenExpiry: {
        type: DataTypes.DATE,
        allowNull: true
      }
},{
    sequelize,
    modelName:'User',
    tableName:'users',
    timestamps:true
});

module.exports = User;