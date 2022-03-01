// var nodemailer = require('nodemailer');
// var smtpTransport = require('nodemailer-smtp-transport');
// var handlebars = require('handlebars');
// var fs = require('fs');
// var { smtpTransportConfig, mailOptionsConfig} =require('./config')

// var readHTMLFile = function(path, callback) {
//     fs.readFile(path, {encoding: 'utf-8'}, function (err, html) {
//         if (err) {
//            callback(err); 
//            throw err;
            
//         }
//         else {
//             callback(null, html);
//         }
//     });
// };

// smtpTransport = nodemailer.createTransport(smtpTransport({
//   service: smtpTransportConfig.service,
//   auth: {
//     user: smtpTransportConfig.auth.user,
//     pass: smtpTransportConfig.auth.pass,
//   },
// }));
// const msInMinute = 1000 * 60;
// readHTMLFile('src/assets/confirm.html', function(err, html) {
//     var template = handlebars.compile(html);
//     var replacements = {
//       confirmCode:'confirmCode = 202',
//       emailCodeLifetime:  Math.floor(1000001 / msInMinute),
//       pluralize:'pluralize' ,
//       minute:40,
//       minutes:2,
//     };
//     console.log(Math.floor(1000001 / msInMinute))
//     handlebars.registerHelper('pluralize', (number, singular, plural) => {
//       if (number === 1) {
//         return singular;
//       }
    
//       return (typeof plural === 'string' ? plural : singular + 's');
//     });
//     var htmlToSend = template(replacements);
//     var mailOptions = {
//         from: mailOptionsConfig.emailFrom,
//         to : mailOptionsConfig.emailTo,
//         subject : mailOptionsConfig.subject,
//         html : htmlToSend
//      };
//     smtpTransport.sendMail(mailOptions, function (error, response) {
//         if (error) {
//             console.log(error);
//             callback(error);
//         }
//     });
// });