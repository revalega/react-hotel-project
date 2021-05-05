import Price from "./Price.js";
import Button from "./Button.js";

function Hotel (props) {
    const { hotelInfo } = props;
    return (
        <div className="hotelContainer" key={hotelInfo.slug}>
            <div>
                <div>
                    <img 
                        className="hotelPhotos" 
                        src={hotelInfo.photo}
                        alt={hotelInfo.name}
                        />
                </div>

                <h2>{hotelInfo.name}</h2>
                <p>{hotelInfo.description}</p>

                <div>
                    <i className={`fas fa-map-marker-alt`}></i> {hotelInfo.city}, {hotelInfo.country} 
                </div>

                <div className="roomPriceContainer">
                    <div>
                        <i className={`fas fa-bed`}></i> {hotelInfo.rooms} Habitaciones
                    </div>
                    <Price price={hotelInfo.price} />
                </div>
            </div>
            <Button />
        </div>
    )
}

export default Hotel;