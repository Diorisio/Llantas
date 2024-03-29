
import axios from "axios"

const Id_boron=localStorage.getItem('id_boron')?localStorage.getItem('id_boron').replaceAll('"', ''):null

const api_url =`https://api.particle.io/v1/devices/${Id_boron}/`
const apikey="?access_token=73aac12607fe32528cb496467576968fff4d00ed"
const apiurl="http://localhost:3400/api/"
const token = localStorage.getItem("token");    



const sensorsco2data=()=>{
    try {
        return axios.get(api_url+"sensor 1"+apikey)
        
    } catch (error) {
        
    }

}

const sensorscodata=()=>{
    try {
        return axios.get(api_url+"sensor 2"+apikey)
        
    } catch (error) {
        
    }

}

const longintuddata=()=>{
    try {
        return axios.get(api_url+"latitud"+apikey)
        
    } catch (error) {
        
    }

}
const latituddata=()=>{
    try {
        return axios.get(api_url+"longitud"+apikey)
        
    } catch (error) {
        
    }

}

const enviodatos=(sensorCO,sensorCO2,latitud,longitud,id_user)=>{
    try {
        return axios.post(apiurl+"guardandodatos",{
            latitud,
            longitud,
            sensorCO,
            sensorCO2,
            id_user
        },{
            headers:{
                "Authorization": "Bearer " + token.replaceAll('"', '')
            }
        })
        
    } catch (error) {
        
    }
}


const sensorsdata = {
    sensorsco2data,
    sensorscodata,
    longintuddata,
    latituddata,
    enviodatos,
    
}
export default sensorsdata