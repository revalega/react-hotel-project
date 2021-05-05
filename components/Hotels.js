import Hotel from "./Hotel.js";

function Hotels (props) {
    const { hotelsList, price, country, rooms, checkinProp, checkoutProp } = props;
    console.log(rooms);
    
    const getSize = (rooms) => {
        if (rooms == 10) {
        return "pequeños" 
    } else if (rooms == 20) {
        return "medianos"
    } else if (rooms == 30) {
        return "grandes"
    }
    }

    const getPrice = (price) => {
    if (price == 1) {
        return "bajo" 
    } else if (price == 2) {
        return "intermedio"
    } else if (price == 3) {
        return "alto"
    }else if (price == 4) {
        return "muy alto"
    }
    }

    return (
        <div>
        { hotelsList == 0 ? 
            <div className="noHotels"> <span className="searchIcon"><i class="fas fa-search-location"></i></span>
                Lo sentimos. <br></br>
                No hay hoteles 
                { rooms && ` ${getSize(rooms)}` }  
                { price && ` de precio ${getPrice(price)}`} 
                {" "} disponibles{ country && ` en ${country}`}
                { (checkinProp || checkoutProp) && " en la fecha seleccionada"}.
            </div>
        :
        <div className="row allHotelsContainer">
        { hotelsList.map(oneHotel => <Hotel hotelInfo={oneHotel}/>) }
        </div>
        }
        </div>
    )
}

export default Hotels;