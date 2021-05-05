function Price(props) {

    const { price } = props;

    return (

                <div>
                <i className={"fas fa-dollar-sign " + (price >= 1 ? 'black' : 'grey')}
                />
                <i className={"fas fa-dollar-sign " + (price >= 2 ? 'black' : 'grey')}
                />
                <i className={"fas fa-dollar-sign " + (price >= 3 ? 'black' : 'grey')}
                />
                <i className={"fas fa-dollar-sign " + (price >= 4 ? 'black' : 'grey')}
                />
                </div>
            
    )
    }
    
    export default Price;