
const {PuntoRecoleccion}=require('../database/models')
const jwt= require("jsonwebtoken")

const mostrardata=async(req,res)=>{
    try {
        const token = req.headers.authorization.split(' ').pop()
        const tokendata= jwt.verify(token,process.env.SECRET_JWT)
        const alldata=await PuntoRecoleccion.findAll({
            where:{
                id_user:tokendata.id,
                estado:true
            }
        }) 
        return res.json(alldata)
        
    } catch (error) {
        console.log(error)
        
    }
    


}

const registro=async(req,res)=>{
    try {
        const{tipollanta,rin,cantidad,id_user}=req.body
        await PuntoRecoleccion.create({tipollanta,rin,cantidad,id_user})
        res.json("creado")
    } catch (error) {
        console.log(error)
        
    }

    
}

const llantasrecogidas=async(req,res)=>{
    try {
        const{data}=req.body
        await PuntoRecoleccion.update({
            estado:false
        },{    
            where:{id:data}
        })
        return res.json("eliminado con id "+data)
        
    } catch (error) {
        console.log(error)
        
    }


}
const updatellanta=async(req,res)=>{
    try {
        const {data,cantidad}=req.body
        
        await PuntoRecoleccion.update({cantidad},{where:{id:data}})
        res.json('actualizado')
        
    } catch (error) {
        console.log(error)
        
    }

}


module.exports={
    registro,
    mostrardata,
    llantasrecogidas,
    updatellanta
}
