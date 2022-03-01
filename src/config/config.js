
 const smtpTransportConfig = {
    service: 'gmail',
    auth: {
        user: 'exapmle@gmail.com',
        pass: 'exapmle',
    }
}

 const mailOptionsConfig ={
    emailFrom: 'exapmle@gmail.com',
    emailTo: 'exapmle@gmail.com',
    subject: 'Nodemailer is unicode friendly ✔',
}

module.exports ={
    smtpTransportConfig,mailOptionsConfig
}