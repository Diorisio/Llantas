const nodemailer = require('nodemailer')


const transporter = nodemailer.createTransport({
    host: "smtp.gmail.email",
    port: 2525,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'rafael110995@gmail.com', // generated ethereal user
      pass: 'wfohjgwocizekrbl', // generated ethereal password
    },
  });

  transporter.verify().then(()=>{
      console.log('listo para enviar');
  })

  module.exports=transporter