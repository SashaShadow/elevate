import Us from "./Us.js";
import Content from "./Content.js";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "../css/MySlider.css";

const MySlider = () => {

      return (
    <div className="slider-container">
        <h2 className="titulo">FOTOS</h2>
    <Carousel showStatus={false} showThumbs={false} width={"100%"} useKeyboardArrows={true} >
        <div className="elemento" >
            <img src="https://assets.afcdn.com/story/20191220/2035828_w2121h2121c1cx1061cy707cxt0cyt0cxb2121cyb1414.jpg" />
            <p className="legend">Fitness Girl</p>
        </div>
        <div className="elemento">
            <img style={{width:"50vw",marginLeft:"auto",marginRight:"auto"}} src="https://phantom-marca.unidadeditorial.es/925b914cc87d6ef2b248d3a3689f68c9/resize/1320/f/jpg/assets/multimedia/imagenes/2021/08/30/16303376282824.jpg" />
            <p className="legend">Fitness Girl 2</p>
        </div>
        <div className="elemento">
            <img style={{width:"50vw",marginLeft:"auto",marginRight:"auto"}} src="https://www.dexeus.com/blog/wp-content/uploads/2019/11/shutterstock_1495916660-1000x640.jpg" />
            <p className="legend">Fitness Girl 3</p>
        </div>
    </Carousel>
    </div>
      );
}

export default MySlider;