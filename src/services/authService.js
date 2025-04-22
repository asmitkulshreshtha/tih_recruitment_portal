const userRepository = require('../repositories/userRepository.js');
const emailNotification = require('../services/emailNotification.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
require('dotenv').config();

class AuthService {
    async register(userData){
            const {name, email, password, mobile, role, designation} = userData;
            const existingUser = await userRepository.findByEmail(email);
            if(existingUser)throw new Error('User already exists');
            const salt = await bcrypt.genSalt(10);
            const hashedpassword = await bcrypt.hash(password, salt);
            return await userRepository.create({name, email, password: hashedpassword,mobile, role, designation});
            
    }

    async login(email , password){
        const user = await userRepository.findByEmail(email);
        if(!user) throw new Error('User not found');
        const  validPassword = await bcrypt.compare(password, user.password);
        if(!validPassword) throw new Error("Invalid password");
        const token = jwt.sign({user_id: user.id, userRole: user.role,userId:user.userId}, process.env.JWT_SECRET_KEY,{
            expiresIn: '1d'});
        return {token, user};
    }

    async forgotPassword(email){
        const user = await userRepository.findByEmail(email);
        if(!user) throw new Error('User not found');
        const token = crypto.randomBytes(32).toString('hex');
        const tokenExpiry = new Date(Date.now() + 3600000); // 1 hour from now
        await userRepository.updatePasswordResetToken( token, tokenExpiry);
        const resetLink = `www.reset-password.com/reset-password/${token}`;
        await emailNotification.sendPasswordResetMail(user, resetLink);
    }

    async resetPassword(token, newPassword) {
        const user = await userRepository.findByToken(token);
        if (!user) throw new Error('Invalid or expired token');
        const hashedPassword = await bcrypt.hash(newPassword, 10);
        await userRepository.updatePassword(hashedPassword);
    }

}
module.exports = new AuthService();