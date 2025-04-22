const userService = require('../services/userService.js');
const emailNotification = require('../services/emailNotification.js');
const jobService = require('../services/jobService.js')

const userDetails = async (req, res) => {
    try{
        const details = await userService.userDetails(req);
        res.status(201).json({message: 'user details successfully', details});
    }catch(error){
        console.log(error)
        res.status(400).json({message: error.message});
    }
}

const userIdentityDetails = async (req, res) => {
    try{
        const user = await userService.userIdentityDetails(req);
        res.status(201).json({message: 'user identity details successfully', user});
    }catch(error){
        console.log(error)
        res.status(400).json({message: error.message});
    }
}
const userQualificationDetails = async (req, res) => {
    try{
        const user = await userService.userQualificationDetails(req);
        res.status(201).json({message: 'user qualification details successfully', user});
    }catch(error){
        console.log(error)
        res.status(400).json({message: error.message});
    }
}

const apply = async (req, res) => {
    try{
        const application = await userService.apply(req);
        const user = await userService.getUserDetailsById(req.user.user_id);
        const job = await jobService.getJobById(req.body.jobId);
        // if (!job) return res.status(404).json({ message: "Job not found" });
        // const existingApplication = await applicationRepostory.findApplication(userId,jobId);
        // if (existingApplication) return res.status(400).json({ message: "You have already applied for this job" });
        res.status(201).json({message: 'user apply successfully', application});
        await emailNotification.sendApplicationConfirmation(user, job);
    }catch(error){
        console.log(error)
        res.status(400).json({ message: "Server error" });
    }
}

module.exports = {userDetails, userIdentityDetails,userQualificationDetails, apply};