const jobService = require('../services/jobService.js');
const userService = require('../services/userService.js');


const createJob = async(req , res) => {
    try{
        const job = await jobService.createJob(req.body);
        res.status(201).json({message: 'job created successfully', job});
    }catch(error){
        console.log(error)
        res.status(400).json({message: error.message});
    }
}

const getUserDetailsById = async(req,res) => {
    try{
        const userDetails = await userService.getUserDetailsById(req.params.id);
        res.status(200).json({message: 'user details fetched successfully', userDetails});
    }catch(error){
        console.log(error)
        res.status(400).json({message: error.message});
    }
}

const getApplications = async(req, res) =>{
    try{
        const applications = await jobService.getApplications(req.body.jobId);
        res.status(200).json({message: 'applications fetched successfully', applications});
    }catch(error){
        console.log(error)
        res.status(400).json({message: error.message});
    }
}

const approveApplication = async(req, res) => {
    try{
        const applicationId  = req.params.id;
        const result = await jobService.acceptApplication(applicationId);
        return res.status(200).json({ message: "Application approved successfully" , result});
    }catch(error){
        console.error("Error approving application:", error);
        res.status(500).json({ message: "Server error" })
    }
}

const rejectApplication = async(req, res) => {
    try{
        const applicationId  = req.params.id;
        const result = await jobService.rejectApplication(applicationId);
        return res.status(200).json({ message: "Application rejected successfully", result });
    }catch(error){
        console.error("Error approving application:", error);
        res.status(500).json({ message: "Server error" })
    }
}

module.exports = {createJob, getUserDetailsById,getApplications,approveApplication,rejectApplication};