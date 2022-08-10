
const {PuntoRecoleccion}=require('../database/models')


const mostrardata=async(req,res)=>{
    try {
        const alldata=await PuntoRecoleccion.findAll()

        res.json(alldata)
        
    } catch (error) {
        console.log(error)
        
    }
    


}

const registro=async(req,res)=>{
    try {
        const{tipollanta,rin,cantidad}=req.body
        await PuntoRecoleccion.create({tipollanta,rin,cantidad})
        res.json("creado")
    } catch (error) {
        console.log(error)
        
    }

    
}

const llantasrecogidas=async(req,res)=>{
    try {
        const{data}=req.body
        await PuntoRecoleccion.destroy({    
            where:{id:data}
        })
        return res.json("eliminado con id "+data)
        
    } catch (error) {
        console.log(error)
        
    }


}
module.exports={
    registro,
    mostrardata,
    llantasrecogidas
}
