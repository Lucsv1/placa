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
import searchPlate from "search-plate-pb";

export const Content = () => {
  const schema = yup.object({
    placa: yup.string().required("Placa obrigatorio"),
    categoria: yup.string().required("Categoria Obrigatoria"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    setFocus,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [registro, setRegistro] = useState([]);


  function registrar(loginPlaca) {
    setRegistro([...registro, loginPlaca]);
    console.log(loginPlaca);
    const isValid = validate(loginPlaca.placa);
    if (isValid === true) {
      loginPlaca.erro = "a placa tem que ser modelo antigo";
      loginPlaca.placa = ''
      Resultado = {backGroundColor : 'red'}
    };
    if (isValid === false){
      loginPlaca.placa = convert(
        loginPlaca.placa,
        { suffix: "" },
        loginPlaca.categoria
      );
    };
  }
  

  return (
    <BaseContent>
      <span {...register("erro")} />
      <ContentStyle>
        <PlaceForm onSubmit={handleSubmit(registrar)}>
          <PlaceLabel>Digite qual categoria (carro ou moto)</PlaceLabel>
          <PlaceInput {...register("categoria")} />
          <span>{errors.categoria?.message}</span>
          <PlaceLabel>Placa</PlaceLabel>
          <PlaceInput {...register("placa")} />
          <span>{errors.placa?.message}</span>
          <Button />
        </PlaceForm>
        <Resultado>
          <h2>Placa Gerada: </h2>
          {registro.map((placa, index) => (
            <div key={index}>
              <h3>{placa.placa}</h3>
              <p>{placa.erro}</p>
            </div>
          ))}
        </Resultado>
      </ContentStyle>
    </BaseContent>
  );
};
