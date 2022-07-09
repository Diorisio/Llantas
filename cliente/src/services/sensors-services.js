
import axios from "axios"


const api_url ="https://api.particle.io/v1/devices/e00fce68b4ef2c6c0f75144f/analogvalue?access_token=73aac12607fe32528cb496467576968fff4d00ed"


const sensorsdata=()=>{
    try {
        return axios.get(api_url)
        
    } catch (error) {
        
    }

}
export default sensorsdata