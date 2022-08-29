const {User,PuntoRecoleccion}=require('../database/models')

const TotalUsers=async(req,res)=>{
    try {
        const {rows,count }=await User.findAndCountAll({where:{Revisado:1},attributes: ['cargo','nombre']})
        const {rows:rows1,count:count1 }=await User.findAndCountAll({where:{Revisado:1,cargo:"Punto fijo"}})
         return res.json({usuarios:rows,totaldeusuarios:count,totalpuntos:count1})
        
    } catch (error) {
        console.log(error)
        
    }

}
const llantas=async(req,res)=>{
    try {
        
        const allregistrada=await PuntoRecoleccion.findAll({where:{Estado:1},attributes: ['updatedAt','cantidad']})
        const allrecogidas=await PuntoRecoleccion.findAll({where:{Estado:0},attributes: ['updatedAt','cantidad']})
        const todasresgristadas=allregistrada.reduce((ante,actual)=>ante+actual.cantidad,0)
        const todasrecogidas=allrecogidas.reduce((ante,actual)=>ante+actual.cantidad,0)
        res.json({registradas:todasresgristadas,
            recogidas:todasrecogidas,
            registradasversus:allregistrada,
            recogidasversus:allrecogidas})

        
    } catch (error) {
        console.log(error)
    }
}

module.exports={
    TotalUsers,
    llantas,
    
}