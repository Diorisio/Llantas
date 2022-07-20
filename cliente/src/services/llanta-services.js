import axios from "axios"

const apiurl="http://localhost:3400/api/recolector"

const todallanta=()=>{
    try {
        return axios.get(apiurl+"todasllantas")

    } catch (error) {
        
    }
}


const registrollanta=(tipollanta,rin,cantidad)=>{
    try {
        return axios.post(apiurl+"registrollantas",{
            tipollanta,
            rin,
            cantidad

        })
        
    } catch (error) {
        
    }
}

const llantasdata = {
    todallanta,
    registrollanta
}
export default llantasdata