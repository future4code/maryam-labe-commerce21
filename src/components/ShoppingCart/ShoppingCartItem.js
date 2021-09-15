import React from "react";
import styled from "styled-components";

const ItemCarrinho = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default class ShoppingCartItem extends React.Component {
  render() {
    return (
      <div>
        <ItemCarrinho>
          <p>1x</p>
          <p>Produto 100</p>
          <button>Remover</button>
        </ItemCarrinho>
      </div>
    );
  }
}
