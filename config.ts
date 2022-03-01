
const smtpTransport = {
    service: 'gmail',
    auth: {
        user: 'example@gmail.com',
        pass: 'passpass',
    }
}

const mailOptions ={
    emailFrom: 'example@export.com',
    emailTo: 'example@export.com',
    subject: 'test subject',
}
