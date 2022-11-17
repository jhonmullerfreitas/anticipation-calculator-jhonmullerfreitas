import DisplayComponent from "../../Components/Display/DisplayComponent";
import FormComponent from "../../Components/Form/FormComponent";
import "./styles.css"
import { useState } from "react";
const Home = () => {

    const [data, setData] = useState([])
    console.log(data)

    return(
        <div className="container-home">
            <FormComponent setData={setData} />
            <DisplayComponent />
        </div>
    )
}

export default Home;