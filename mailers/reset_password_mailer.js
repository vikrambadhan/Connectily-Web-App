const nodeMailer = require('../config/nodemailer');


exports.newPassword = (data) => {

    nodeMailer.transporter.sendMail({
       from: 'vikram.badhan@gmail.com',
       to: data.user.email,
       // for multiple participants-->> to: 'first_email, second_email',
       subject: "Reset your password!!",
       html: `http://localhost:8000/password/reset/?access-token=${data.accessToken}`
    }, (err, info) => {
        if (err){
            console.log('Error in sending mail', err);
            return;
        }

        console.log('Message sent', info);
        return;
    });
}