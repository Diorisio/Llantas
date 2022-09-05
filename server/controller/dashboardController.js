
const {User,PuntoRecoleccion}=require('../database/models')
const { Op, DATEONLY, DATE } = require("sequelize");
const { Sequelize } = require('sequelize');

const TotalUsers=async(req,res)=>{
    try {
        const {count }=await User.findAndCountAll({where:{Revisado:1},attributes: ['id','cargo','nombre']})
        const {rows:rows1,count:count1 }=await User.findAndCountAll({where:{Revisado:1,cargo:"Punto fijo"}})
        const alluser=await User.findAll({where:{Revisado:1,cargo:"Recolector"},attributes: ['id','cargo','nombre','id_boron']})
         return res.json({usuarios:alluser,totaldeusuarios:count,totalpuntos:count1})
        
    } catch (error) {
        console.log(error)
        
    }

}
const llantas=async(req,res)=>{
    try {
        
        const allregistrada2=await PuntoRecoleccion.findAll({where:{Estado:1},attributes:  [[Sequelize.fn('sum', Sequelize.col('cantidad')), 'cantidad']]})

        const allregistradafecha=await PuntoRecoleccion.findAll({where:{Estado:1}, group: [Sequelize.fn('day', Sequelize.col('createdAt'))],
        attributes: ['createdAt', [Sequelize.fn('sum', Sequelize.col('cantidad')), 'cantidad']],})

        const allrecogidafecha=await PuntoRecoleccion.findAll({where:{Estado:0}, group: [Sequelize.fn('day', Sequelize.col('createdAt'))],
        attributes: ['createdAt', [Sequelize.fn('sum', Sequelize.col('cantidad')), 'cantidad']],})
           
        res.json({registradas:allregistrada2,
            allregistradas:allregistradafecha,
            allrecogida:allrecogidafecha,})

        
    } catch (error) {
        console.log(error)
    }
}




module.exports={
    TotalUsers,
    llantas,
    
}