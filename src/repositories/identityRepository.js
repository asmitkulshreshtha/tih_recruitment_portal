const Identification = require('../models/identificationModel.js');

class IdentificationRepository {
    async create(userData){
        return await Identification.create(userData);
    }

}

module.exports = new IdentificationRepository();