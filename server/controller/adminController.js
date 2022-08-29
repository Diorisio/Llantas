const {Admin,User}=require('../database/models')
const jwt = require('jsonwebtoken');

const login=async(req,res)=>{

    try {
        const {correo,contrasena}=req.body;
        const admin = await Admin.findOne({
            where:{
                correo,
            }
        });
        if (await admin.validPassword(contrasena)) {
            const token = jwt.sign({cargo:"Admin",name:admin.nombre,id:admin.id}, process.env.SECRET_JWT);
            const decodificado=jwt.verify(token,process.env.SECRET_JWT)
            return res.json ({decodificado,token});
            
        }else{
            return res.status(401).json('Admin/contrasena invalida')
        }
        
    } catch (error) {
        return res.status(401).json('Admin/contrasena invalid');
        
    }

}
const register=async(req,res)=>{
    try {
        

        const { nombre,correo,contrasena} = req.body;
        await Admin.create({ nombre,correo,contrasena});

        res.json("Admin creado");
        
    } catch (error) {
        console.log(error)
        
    }

}

const allUser=async(req,res)=>{
    try {
        const users = await User.findAll({where:{
            Revisado:0
        }});
        res.json(users);
        
    } catch (error) {
        console.log(error)
        
    }
}

const aceptado=async(req,res)=>{
    const {data,id_boron}=req.body;

    await User.update({
        Revisado:1,
        id_boron
    },{
        where:{id:data}
    })
    res.json('actualizado')

}
const idboron=async(req,res)=>{
    try {
        const {data,id_boron}=req.body
        console.log(data,id_boron)
        await User.update({idboron},{where:{id:data}})
        res.json('actualizado')
        
    } catch (error) {
        console.log(error)
        
    }

}

module.exports={
    login,
    register,
    allUser,
    aceptado
}