const axios =require ('axios');
const {Sensors}=require('../database/models')
const jwt= require("jsonwebtoken")




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
        const token = req.headers.authorization.split(' ').pop()
        const tokendata= jwt.verify(token,process.env.SECRET_JWT)
        const alldata=await Sensors.findAll({
            where:{id_user:tokendata.id}
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