const jwt= require("jsonwebtoken")
const {User}=require('../database/models')


const permisodriver=async(req,res,next)=>{

    const token = req.headers.authorization.split(' ').pop()
    const tokendata= jwt.verify(token,process.env.SECRET_JWT)
    
    const user=await User.findOne({
        where:{
            id:tokendata.id,
        }
    })

    if(user.cargo=='Recolector'){
        next()

    }else{
        return res.status(401).json('No tiene acceso')
    }
}
const permisoPuntoRecoleccion=async(req,res,next)=>{

    const token = req.headers.authorization.split(' ').pop()
    const tokendata= jwt.verify(token,process.env.SECRET_JWT)
    const user=await User.findOne({
        where:{
            id:tokendata.id,
        }
    })

    if(user.cargo=='Punto fijo'){
        next()

    }else{
        return res.status(401).json('No tiene acceso')
    }
}

module.exports={
    permisodriver,
    permisoPuntoRecoleccion
};