import "../css/Brand.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Brand = ({scroll, ref1, ref2}) => {

    const [links, setLinks] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setLinks(true);
        }, 1500)
    }, [])

    return (
        <div className="Brand">
            <div className="titles">
                <h1 className='titulo'>ELEVATE</h1>
                <h3>FORMULA</h3>
            </div>
            {links && <div className="Links">
                <a href="#"><h3>HOME</h3></a>
                <a onClick={() => scroll(ref1)}><h3>NOSOTRAS</h3></a>
                <a onClick={() => scroll(ref2)}><h3>CONTACTANOS</h3></a>
                <a><h3>CONTENIDO</h3></a>
                </div>}
        </div>
    )
}

export default Brand;