const {sequelize} = require('../config/db.js');
const {DataTypes, Model} = require('sequelize');

class AuditLog extends Model {}
AuditLog.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    action: {
        type: DataTypes.STRING,
        allowNull: false
    },
    adminId:{
        type: DataTypes.INTEGER,
        allowNull: false
    }
},{
    sequelize,
    modelName:'AuditLog',
    tableName:'audit_logs',
    timestamps:true
});

module.exports = AuditLog;