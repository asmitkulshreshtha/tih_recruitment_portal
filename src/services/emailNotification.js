const nodemailer = require('nodemailer');
require('dotenv').config();

class EmailNotification {
    constructor(){
        this.transporter = nodemailer.createTransport({
            service: "gmail",
            auth:{
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASSWORD,              
            }
        });
    }
    async sendMail({to, subject, html}){
        try{
            await this.transporter.sendMail({
                from:process.env.EMAIL_USER,
                to,
                subject,
                html
            });
        }catch(error){
            console.error('Mail send error:', error);
        }
    }
    
    async sendRegistrationMail(user) {
        return this.sendMail({
            to: user.email,
            subject: 'Welcome to the Job Portal!',
            html: `<p>Hello ${user.name},</p><p>Your registration is successful. Your User ID is <strong>${user.userId}</strong>.</p>`
        });
    }
    
    async sendPasswordResetMail(user, resetLink) {
        return this.sendMail({
            to: user.email,
            subject: 'Reset Your Password',
            html: `<p>Hello ${user.name},</p><p>Click <a href="${resetLink}">here</a> to reset your password.</p>`
        });
    }
    
    async sendApplicationConfirmation(user, job) {
        return this.sendMail({
            to: user.email,
            subject: 'Job Application Submitted',
            html: `<p>Hello ${user.name},</p><p>Your application for <strong>${job.jobTitle}</strong> has been submitted.</p>`
        });
    }
}

module.exports = new EmailNotification();