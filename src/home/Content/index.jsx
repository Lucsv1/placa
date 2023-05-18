import {
  PlaceInput,
  PlaceLabel,
  PlaceForm,
} from "./Components/SpaceText/Styled";
import { BaseContent, ContentStyle, Resultado } from "./ContentStyled";
import { useForm } from "react-hook-form";
import { useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "./Components/Button";
import { validate, convert } from "placa-mercosul";

export const Content = () => {
  const schema = yup.object({
    placa: yup.string().required("Placa obrigatorio"),
    categoria: yup.string().required("Categoria Obrigatoria"),
  });



  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [registro, setRegistro] = useState({});


  function registrar(loginPlaca) {
    
    setRegistro(loginPlaca);
    console.log(loginPlaca);
    const isValid = validate(loginPlaca.placa);
    if (isValid === true) {
      Resultado = {backGroundColor : 'red'}
    }else{
      loginPlaca.placa = convert(
        loginPlaca.placa,
        { suffix: "" },
        loginPlaca.categoria,
        reset()
      );
    }
  }
  

  return (
    <BaseContent>
      <span {...register("erro")} />
      <ContentStyle>
        <PlaceForm onSubmit={handleSubmit(registrar)}>
          <PlaceLabel>Digite qual categori (carro ou moto)</PlaceLabel>
          <PlaceInput {...register("categoria")} />
          <span>{errors.categoria?.message}</span>
          <PlaceLabel>Placa</PlaceLabel>
          <PlaceInput {...register("placa")} />
          <span>{errors.placa?.message}</span>
          <Button />
        </PlaceForm>
        <Resultado>
          <h2>Placa Gerada: </h2> 
            <div >
              <h3>{registro.placa}</h3>
            </div>
        </Resultado>
      </ContentStyle>
    </BaseContent>
  );
};
