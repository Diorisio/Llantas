
import axios from "axios"


const api_url ="https://api.particle.io/v1/devices/e00fce68b4ef2c6c0f75144f/"
const apikey="?access_token=73aac12607fe32528cb496467576968fff4d00ed"


const sensorsco2data=()=>{
    try {
        return axios.get(api_url+"sensor 1"+apikey)
        
    } catch (error) {
        
    }

}
const longintuddata=()=>{
    try {
        return axios.get(api_url+"longitud"+apikey)
        
    } catch (error) {
        
    }

}
const latituddata=()=>{
    try {
        return axios.get(api_url+"latitud"+apikey)
        
    } catch (error) {
        
    }

}

const sensorsdata = {
    sensorsco2data,
    longintuddata,
    latituddata
}
export default sensorsdata