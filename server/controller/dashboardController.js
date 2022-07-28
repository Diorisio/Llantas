const {User}=require('../database/models')

const TotalUsers=async(req,res)=>{
    try {
        const {rows,count }=await User.findAndCountAll({
            include: ['marca','mascota']
         })
         return res.json({productos:rows,totaldeproductos:count})
        
    } catch (error) {
        
    }

}
module.exports={
    TotalUsers
    
}