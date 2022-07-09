import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from "react-router-dom"

function Cabecera(){

    return(
        <>
        <header>
            <div className='cabeza'>
            <Link to="/" className='enlacesgeneral'><h3>SENNOVA/SENA</h3></Link>
            <div className='iconos'>
                <TwitterIcon></TwitterIcon>
                <FacebookIcon></FacebookIcon>
                <InstagramIcon></InstagramIcon>
                
            </div>
            </div>
            
            
        </header>
        
        </>
    )

}

export default Cabecera