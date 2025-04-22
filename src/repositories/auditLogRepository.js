const AuditLog = require("../models/auditlogModel.js")

const createLog = async(logData) => {
    return await AuditLog.create(logData);
};
const getAllLogs = async () => {
    return await AuditLog.findAll({
        order: [['createdAt', 'DESC']]
    });
}

const getLogByAdmin = async(adminId) => {
    return await AuditLog.findOne({
        where: { adminId },
        order: [['createdAt', 'DESC']]
    });
}

module.exports = {createLog, getAllLogs, getLogByAdmin};