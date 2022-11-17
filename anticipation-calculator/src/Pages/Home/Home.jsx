import DisplayComponent from "../../Components/Display/DisplayComponent";
import FormComponent from "../../Components/Form/FormComponent";
import "./styles.css"

const Home = () => {
    return(
        <div className="container-home">
            <FormComponent/>
            <DisplayComponent/>
        </div>
    )
}

export default Home;