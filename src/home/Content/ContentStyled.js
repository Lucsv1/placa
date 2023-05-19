import styled from "styled-components";

export const BaseContent = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
  margin-top: 10%;
`;

export const ContentStyle = styled.div`
  width: 50%;
  padding: 15px;
  justify-content: space-between;
  display: flex;
  border: solid 1px #393939 ;
  border-radius: 10px;
  box-shadow: 0px 0px 1px 0px #393939;
  background-color: #333334;

  text-align: center;
  h2 {
    margin-bottom: 20px;
  }
`;

export const DivPlaca = styled.div`

h3{
  background-color: yellow;
}

  background-color: #333334;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0px 0px 1px 2px black;
  background-color: yellow;
  color: red;
  font-family: Arial, Helvetica, sans-serif;
  width: 50%;
  margin-left: 24%;
  margin-bottom: 30px;
`;

export const Resultado = styled.div`


h2{
    font-family: Arial, Helvetica, sans-serif;
}
  
  width: 50%;
  border: solid 1px #393939;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
