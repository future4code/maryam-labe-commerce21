import React from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import Filters from "../src/components/Filters/Filters.js";
import Footer from "./components/Footer/Footer.js";
import Products from "./components/Products/Products";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import Header from "./components/Header/Header.js";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

const Div = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-template-rows: 80px 1fr 80px;
  gap: 10px;
  min-height: 100vh;
`;

// const Header = styled.header`
//   background-color: #bfddee;
//   color: #fff;
//   // height: 80px;
//   grid-column: span 3;
// `;

// const Nav = styled.nav`
//   background-color: green;
//   display: flex;
//   flex-direction: column;
//   padding: 15px;
//   width: 15vw;
// `;

// const Main = styled.main`
//   background-color: yellow;
//   display: flex;
//   flex-direction: column;
//   gap: 10px;
//   margin: 0 auto;
//   padding: 30px;
//   width: 60vw;
// `;

// const Aside = styled.aside`
//   background-color: green;
//   padding: 15px;
//   width: 15vw;
// `;

// const Footer = styled.footer`
//   background-color: #bfddee;
//   color: #fff;
//   grid-column: span 3;
// `;

// const CabecalhoMain = styled.div`
//   background-color: grey;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   height: 50px;
//   text-align: center;
// `;

// const ContainerOrdenacao = styled.div`
//   display: flex;

//   p {
//     margin-right: 8px;
//   }
// `;

// const DivProdutos = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, 250px);
//   gap: 8px;
//   padding: 10px;
//   justify-content: center;
// `;

// const CardProduto = styled.div`
//   background-color: hotpink;

//   img {
//     // height: 250px;
//     max-width: 100%;
//   }
// `;

// const ItemCarrinho = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   // width: 300px;
// `;

export default class App extends React.Component {
  render() {
    return (
      <Div>
        <GlobalStyle />
        <Header />

        <Filters />

        <Products />

        <ShoppingCart />

        <Footer />
      </Div>
    );
  }
}
