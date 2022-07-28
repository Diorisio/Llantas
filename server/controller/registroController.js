const res = require("express/lib/response")
const nodemailer = require("nodemailer")
const {User}=require('../database/models')
const jwt = require('jsonwebtoken');

const envioemail=async(req,res)=>{
    try {
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'rafael110995@gmail.com',
              pass: 'wfohjgwocizekrbl'
            }
        })
      
        var mailOptions = {
            from: req.body.correo,
            to:"r578@hotmail.com",
            subject:"En espera de aceptación",
            html:`
            <b>Enlace para la aceptacion del nuevo integrante</b>
            <a href="http://localhost:3000/Tabla">Informacion</a>
            `
        }
      
        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                console.log(error)
            } else {
                console.log("Email Sent: " + info.res)
            }
            
        })
        const users = await User.findAll({});

        const { nombre,correo, numerocelular, numerofijo, cargo,contrasena,direccion } = req.body;
        const user = await User.create({ nombre,correo, numerocelular, numerofijo, cargo,contrasena,direccion });

        res.json('Usuario logeado');
        
    } catch (error) {
        console.log(error)
        
    }
    
  
}

const login=async(req,res)=>{
    try {
        const {correo,contrasena}=req.body;
        const user = await User.findOne({
            where:{
                correo,
                Revisado:1
            }
        });
        if (await user.validPassword(contrasena)) {
            const token = jwt.sign({name:user.nombre,id:user.id}, process.env.SECRET_JWT);
            console.log('valido')
            const decodificado=jwt.verify(token,process.env.SECRET_JWT)
            return res.json ({decodificado,token});
            
        }else{
            return res.status(401).json('usuario/contraseña incorrecto')
        }
        
    } catch (error) {
        return res.status(401).json('usuario/contraseña incorrecto');
        
    }

}
module.exports={
    envioemail,
    login
}