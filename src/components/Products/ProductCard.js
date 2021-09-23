import React from "react";
import styled from "styled-components";
import Foguete from "../../img/foguete.webp"

const CardProduto = styled.div`
  background-color: #c06bae;
  padding-bottom: 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    max-width: 100%;
  }

  button{
    border: none;
    cursor: pointer;
    font-weight: bold;
    outline: 0;
    padding: 0.5em 1.5em;
    text-transform: uppercase;

    background-color: #f8f8f8;
    border-radius: 25px;
    color: #000;
    transition: all 0.2s ease-in 50ms;
    -webkit-transition: all 0.2s ease-in 50ms;
    -moz-transition: all 0.2s ease-in 50ms;
    -ms-transition: all 0.2s ease-in 50ms;
    -o-transition: all 0.2s ease-in 50ms;

    &:hover{
    background-color: #282657;
    color: white;
    box-shadow: 0 0 0 2px rgba(0,0,0,0.1);
    transition: all 0.1s ease-out 50ms;
    -webkit-transition: all 0.1s ease-out 50ms;
    -moz-transition: all 0.1s ease-out 50ms;
    -ms-transition: all 0.1s ease-out 50ms;
    -o-transition: all 0.1s ease-out 50ms;
    }

    &:active{
    transform: scale(0.8);
    }
  }
`;

export default class ProductCard extends React.Component {
  render() {
    const produto = this.props.produto
    return (
      <CardProduto>
        <img src={Foguete} />
        <p>{produto.nome}</p>
        <p>R${produto.preco}</p>
        <button onClick={() => this.props.onAdicionarProduto(produto.id)}>Adicionar ao Carrinho</button>
      </CardProduto>
    );
  }
}
