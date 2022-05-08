import React from 'react';
import { Grid, TextField } from '@mui/material';
import { useForm } from "react-hook-form";

function Main() {
    const { register, handleSubmit, setError, formState: { errors } } = useForm({ shouldUseNativeValidation: true });;
    const onSubmit = data => {
        console.log(data);
        if (parseInt(data.age) > 100) {
            setError("age", { type: "manual", message: "Idade não pode ser maior que 100" }, { shouldFocus: true });
        }
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Grid contanter>
                <Grid item md={6} lg={6}>
                    <TextField label="Nome" {...register("name", { required: "Insira seu nome!"})} variant="standard" />
                    <TextField label="Idade" {...register("age")} variant="standard" />
                        {errors.age && <p>{errors.age.message}</p>}
                                        <button type={"Submit"}>Enviar</button>
                </Grid>
            </Grid>
        </form>
    )
}
export default  Main;