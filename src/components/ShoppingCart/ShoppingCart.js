import React from "react";
import styled from "styled-components";
import ShoppingCartItem from "./ShoppingCartItem";

const Aside = styled.aside`
  background-color: green;
  padding: 15px;
  width: 15vw;
`;

export default class ShoppingCart extends React.Component {
  render() {
    return (
      <Aside>
        <h3>Carrinho:</h3>

        <ShoppingCartItem />

        <p>Valor total:</p>
      </Aside>
    );
  }
}
