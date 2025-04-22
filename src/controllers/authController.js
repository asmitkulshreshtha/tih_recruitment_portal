const authService = require('../services/authService.js');
const emailNotification = require('../services/emailNotification.js');
const register = async (req, res) => {
    try{
        const user = await authService.register(req.body);
        res.status(201).json({message: 'user register successfully', user});
        await emailNotification.sendRegistrationMail(user);
    }catch(error){
        console.log(error)
        res.status(400).json({message: error.message});
    }
}

const login = async (req, res) => {
    try{
        const { email, password } = req.body;
        const { token, user } = await authService.login(email, password);
        res.status(200).json({ message: "Login successful", token, user });
    }catch(error){
        res.status(400).json({ error: error.message });
    }
}

const forgotPassword = async (req, res) => {
    try{
        const { email } = req.body;
        await authService.forgotPassword(email);
        res.json({ message: 'Password reset link sent to email.' });


    }catch(error){
        console.log(error)
        res.status(400).json({message: error.message});
    }
}
const resetPassword = async(req, res) => {
    try{
        const { token, newPassword } = req.body;
        await authService.resetPassword(token , newPassword);
        res.json({ message: 'Password has been reset successfully.' });
    }catch(error){
        console.log(error)
        res.status(400).json({message: error.message});
    }
}

module.exports = {register, login, forgotPassword, resetPassword};

