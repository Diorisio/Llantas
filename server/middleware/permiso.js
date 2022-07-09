const jwt= require("jsonwebtoken")
const {Admin}=require('../database/models')

const permiso=(req,res,next)=>{

    const token = req.headers.authorization.split(' ').pop()
    const tokendata= jwt.verify(token,'Y29udHJhc2XxYQ==')

    if(tokendata.cargo=='Admin'){
        next()

    }else{
        res.status(409)
        res.send({error:'No tienen permisos '})
    }

}
module.exports=permiso;