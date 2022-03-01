import nodemailer from 'nodemailer';
import  {smtpTransportConfig, mailOptionsConfig} from './config/config'

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
    },
    {
      from: 'Nodemailer <cryptonstudiotest@gmail.com>',
      headers: {
        'X-Laziness-level': 1000 
      }
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