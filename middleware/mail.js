const nodemailer = require('nodemailer')

const sendMail = async (to, subject, content) => {
    //let testAccount = await nodemailer.createTestAccount();

    const transporter = nodemailer.createTransport({
        service: "gmail",
        host: 'smtp.gmail.com',
        port: 465,
        auth: {
            user: 'augustbep2022@gmail.com',
            pass: process.env.PASS,
        }
    });


    let info = await transporter.sendMail({
        from: 'augustbep2022@gmail.com',
        to,
        subject,
        html: `<div> ${content} </div>`,
    });

    return info;
};


module.exports = sendMail