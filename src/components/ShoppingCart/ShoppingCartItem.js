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
          <p>{this.props.cartItem.quantidade}x</p>
          <p>{this.props.cartItem.nome}</p>
          <button onClick={() => this.props.onTirarProduto(this.props.cartItem.id)}>Remover</button>
        </ItemCarrinho>
      </div>
    );
  }
}
