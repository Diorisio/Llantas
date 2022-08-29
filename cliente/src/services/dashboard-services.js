import axios from "axios"


const api_url ="http://localhost:3400/api/dashboard"
const token = localStorage.getItem("token");


const alluser=()=>{
    return axios.get(api_url+'/',{
        headers:{
            "Authorization": "Bearer " + token.replaceAll('"', '')
        }
    })  

}
const llantas=()=>{
    return axios.get(api_url+'/llantas',{
        headers:{
            "Authorization": "Bearer " + token.replaceAll('"', '')
        }
    })  

}

const dashboardservices = {
    alluser,
    llantas
}
export default dashboardservices;