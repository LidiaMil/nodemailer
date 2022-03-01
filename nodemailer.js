'use strict';
const nodemailer = require("nodemailer");

nodemailer.createTestAccount((err, account) => {
  if (err) {
    console.error('Failed to create a testing account');
    console.error(err);
    return process.exit(1);
  }
  console.log('Credentials obtained, sending message...');
  let transporter = nodemailer.createTransport(
    {

      service: 'gmail',
      auth: {
        user: 'cryptonstudiotest@gmail.com',
        pass: 'myjbaz-4zijri-tofcoT',
      },
      // logger: true,
      // transactionLog: true // include SMTP traffic in the logs
    },
    {
      from: 'Nodemailer <cryptonstudiotest@gmail.com>',
      headers: {
        'X-Laziness-level': 1000 
      }
    }
  );
  let message = {
    to: 'Nodemailer <lidamilos@gmail.com>',
    subject: 'Nodemailer is unicode friendly ✔' + Date.now(),
    html: { path: 'src/assets/confirm.html' },
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