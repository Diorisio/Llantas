import axios from "axios"


const api_url ="http://localhost:3400/api/"

const register=async(nombre,correo,contrasena,numerofijo,numerocelular,cargo,direccion)=>{
    try {
        
        await axios.post(api_url+'envioemail',{
            nombre,
            correo,
            contrasena,
            numerofijo,
            numerocelular,
            cargo,
            direccion

        })
        
    } catch (error) {
        console.log(error)
    }
}

const login=async(correo,contrasena)=>{
    try {
        const token = await axios.post(api_url+'logeado',{
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
const getCurrentUser = () => {
    return localStorage.getItem('user');
}

const loginservices = {
    register,
    login,
    getCurrentUser
}
export default loginservices;