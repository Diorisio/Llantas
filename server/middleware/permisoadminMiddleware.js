const jwt= require("jsonwebtoken")


const permiso=(req,res,next)=>{

    const token = req.headers.authorization.split(' ').pop()
    const tokendata= jwt.verify(token,process.env.SECRET_JWT)

    if(tokendata.cargo=='Admin'){
        next()

    }else{
        return res.status(401).json('No tiene acceso')
    }

}
module.exports=permiso;