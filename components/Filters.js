function Filters(props) {

        const { today, country, price, size, changeDate, changeOption, checkinProp, checkoutProp } = props;
    
        return (
        <div>
            <div className="row filtersContainer">
                <div className="selectContainer">
                    <span className="selectIcon"><i
                    className={`fas fa-sign-in-alt`}></i></span>
                    <input className="date" type='date' min={today} name="checkin" onChange={changeDate} value={checkinProp} placeholder="dd-mm-yyyy" pattern="\d{1,2}/\d{1,2}/\d{4}"/>
                </div> 

                <div className="selectContainer">
                    <span className="selectIcon"><i
                    className={`fas fa-sign-out-alt`}></i></span>
                    {/* Si el checkin está ingresado, el día mínimo de checkout es al día siguiente del checkin, si no es mañana */}
                    <input className="date" type='date' min={checkinProp ? moment(checkinProp).add(1, 'days').format('YYYY-MM-DD') : moment(today).add(1, 'days').format('YYYY-MM-DD') } name="checkout" onChange={changeDate} value={checkoutProp} placeholder="dd-mm-yyyy"/>
                </div> 

                <div className="selectContainer arrow">
                    <span className="selectIcon"><i
                    className={`fas fa-map-marker-alt`}></i></span>
                    <select name="country" onChange={changeOption} value={country}>
                        <option value="" selected>Todos los países</option>
                        <option value="Argentina">Argentina</option> 
                        <option value="Brasil">Brasil</option> 
                        <option value="Chile">Chile</option> 
                        <option value="Uruguay">Uruguay</option> 
                    </select>
                </div>
                
                <div className="selectContainer arrow">
                    <span className="selectIcon"><i
                    className={`fas fas fa-dollar-sign`}></i></span>
                    <select name="price" onChange={changeOption} value={price}>
                        <option value="" selected>Cualquier precio</option>
                        <option value="1">$</option> 
                        <option value="2">$$</option> 
                        <option value="3">$$$</option> 
                        <option value="4">$$$$</option> 
                    </select>
                </div> 
                
                <div className="selectContainer arrow">
                    <span className="selectIcon"><i
                    className={`fas fas fa-bed`}></i></span>
                    <select name="rooms" onChange={changeOption} value={size}>
                        <option value="">Cualquier tamaño</option>
                        <option value="10">Hotel Pequeño</option> 
                        <option value="20">Hotel Mediano</option> 
                        <option value="30">Hotel Grande</option> 
                    </select>
                </div>   


            </div>  
        </div>      
    );
}

export default Filters;

