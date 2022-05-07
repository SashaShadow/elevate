import "../css/Contact.css";
import { ImWhatsapp } from 'react-icons/im';
import { BsFacebook, BsInstagram } from 'react-icons/bs';
import { IconContext } from "react-icons";
import { FaTiktok } from "react-icons/fa";

const Contact = () => {
    return (
        <div className="Contact">
            <h2 className="titulo">CONTÁCTANOS</h2>
            <div className="Social">
                <h3><a href="https://wa.me/13057993267" target="_blank"><ImWhatsapp className="Icon"/> +1305-799-3267</a></h3>
                <h3><BsFacebook/> ELEVATEFORMULA</h3>
                <h3><BsInstagram/> ELEVATEFORMULA</h3>
                <IconContext.Provider value={{ color: "white", className: "global-class-name" }}>
                    <h3><FaTiktok/> ELEVATEFORMULA</h3>
                </IconContext.Provider>
            </div>
        </div>
    )
}

export default Contact;