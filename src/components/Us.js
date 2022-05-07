import "../css/Us.css";
import example from "../img.jpg";
import example2 from "../img2.jpg";

const Us = () => {
    return (
        <div className="Us">
           <h2 className="titulo">¿QUIÉNES SOMOS?</h2>
           <div className="photos">
            <img className="photo" src={example}/>
            <img className="photo" src={example2}/>
           </div>
           <div className="text">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur magnam mollitia delectus.</p> 
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora voluptatem cumque veniam nesciunt iusto fugiat asperiores mollitia saepe architecto dolores, 
            aspernatur commodi, excepturi dicta officia eum, praesentium labore sit suscipit! asperiores quibusdam expedita odio perspiciatis libero repellat. </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Voluptate obcaecati enim suscipit perferendis modi consequuntur magnam optio sunt consectetur eos?</p>
           </div>
        </div>
    )
}

export default Us;