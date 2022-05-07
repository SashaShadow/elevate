import "../css/Brand.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Brand = () => {

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
                <h3>HOME</h3>
                <h3>NOSOTRAS</h3>
                <h3>CONTACTANOS</h3>
                </div>}
        </div>
    )
}

export default Brand;