import './Section5.css'
import map from "../../../img/map.png";
import marker from '../../../img/markerOffic.png'
import officAddress from "../../../img/officAddress.png";

const OurOffices = () => {
    return (
        <section>
            <div className='container'>
                <h2>Наши офисы</h2>
            </div>
            <div className='mapAddress'>
                <img src={map} alt="mar" />
                <img src={marker} alt="marker" />
                <img src={marker} alt="marker" />
                <img src={marker} alt="marker" />
                <img src={marker} alt="marker" />
                <img src={officAddress} alt="address" />
            </div>
        </section>
    )
}
export default OurOffices