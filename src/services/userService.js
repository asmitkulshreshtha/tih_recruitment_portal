const personalInfoRepository = require('../repositories/personalInfoRepository.js');
const identityRepository = require('../repositories/identityRepository.js');
const qualificationRepository = require('../repositories/qualificationRepository.js');
const userRepository = require('../repositories/userRepository.js');
const jobsRepository = require('../repositories/jobsRepository.js');
const applicationRepostory = require('../repositories/applicationRepository.js');
const applicationRepository = require('../repositories/applicationRepository.js');
const {calculateAge} = require('../utils/ageCalculator.js');

class UserService {
    async userDetails(userData){
        const values = {
            user_id:userData.user.user_id,
            first_name:userData.body.first_name,
            last_name:userData.body.last_name,
            mobile:userData.body.mobile, 
            father_name:userData.body.father_name,
            mother_name:userData.body.mother_name,
            date_of_birth:userData.body.date_of_birth,
            gender:userData.body.gender,
            nationality:userData.body.nationality,
            category:userData.body.category,
            State:userData.body.State,
            district:userData.body.district,
            city:userData.body.city,
            address:userData.body.address,
            pin_code: userData.body.pin_code,
            permanet_address: userData.body.permanet_address
        };
        return await personalInfoRepository.create(values);
    }
    async userIdentityDetails(userData){
        const values = {user_id:userData.user.user_id,
            idProofType:userData.body.idProofType,
            idProofPath:userData.files['idProof'][0].path,
            signaturePath:userData.files['signature'][0].path,
            userImagePath:userData.files['image'][0].path}
        return await identityRepository.create(values);
    } 
    async userQualificationDetails(userData){
        const values = {
            user_id:userData.user.user_id,
            high_school:userData.body.high_school,
            intermediate:userData.body.intermediate,
            graduation:userData.body.graduation,
            post_graduation:userData.body.post_graduation,
            other:userData.body.other
        }
        return await qualificationRepository.create(values);
    } 
    async getUserDetailsById(userId){
        return await userRepository.findByUser(userId);
    }  
    async apply(userData){
        const jobId = userData.body.jobId;
        const userId = userData.user.user_id;
        const job = await jobsRepository.findByJobId(jobId);
        const dob = await personalInfoRepository.findDob(userId);
        const age = calculateAge(dob);
        return await applicationRepository.create({ user_id:userId, job_id:jobId, applicant_age:age });      

    }
    
}

module.exports = new UserService();

