import React from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import Filters from "../src/components/Filters/Filters.js";
import Footer from "./components/Footer/Footer.js";
import Products from "./components/Products/Products";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import Header from "./components/Header/Header.js";
import Foguete from "./img/foguete.webp";

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

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

const produtos = [
  {
    id: 1,
    nome: 'Sputnik',
    preco: 1_000_000,
    foto: {Foguete}
  },
  {
    id: 2,
    nome: 'Discovery',
    preco: 30_000,
    foto: {Foguete}
  },
  {
    id: 3,
    nome: 'Apollo 1',
    preco: 500_000,
    foto: {Foguete}
  },
  {
    id: 4,
    nome: 'SM-65E Atlas',
    preco: 400_000,
    foto: {Foguete}
  },
  {
    id: 5,
    nome: 'Thor-Ablestar',
    preco: 200_000,
    foto: {Foguete}
  },
  {
    id: 6,
    nome: 'Atlas',
    preco: 4_000_000,
    foto: {Foguete}
  },
]

export default class App extends React.Component {
  
  state = {
    minimoFilter: "",
    maximoFilter: "",
    nomeFilter: "",
    produtosCarrinho: []
  }

  onChangeMinimoFilter = (e) => {
    this.setState({minimoFilter: e.target.value})
  }

  onChangeMaximoFilter = (e) => {
    this.setState({maximoFilter: e.target.value})
  }

  onChangeNomeFilter = (e) => {
    this.setState({nomeFilter: e.target.value})
  }

  onAdicionarProduto = (produtoId) => {
    const produtoCarrinho = this.state.produtosCarrinho.find(produto => produtoId === produto.id)

    if(produtoCarrinho) {
      const novosProdutosCarrinho = this.state.produtosCarrinho.map(produto => {
        if(produtoId === produto.id) {
          return {
            ...produto,
            quantidade: produto.quantidade + 1
          }
        }

        return produto
      })

      this.setState({produtosCarrinho: novosProdutosCarrinho})
    } else {
      const produtosAdicionados = produtos.find(produto => produtoId === produto.id)

      const novosProdutosCarrinho = [...this.state.produtosCarrinho, {...produtosAdicionados, quantidade: 1}]

      this.setState({produtosCarrinho: novosProdutosCarrinho})
    }
  }

  onTirarProduto = (produtoId) => {
    const novosProdutosCarrinho = this.state.produtosCarrinho.map((produto) => {
      if(produto.id === produtoId) {
        return {
          ...produto,
          quantidade: produto.quantidade - 1
        }
      }
      return produto
    }).filter((produto) => produto.quantidade > 0)

    this.setState({produtosCarrinho: novosProdutosCarrinho})
  }

  render() {
    return (
      <Div>
        <GlobalStyle />
        <Header />

        <Filters 
        minimoFilter={this.state.minimoFilter}
        maximoFilter={this.state.maximoFilter}
        nomeFilter={this.state.nomeFilter}
        onChangeMinimoFilter={this.onChangeMinimoFilter}            
        onChangeMaximoFilter={this.onChangeMaximoFilter}            
        onChangeNomeFilter={this.onChangeNomeFilter} />

        <Products 
          produtos={produtos}
          minimoFilter={this.state.minimoFilter}
          maximoFilter={this.state.maximoFilter}
          nomeFilter={this.state.nomeFilter}
          onAdicionarProduto={this.onAdicionarProduto}/>

        <ShoppingCart 
        produtosCarrinho={this.state.produtosCarrinho}
        onTirarProduto={this.onTirarProduto}
        />

        <Footer />
      </Div>
    );
  }
}
