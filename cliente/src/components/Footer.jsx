import WhereToVoteIcon from '@mui/icons-material/WhereToVote';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailIcon from '@mui/icons-material/Mail';

function Footer() {
    return(
        <>
        <footer>
            <div className='footer-informacion'>
            <div className="enlacesfooter enlacesgeneral">
                <b><a href="/">Reportar llantas</a></b>
                <b><a href="/">Tranportista</a></b>
                <b><a href="/">Recolector</a></b>
            </div>
            <div className="informacion">
                <h2>Informacion de contacto</h2>
                <WhereToVoteIcon></WhereToVoteIcon>
                <LocalPhoneIcon></LocalPhoneIcon>
                <MailIcon></MailIcon>
                <p></p>
            </div>
            </div>
            
        <p>&copy; 2022 periodo de prueba</p>
        </footer>
        </>
    )
    
}

export default Footer