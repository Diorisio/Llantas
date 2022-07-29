import axios from "axios"

const apiurl="http://localhost:3400/api/fijo"
const token = localStorage.getItem("token");

const todallanta=()=>{
         console.log(token)

        return axios.get(apiurl+"/todasllantas",{
            headers:{
                "Authorization": "Bearer " + token.replaceAll('"', '')
            }
        });

    
}


const registrollanta=(tipollanta,rin,cantidad)=>{
    
        return axios.post(apiurl+"/registrollantas",
        {
            tipollanta,
            rin,
            cantidad

        },{
            headers:{
                "Authorization": "Bearer " + token.replaceAll('"', '')
            }
        })
        
    
}

const llantasdata = {
    todallanta,
    registrollanta
}
export default llantasdata