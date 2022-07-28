const axios =require ('axios');
const {Sensors}=require('../database/models')




const sensor=async (req,res)=>{
    try {
        const {sensorCO,sensorCO2,latitud,longitud,id_user}=req.body;

     await Sensors.create({sensorCO,sensorCO2,latitud,longitud,id_user}) 
      res.json("Datos creado");
        
    } catch (error) {
        console.log(error)
        
    }
}
const enviodatos=async(req,res)=>{
    try {
        const alldata=await Sensors.findAll({
            include: ['users']
        }) 
        return res.json(alldata)
        
    } catch (error) {
        console.log(error)
    }
}

module.exports={
    sensor,
    enviodatos
}