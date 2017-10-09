import * as express from 'express';
import Message from '../api/models/message';
import env from '../ngApp/env/env';


const nodemailer = require('nodemailer');

let router = express.Router();

router.post('/', (req, res) => {
    let message = new Message();
    message.name = req.body.message.name;
    message.phone = req.body.message.phone;
    message.email = req.body.message.email;
    message.body = req.body.message.body;

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: env.mailhost,
        port: env.port,
        secure: true, // secure:true for port 465, secure:false for port 587
        auth: {
            user: env.username,
            pass: env.password
        }
    });

    let text = `Name: ${message.name}, Phone: ${message.phone}, Email: ${message.email}, Message: ${message.body}`;
    let html = `<strong>Name:</strong> ${message.name}<br /> <strong>Phone:</strong> ${message.phone}<br /> <strong>Email:</strong> ${message.email}<br /><strong>Message:</strong> ${message.body}<br />`;

    // setup email data with unicode symbols
    let mailOptions = {
        from: '"Restoration Bodywork and Massage Therapy" ' + env.address, // sender address
        to: env.to, // list of receivers
        subject: 'Message from the Website', // Subject line
        text: text, // plain text body
        html: html // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
        return info.response;
    });
});

export default router;
