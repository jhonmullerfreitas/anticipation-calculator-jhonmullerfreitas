import DisplayComponent from "../../Components/Display/DisplayComponent";
import FormComponent from "../../Components/Form/FormComponent";
import "./styles.css"
import { useState } from "react";
import axios from "axios"
import { useEffect } from "react";

const Home = () => {

    const [data, setData] = useState([])
    const [dataResponse, setDataResponse] = useState([])

    const baseURL = "https://frontend-challenge-7bu3nxh76a-uc.a.run.app"

    useEffect(()=>{
        
        axios.post(
            baseURL,
            {
                "amount": data.saleValue,
                "installments": data.numberOfInstallments,
                "mdr": data.percentageMdr,
                "days": [1, 15, 30, 90]
            }
        )
        .then((response)=>{
            setDataResponse(response.data)
        })
        .catch((error)=>{
            console.log(error)
        })
        
    }, [data])

    return(
        <div className="container-home">
            <FormComponent setData={setData} />
            <DisplayComponent data={dataResponse} />
        </div>
    )
}

export default Home;