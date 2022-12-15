import { useState } from "react"
import styled from "styled-components"
import { PlaceForm, PlaceLabel,PlaceInput } from "./Styled"




export const PlaceText = (props) =>{

   
   const aoDigitado = (e) =>{
    props.aoAlterar(e.target.value)

   }

    return(
        <PlaceForm>
            <PlaceLabel htmlFor="">{props.label}</PlaceLabel>
            <PlaceInput value={props.valor} onChange={aoDigitado} required={props.obrigatorio} type="text" placeholder= {props.placeholder}  />
        </PlaceForm>
    )

}

