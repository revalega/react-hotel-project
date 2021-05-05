import { hotelsData } from "../scripts/data"
import Header from "./Header.js";
import Filters from "./Filters.js";
import Hotels from "./Hotels.js";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checkin: '',
            checkout: '',
            country: undefined,
            rooms: undefined,
            price: undefined,
            today: moment().format('YYYY-MM-DD'),
            hotels: hotelsData,
        }
        this.filterHotels = this.filterHotels.bind(this);
    };


    handleChangeDate(e) {
        const target = e.target;
        const name = target.name;
        const value = target.value;

        // Si quiero setear un nuevo checkin cuya fecha es posterior al checkouT seteado, reseteo el checkout
        if (name === "checkin" && this.state.checkout && value > this.state.checkout ) {
            this.setState(
                    {   
                    checkin: value,
                    checkout: ''  
                    },
                    () => {                        
                    this.filterHotels() 
                }
            );
            return;
        }  
        
        this.setState(
            { [name]: value  },
                () => {                        
                this.filterHotels() 
            }
        );
    }

    handleChangeOption(e) {
        const target = e.target;
        const name = target.name;
        const value = target.value;
        this.setState(
            { [name]: value  },
                () => {                        
                this.filterHotels() 
            }
        );
    }

    filterHotels() {
        const { checkin, checkout, country, rooms, price, hotels } = this.state;
        let filteredHotels = hotelsData.filter(hotel => {
            return (
                (country ? hotel.country === country : hotel) &&
                (price ? hotel.price === Number(price) : hotel) &&
                (checkin ? hotel.availabilityFrom <= moment(checkin, 'YYYY-MM-DD').valueOf() : hotel) &&
                (checkout ? hotel.availabilityTo >= moment(checkout, 'YYYY-MM-DD').valueOf() : hotel) &&
                (rooms 
                    ? (
                        Number(rooms) === 10 ? hotel.rooms <= 10 :
                        Number(rooms) === 20 ? (hotel.rooms >= 11 && hotel.rooms <= 20) :
                        hotel.rooms >= 21
                    ) 
                    : hotel)
            )
        });

        this.setState({hotels: filteredHotels})
    }



    render() { 
        const { checkin, checkout, country, rooms, price, today, hotels } = this.state;

        return (
        <div className="container-fluid">
            <Header {...this.state} />
            <Filters today={today} price={price} country={country} size={rooms} checkinProp={checkin} checkoutProp={checkout} changeDate={ e => this.handleChangeDate(e) } changeOption={ e=> this.handleChangeOption(e) }/>
            <Hotels hotelsList={hotels} price={price} country={country} rooms={rooms} checkinProp={checkin} checkoutProp={checkout}/>
        </div>
    );
}
}

ReactDOM.render(<App />, document.getElementById("app"));

