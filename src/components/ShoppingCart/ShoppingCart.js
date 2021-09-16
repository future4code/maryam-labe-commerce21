import React from "react";
import styled from "styled-components";
import ShoppingCartItem from "./ShoppingCartItem";

const Aside = styled.aside`
  background-color: #282657;
  color: white;
  padding: 15px;
  width: 15vw;
`;

export default class ShoppingCart extends React.Component {

  getValorTotal = () => {
    let valorTotal = 0

    for(let produto of this.props.produtosCarrinho) {
      valorTotal += produto.preco * produto.quantidade
    }

    return valorTotal
  }

  render() {
    return (
      <Aside>
        <h3>Carrinho:</h3>

        <div>
        {this.props.produtosCarrinho.map((produto) => {
          return <ShoppingCartItem 
                  cartItem={produto} 
                  onTirarProduto={this.props.onTirarProduto} />
        })}
        <p>Valor total: R${this.getValorTotal()}</p>
        </div>
      </Aside>
    );
  }
}
