import styled from "styled-components";

export const BaseBotao = styled.div`

margin: 10px;

`

export const Botao = styled.button`

background-color: yellow;
border-radius:10px;
padding: 5px ;
transition: 0.5s;
border: 1px solid ;

&:hover{
    color: red;
    box-shadow: 0px 2px 5px 0px #4e4a4a2e;
    cursor: pointer;

}

`