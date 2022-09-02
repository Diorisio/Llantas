import axios from "axios"


const api_url ="http://localhost:3400/api/admin"
const token = localStorage.getItem("token");

const allpendient =()=>{
    try {
        return axios.get(api_url+'/revisado',{
            headers:{
                "Authorization": "Bearer " + token.replaceAll('"', '')
            }
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
const aceptado=(data,id_boron)=>{

    axios.post(api_url+'/aceptado',{
        data,
        id_boron
    },{
        headers:{
            "Authorization": "Bearer " + token.replaceAll('"', '')
        }
    })

}
const recibirdata=(id_user)=>{
    try {
        return axios.post(api_url+"/enviodata",{
            id_user
        },{
            headers:{
                "Authorization": "Bearer " + token.replaceAll('"', '')
            }
        })
        
    } catch (error) {
        console.log(error)
        
    }

}


const adminservices = {
    allpendient,
    login,
    aceptado,
    recibirdata
}
export default adminservices;