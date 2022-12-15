import styled from 'styled-components';
import img from './img/LL.jpeg'
import { BaseMenu, MenuStyle } from "./MenuStyled";


const color = styled.div`

background-color: #2e2e2e4f;
`

export const Menu = () => {
  return (
    <BaseMenu>
      <MenuStyle>
        <h1><span>L.L</span> Caminhoes</h1>
      </MenuStyle>
    </BaseMenu>
  );
};
