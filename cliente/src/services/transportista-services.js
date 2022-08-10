import axios from "axios"
const token = localStorage.getItem("token");
const apiurl="http://localhost:3400/api/transportista"

const registro=(tipo_de_vehiculo,capacidad,origen,destino,id_user)=>{

    return axios.post(apiurl+"/registro",
    {
    tipo_de_vehiculo,capacidad,origen,destino,id_user

    },
    
    {
        headers:{
            "Authorization": "Bearer " + token.replaceAll('"', '')
        }
    });

}



const transportista={
    registro,

}
export default transportista