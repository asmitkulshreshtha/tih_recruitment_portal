const jobRepository = require('../repositories/jobsRepository.js');
const applicationRepository = require('../repositories/applicationRepository.js');
const userRepository = require('../repositories/userRepository.js');

class JobService {
    async createJob(userData){
        return await jobRepository.create(userData);
    }
    async getJobById(jobId){
        return await jobRepository.findByJobId(jobId);
    }
    async getApplications(jobId){
        return await applicationRepository.findByJobId(jobId);
    }
    async acceptApplication(applicationId){
        const application = await applicationRepository.findByApplicationId(applicationId);
        await applicationRepository.updateStatus(application,"approved");
        return application;  
    }

    async rejectApplication(applicationId){
        const application = await applicationRepository.findByApplicationId(applicationId);
        await applicationRepository.updateStatus(application,"rejected");
        return application;  
    }

    async getJobsByDesignation(userId){
        const user = await userRepository.findById(userId);
        if (!user || !user.designation) {
            throw new Error('User or designation not found');
          }
        return await jobRepository.getJobsBydesignation(user.designation);
    }
}

module.exports = new JobService();