const nodeMailer = require('nodemailer');

const sendEmail = async (to, subject, message) => {
    try {
        const transporter = nodeMailer.createTransport({
            host: process.env.SMTP_HOST,
            service: process.env.SMTP_SERVICE,
            port: process.env.SMTP_PORT,
            auth: {
                user: process.env.SMTP_EMAIL,
                pass: process.env.SMTP_PASSWORD
            }
        });

        const mailOptions = {
            from: process.env.SMTP_EMAIL,
            to: to,
            subject: subject,
            text: message
        };

        await transporter.sendMail(mailOptions);
    } catch (error) {
        console.error('Error sending email:', error.message);
    }
};

module.exports = sendEmail;