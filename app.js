let nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: 'gmail',
    secure: false,
    port: 25,
    auth: {
        user:'contributewoodbury@gmail.com',
        pass: 'tlessivrjmuousbz'
    },
    tls: {
        rejectUnauthorized: false
    }
});

let HelperOptions = {
    from: '"Contribute Woodbury" <contributewoodbury@gmail.com>',
    to: 'mattlissick@gmail.com',
    subject: 'Hello, world!',
    text: 'This is a test of the nodemailer module'
};

transporter.sendMail(HelperOptions, (error, info) => {
    if(error){
        return console.log(error);
    }
    console.log("Message sent!");
    console.log(info);  
});
