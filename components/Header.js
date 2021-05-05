function Header({ checkin, checkout, country, rooms }) {
    const getDate = (date) => `${moment(date).locale('es').format("dddd D")} de ${moment(date).locale('es').format("MMMM")} de ${moment(date).locale('es').format("Y")}`;
    const getSize = (rooms) => {
        if (rooms == 10) {
        return "pequeños" 
    } else if (rooms == 20) {
        return "medianos"
    } else if (rooms == 30) {
        return "grandes"
    }
    }


    return (
        <div className="row">
            <div className="header"> 
                <h1>
                    Hoteles { rooms && getSize(rooms) }  { country && `en ${country}` } 
                </h1>
                <div className="legend">
                { checkin &&
                    <span>desde el <strong> { getDate(checkin) } </strong></span>
                }
                { checkout && <span> hasta el <strong> { getDate(checkout) } </strong></span> }
                </div>
            </div>
        </div>
    )
}


export default Header;

