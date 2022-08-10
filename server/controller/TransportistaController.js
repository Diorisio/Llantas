const {Transportista} = require('./../database/models')


const registro=async(req,res)=>{
    try {
        const{tipo_de_vehiculo,capacidad,origen,destino,id_user}=req.body
        await Transportista.create({tipo_de_vehiculo,capacidad,origen,destino,id_user})
        res.json('creado')
        
    } catch (error) {
        console.log(error)
        
    }

}
module.exports={
    registro
}