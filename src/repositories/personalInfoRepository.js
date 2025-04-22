const PersonalInfo = require('../models/personalInfoModel.js');

class PersonalInfoRepository {
    async create(userData){
        return await PersonalInfo.create(userData);
    }
    async findDob(userId){
        const personalInfo = await PersonalInfo.findOne({ where: { user_id:userId } });
        return personalInfo.date_of_birth;
    }
}

module.exports = new PersonalInfoRepository();