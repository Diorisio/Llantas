import Barralogin from "../Barralogin";
import Cuerpo from "./Cuerpo";
import SideList from "./SideList";



export default function Dashboard() {
    return(
        <>
        <Barralogin></Barralogin>
        <div className="cuerpo-dashboard">
        <SideList></SideList>
        <Cuerpo></Cuerpo>
        </div>
        </>
    )
    
}