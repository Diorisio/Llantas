import axios from "axios"

const apiurl="http://localhost:3400/api/fijo"
const token = localStorage.getItem("token");

const todallanta=()=>{

        return axios.get(apiurl+"/todasllantas",{
            headers:{
                "Authorization": "Bearer " + token.replaceAll('"', '')
            }
        });

    
}


const registrollanta=(tipollanta,rin,cantidad,id_user)=>{
    console.log(id_user)
    
        return axios.post(apiurl+"/registrollantas",
        {
            tipollanta,
            rin,
            cantidad,
            id_user

        },{
            headers:{
                "Authorization": "Bearer " + token.replaceAll('"', '')
            }
        })
        
    
}
const borrarllantas=(data)=>{
    
    return axios.post(apiurl+"/borrarllantas",
        {
            data

        },
        {
            headers:{
                "Authorization": "Bearer " + token.replaceAll('"', '')
            }
        })  


}
const updatellanta=(data,cantidad)=>{
      
    return axios.post(apiurl+"/llantasactual",
    {
        data,
        cantidad

    },
    {
        headers:{
            "Authorization": "Bearer " + token.replaceAll('"', '')
        }
    })  
}

const llantasdata = {
    todallanta,
    registrollanta,
    updatellanta,
    borrarllantas
}
export default llantasdata