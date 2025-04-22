const Application = require('../models/applicationModel.js');

class ApplicationRepository{
    async create(userData){
        return await Application.create(userData);
    }
    async findApplication(userId, jobId){
        return await Application.findOne({ where: { user_id:userId, Job_id:jobId } });
    }
    async findByJobId(jobId){
        return await Application.findAll({ where: { job_id: jobId } });
    }
    async findByApplicationId(applicationId){
        return await Application.findByPk(applicationId);
    }
    async updateStatus(application ,status){
        application.status = status;
        await application.save();
        return application;
    }
}

module.exports = new ApplicationRepository();