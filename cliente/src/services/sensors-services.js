
import axios from "axios"


const api_url ="https://api.particle.io/v1/devices/e00fce68b4ef2c6c0f75144f/"
const apikey="?access_token=73aac12607fe32528cb496467576968fff4d00ed"
const apiurl="http://localhost:3400/api/"


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

const enviodatos=(sensorCO,sensorCO2,latitud,longitud)=>{
    try {
        return axios.post(apiurl+"guardandodatos",{
            latitud,
            longitud,
            sensorCO,
            sensorCO2
        })
        
    } catch (error) {
        
    }
}
const recibirdata=()=>{
    try {
        return axios.get(apiurl+"enviodata")
        
    } catch (error) {
        console.log(error)
        
    }

}

const sensorsdata = {
    sensorsco2data,
    sensorscodata,
    longintuddata,
    latituddata,
    enviodatos,
    recibirdata
}
export default sensorsdata