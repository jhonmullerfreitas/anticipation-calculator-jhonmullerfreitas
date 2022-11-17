import "./styles.css"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import * as yup from "yup"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"

const FormComponent = ({setData}) =>{

    const schema = yup.object().shape({
        saleValue: yup.number().required("Valor obrigatório"),
        numberOfInstallments: yup.number().max(12).required("Número de parcelas obrigatórias"),
        percentageMdr: yup.number().required("Percentual de MDR obrigatório"),
    });

    const {register, handleSubmit, formState:{errors}} = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmitFunction = (data) => setData(data)

    return(
        <form className="form-simulation" onSubmit={handleSubmit(onSubmitFunction)} >
            <h3>Simule sua Antecipação</h3>
             <TextField
                className="text-field"
                required
                error={errors.saleValue? true: false}
                id="sale-value"
                label="Informe o valor da venda"
                variant="standard"
                InputProps={{
                    startAdornment: <InputAdornment position="start">R$</InputAdornment>,
                }}
                {...register("saleValue")}
            />
            {errors.saleValue && errors.saleValue.type==="typeError" ? <span className="erro-message">Apenas números</span>:<span></span>}
            
            <TextField
                className="text-field"
                id="number-of-installments"
                label="Em quantas parcelas"
                helperText="Máximo de 12 parcelas"
                variant="standard"
                {...register("numberOfInstallments")}
                required
            />
            {
                errors.numberOfInstallments && errors.numberOfInstallments.type === "max" ? <span className="erro-message">Máximo de parcelas permitida é 12</span> :
                errors.numberOfInstallments && errors.numberOfInstallments === "typeError" ? <span className="erro-message">Apenas números</span>: <span></span>
            }
            <TextField
                className="text-field"
                required
                id="percentage-mdr"
                label="Informe o percentual de MDR"
                variant="standard"
                {...register("percentageMdr")}
            />
            {errors.percentageMdr && errors.percentageMdr.type === "typeError" ? <span className="erro-message">Apenas números</span>: <span></span> }

            <Button type="submit" sx={{fontSize: "15px"}} variant="contained">Simular</Button>

        </form>
    )
}

export default FormComponent;