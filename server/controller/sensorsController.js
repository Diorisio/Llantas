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


module.exports={
    sensor
}