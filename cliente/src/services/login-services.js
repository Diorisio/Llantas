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
        console.log(token.data.decodificado)
        if (token.data.token) {
            localStorage.setItem('token', JSON.stringify(token.data.token));
            localStorage.setItem('nombreuser', JSON.stringify(token.data.decodificado.name));
            localStorage.setItem('Cargo', JSON.stringify(token.data.decodificado.cargo));
            localStorage.setItem('id', JSON.stringify(token.data.decodificado.id));
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