import axios from "axios"


const api_url ="http://localhost:3400/api/admin"
const token = localStorage.getItem("user");

const allpendient =()=>{
    try {
        return axios.get(api_url+'/revisado',{
            /* headers:{
                "Authorization": "Bearer " + token.replaceAll('"', '')
            } */
        })    
    } catch (error) {
        console.log(error)
    }
}

const login=async(correo,contrasena)=>{
    try {
        const token = await axios.post(api_url+'/login',{
            correo,
            contrasena
            
        })
        console.log(token)
        if (token.data) {
            localStorage.setItem('user', JSON.stringify(token.data));
        }   
    } catch (error) {
        const err=error.response.data
        return err
        
    }
}


const adminservices = {
    allpendient,
    login
}
export default adminservices;