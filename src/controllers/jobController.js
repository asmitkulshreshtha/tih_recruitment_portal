const jobService = require('../services/jobService.js');

const getJobsByDesignation = async(req , res) =>{
    try{
        const userId = req.user.user_id;
        const jobs = await jobService.getJobsByDesignation(userId);
        res.json({message: 'Jobs fetched successfully', jobs});
    }catch(error){
        console.log(error)
        res.status(400).json({message: error.message});
    }
}

module.exports = {getJobsByDesignation};