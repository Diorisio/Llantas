
const {PuntoRecoleccion}=require('../database/models')


const mostrardata=async(req,res)=>{
    const alldata=await PuntoRecoleccion.findAll()

    res.json(alldata)


}

const registro=async(req,res)=>{

    const{tipollanta,rin,cantidad}=req.body

    await PuntoRecoleccion.create({tipollanta,rin,cantidad})
    res.json("creado")
}
module.exports={
    registro,
    mostrardata
}
