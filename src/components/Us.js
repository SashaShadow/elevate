import "../css/Us.css";
import example from "../img.jpg";
import example2 from "../img2.jpg";

const Us = ({myRef}) => {
    return (
        <div className="Us">
           <h2 ref={myRef} className="titulo">¿QUIÉNES SOMOS?</h2>
           <div className="photos">
            <img className="photo" src={example}/>
            <img className="photo" src={example2}/>
           </div>
           <div className="text">
            <p>ELEVATE FORMULA FITNESS, una plataforma que te brinda todo lo necesario para vivir una vida holística.</p> 
            <p>Las fundadoras Ivanna Farro y Sofia Corripio Smizmaul encontraron su pasión y el balance en su vida mediante el ejercicio,
                viviendo en 2 diferentes países han podido lograr un negocio que impacta de manera positiva el fitness digital.</p>
            <p>Nuestro proyecto nace con la necesidad de brindar las herramientas necesarias que necesita cualquier mujer, para mantener
                una vida saludable desde la comodidad de su casa, obteniendo resultados increíbles.
            </p>
            <p>Desde ejercicios básicos hasta avanzados, planes de alimentación para cualquier mujer, y meditaciones de cualquier tipo</p>
            <p>La principal razón por la que mantenemos nuestra misión muy clara es por el simple hecho de brindarte la seguridad 
                y el equilibrio que necesitas para lograr todo aquello que nos proponemos en la vida.</p>
           </div>
        </div>
    )
}

export default Us;