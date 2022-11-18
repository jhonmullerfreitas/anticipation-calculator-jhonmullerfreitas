import "./styles.css"

const DisplayComponent = ({data}) =>{

    return(
        <div className="container-display" >
            <h3>Você receberá:</h3>
                <div>
                    {
                        Object.keys(data).map((prazo, index) =>
                            <p key={index}>Em {prazo} dia(s): R$ {data[prazo]},00</p>
                        )
                    }
                </div>
        </div>
    )
}

export default DisplayComponent;