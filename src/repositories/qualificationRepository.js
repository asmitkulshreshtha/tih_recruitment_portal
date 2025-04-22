const Qualification = require('../models/qualificationModel.js');

class QualificationRepository {
    async create(userData){
        return await Qualification.create(userData);
    }

}

module.exports = new QualificationRepository();