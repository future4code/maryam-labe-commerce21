import React from "react";
import styled from "styled-components";
import Foguete from "../../img/foguete.webp";

const CardProduto = styled.div`
  background-color: hotpink;

  img {
    max-width: 100%;
  }
`;

export default class ProductCard extends React.Component {
  render() {
    return (
      <CardProduto>
        <img src={Foguete} />
        <p>Produto 1</p>
        <p>R$</p>
        <button>Adicionar ao Carrinho</button>
      </CardProduto>
    );
  }
}
