import {Routes,Route} from "react-router-dom"


import Register from "./Register"
import Footer from "./Footer"
import Cabecera from "./Cabecera"
import Tablasdeaceptacion from "./Tablas/Tablasdeaceptacion"
import Login from "./Login"
import LoginAdmin from "./LoginAdmin"
import Inicio from "./Inicio";
import Perfilconductor from "./Perfilconductor"
import Puntofijo from "./Puntofijo"
import Pruebamaps from "./Pruebamaps"




function App() {
    


    return(
        <>
         <Cabecera/>
         <Routes>
             <Route path="/" element={<Inicio/>}/>
             <Route path="/registro" element={<Register/>}/>
             <Route path="/Tabla" element={<Tablasdeaceptacion />}/>
             <Route path="/login" element={<Login />}/>
             <Route path="/adminlogin" element={<LoginAdmin />}/>
             <Route path="/conductor" element={<Perfilconductor />}/>
             <Route path="/recolector" element={<Puntofijo />}/>
             <Route path="/prueba" element={<Pruebamaps />}/>
    
             
         </Routes>
         <Footer/>
        
        </>
    )
    
}

export default App