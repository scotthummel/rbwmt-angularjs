"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var message_1 = require("../api/models/message");
var env_1 = require("../ngApp/env/env");
var nodemailer = require('nodemailer');
var router = express.Router();
router.post('/', function (req, res) {
    var message = new message_1.default();
    message.name = req.body.message.name;
    message.phone = req.body.message.phone;
    message.email = req.body.message.email;
    message.body = req.body.message.body;
    var transporter = nodemailer.createTransport({
        host: env_1.default.mailhost,
        port: env_1.default.port,
        secure: true,
        auth: {
            user: env_1.default.username,
            pass: env_1.default.password
        }
    });
    var text = "Name: " + message.name + ", Phone: " + message.phone + ", Email: " + message.email + ", Message: " + message.body;
    var html = "<strong>Name:</strong> " + message.name + "<br /> <strong>Phone:</strong> " + message.phone + "<br /> <strong>Email:</strong> " + message.email + "<br /><strong>Message:</strong> " + message.body + "<br />";
    var mailOptions = {
        from: '"Restoration Bodywork and Massage Therapy" ' + env_1.default.address,
        to: env_1.default.to,
        subject: 'Message from the Website',
        text: text,
        html: html
    };
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            return console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
        return info.response;
    });
});
exports.default = router;
