// import nodemailer from 'nodemailer';
var  {smtpTransportConfig, mailOptionsConfig} = require( './config/config.js' )
var nodemailer = require('nodemailer');
var handlebars = require('handlebars');
var fs = require('fs');

nodemailer.createTestAccount((err, account) => {
  if (err) {
    console.error('Failed to create a testing account');
    console.error(err);
    return process.exit(1);
  }
  console.log('Credentials obtained, sending message...');
  let transporter = nodemailer.createTransport(
    {
      service: smtpTransportConfig.service,
      auth: {
        user: smtpTransportConfig.auth.user,
        pass: smtpTransportConfig.auth.pass,
      },
    }
  );
  let message = {
    from: mailOptionsConfig.emailFrom,
    to : mailOptionsConfig.emailTo,
    subject : mailOptionsConfig.subject,
    html: { path: 'src/templates/confirm.hbs' },
    attachments: [
    ],
  };
  transporter.sendMail(message, (error, info) => {
    if (error) {
      console.log('Error occurred');
      console.log(error.message);
      return process.exit(1);
    }
    console.log('Message sent successfully!',info);
    console.log(nodemailer.getTestMessageUrl(info));
    transporter.close();
  });
});