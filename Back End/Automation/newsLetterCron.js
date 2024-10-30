const cron = require('node-cron');
const JobModel = require('../Models/JobModel/jobSchema');
const UserModel = require('../Models/UserModel/userSchema');
const sendEmail = require('../Utils/SendEmail');

const newsLetterCron = () => {
    cron.schedule('*/1 * * * *', async () => { // Runs every minute
        console.log('Running a news letter cron job');
        try {
            const jobs = await JobModel.find({ newsLetterSent: false });

            for (const job of jobs) {
                try {
                    const filteredUsers = await UserModel.find({
                        $or: [
                            { "niches.firstNich": job.jobNiche },
                            { "niches.secondNich": job.jobNiche },
                            { "niches.thirdNich": job.jobNiche }
                        ]
                    });

                    for (const user of filteredUsers) {
                        const subject = `🚀 New Job Opportunity in ${job.jobNiche}!`; // Improved subject with an emoji for attention

                        const message = `
                            Hi ${user.name},
                            
                            We're excited to share a new job opening that matches your interests!
                            
                            Position: ${job.title}
                            Company: ${job.company}
                            Location: ${job.location}
                            Niche: ${job.jobNiche}
                            
                            🎯 About the Role:
                            ${job.description}
                            
                            If you’re interested, click here to apply now: your-application-link
                            
                            Best regards,
                            Your Team Name
                            
                            💼 Follow us for more updates:
                            LinkedIn: your-linkedin-url | Twitter: your-twitter-url | Website: your-website-url
                        `; // Plain text message

                        await sendEmail(user.email, subject, message);
                    }

                    job.newsLetterSent = true;
                    await job.save();

                } catch (error) {
                    console.error({ message: 'Error processing job:', error: error.message });
                }
            }

        } catch (error) {
            console.error('Error running cron task:', error.message);
        }
    });
};

module.exports = newsLetterCron;
