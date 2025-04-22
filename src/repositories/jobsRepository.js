const Job = require('../models/jobModel.js');
const {sequelize} = require('../config/db.js');
const {Op} = require('sequelize');
const {Sequelize} = require('sequelize');

class JobRepository {
    async create(userData){
        return await Job.create(userData);
    }
    async findByJobId(jobId){
        return await Job.findByPk(jobId);
     }
    async getJobsBydesignation(designation){
        return await Job.findAll({
            where: Sequelize.where(
                Sequelize.fn('LOWER', Sequelize.col('jobTitle')),
                {
                  [Op.like]: `%${designation.toLowerCase().trim()}%`
                }
              )
        })
     }
}

module.exports = new JobRepository();