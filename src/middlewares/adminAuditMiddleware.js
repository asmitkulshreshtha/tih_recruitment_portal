const auditLogService = require('../services/auditLogService.js');

const adminAuditMiddleware = async (req, res, next) => {
    await auditLogService.logAuditAction({
        action:`${req.method} | ${req.originalUrl}`,
        adminId: req.user.userId
    });

    next();
}

module.exports = adminAuditMiddleware;