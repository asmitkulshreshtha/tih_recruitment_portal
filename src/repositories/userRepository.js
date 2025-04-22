const User = require('../models/userModel.js');
const PersonalInfo = require('../models/personalInfoModel.js');
const Qualification = require('../models/qualificationModel.js');
const Identification = require('../models/identificationModel.js');
const {sequelize} = require('../config/db.js');
const {Op} = require('sequelize');


class UserRepository {
    async create(userData){
        return await User.create(userData);
    }
    async findByEmail(email){
        return await User.findOne({where : {email}})
     }

    async findByToken(token){
        return await User.findOne({
            where: { passwordResetToken: token, tokenExpiry: { [Op.gt]: new Date() } }
        });
    }

    async updatePasswordResetToken( token, tokenExpiry) {
        await User.update({ passwordResetToken: token, tokenExpiry });
    }
    async updatePassword(password){
        await Userser.update({
            password: password,
            passwordResetToken: null,
            tokenExpiry: null
          });
    }
    async findById(id){
        return await User.findByPk(id);
    }

    async findByUser(userId){
        return await User.findOne({
            where:{userId:userId},
            attributes:["userId","name","email","mobile"],
            include:[
                {
                    model:PersonalInfo
                },
                {
                    model:Qualification
                },
                {
                    model:Identification
                }
            ]
        });
    }
}

module.exports = new UserRepository();