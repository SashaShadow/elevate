import "../css/Contact.css";
import { ImWhatsapp } from 'react-icons/im';
import { BsFacebook, BsInstagram } from 'react-icons/bs';
import { FaTiktok } from "react-icons/fa";

const Contact = ({myRef}) => {
    return (
        <div className="Contact">
            <h2 className="titulo" ref={myRef}>CONTÁCTANOS</h2>
            <div className="frase">
                <h2>"If you never try you'll never know"</h2>
                <h3>ELEVATE TEAM</h3>
            </div>
            <div className="Social">
                <h3><a href="https://wa.me/13057993267" target="_blank"><ImWhatsapp className="Icon"/> HABLANOS POR WHATSAPP</a></h3>
                <h3><a href="#"><BsFacebook/> ELEVATEFORMULA</a></h3>
                <h3><a href="#"><BsInstagram/> ELEVATEFORMULA</a></h3>
                <h3><a href="#"><FaTiktok/> ELEVATEFORMULA</a></h3>
            </div>
        </div>
    )
}

export default Contact;