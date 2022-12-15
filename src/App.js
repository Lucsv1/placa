import { GlobalStyled } from "./GlobalStyled";
import { Content } from "./home/Content";
import { Footer } from "./home/Footer";
import { Menu } from "./home/Menu";
export const App = () => {
  return (
    <>
    <GlobalStyled/>
    <Menu/>
    <Content/>
    <Footer/>
    </>
  );
}

