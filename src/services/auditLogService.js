const auditLogRepository = require('../repositories/auditLogRepository.js');

const logAuditAction = async ({ action, adminId}) => {
    return await auditLogRepository.createLog({
        action,
        adminId
    });
};

const getAllLogs = async () => {
    return await auditLogRepository.getAllLogs();
}
const getLogByAdmin = async(adminId) => {
    return await auditLogRepository.getLogByAdmin(adminId);
}


module.exports = {logAuditAction, getAllLogs,getLogByAdmin};