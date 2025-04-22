const auditLogService = require('../services/auditLogService.js');

const getAllLogs = async (req, res) => {
    try{
        const logs = await auditLogService.getAllLogs();
        res.status(200).json(logs);
    }catch(error){
        console.error('Error fetching audit logs:', error);
        res.status(500).json({ message: 'failed to fetch logs' });
    }
}

const getLogByAdmin = async (req, res) => {
    try{
        const adminId = req.params.id;
        const logs = await auditLogService.getLogByAdmin(adminId);
        res.status(200).json(logs);
    }catch(error){
        console.error('Error fetching audit logs:', error);
        res.status(500).json({ message: 'failed to fetch logs' });
    }
}

module.exports = {
    getAllLogs,
    getLogByAdmin
};