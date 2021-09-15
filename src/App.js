import React from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import Foguete from "../src/img/foguete.webp";

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

const Header = styled.header`
  background-color: #bfddee;
  color: #fff;
  // height: 80px;
  grid-column: span 3;
`;

const Nav = styled.nav`
  background-color: green;
  display: flex;
  flex-direction: column;
  padding: 15px;
  width: 15vw;
`;

const Main = styled.main`
  background-color: yellow;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0 auto;
  padding: 30px;
  width: 60vw;
`;

const Aside = styled.aside`
  background-color: green;
  padding: 15px;
  width: 15vw;
`;

const Footer = styled.footer`
  background-color: #bfddee;
  color: #fff;
  grid-column: span 3;
`;

const CabecalhoMain = styled.div`
  background-color: grey;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  text-align: center;
`;

const ContainerOrdenacao = styled.div`
  display: flex;

  p {
    margin-right: 8px;
  }
`;

const DivProdutos = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 250px);
  gap: 8px;
  padding: 10px;
  justify-content: center;
`;

const CardProduto = styled.div`
  background-color: hotpink;

  img {
    // height: 250px;
    max-width: 100%;
  }
`;

const ItemCarrinho = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  // width: 300px;
`;

export default class App extends React.Component {
  render() {
    return (
      <Div>
        <GlobalStyle />
        <Header>
          <h1>HEADER</h1>
        </Header>

        <Nav>
          <h3>Filtro</h3>

          <label>Valor mínimo</label>
          <input type="number" />

          <label>Valor máximo</label>
          <input type="number" />

          <label>Busca por nome</label>
          <input type="text" />
        </Nav>

        <Main>
          <CabecalhoMain>
            <div>Quantidade de produtos: 6</div>

            <ContainerOrdenacao>
              <p>Ordenação:</p>
              <select>
                <option>Crescente</option>
                <option>Decrescente</option>
              </select>
            </ContainerOrdenacao>
          </CabecalhoMain>

          <DivProdutos>
            <CardProduto>
              <img src={Foguete} />
              <p>Produto 1</p>
              <p>R$</p>
              <button>Adicionar ao Carrinho</button>
            </CardProduto>

            <CardProduto>
              <img />
              <p>Produto 1</p>
              <p>R$</p>
              <button>Adicionar ao Carrinho</button>
            </CardProduto>

            <CardProduto>
              <img />
              <p>Produto 1</p>
              <p>R$</p>
              <button>Adicionar ao Carrinho</button>
            </CardProduto>

            <CardProduto>
              <img />
              <p>Produto 1</p>
              <p>R$</p>
              <button>Adicionar ao Carrinho</button>
            </CardProduto>

            <CardProduto>
              <img />
              <p>Produto 1</p>
              <p>R$</p>
              <button>Adicionar ao Carrinho</button>
            </CardProduto>

            <CardProduto>
              <img />
              <p>Produto 1</p>
              <p>R$</p>
              <button>Adicionar ao Carrinho</button>
            </CardProduto>
          </DivProdutos>
        </Main>

        <Aside>
          <h3>Carrinho:</h3>

          <ItemCarrinho>
            <p>1x</p>
            <p>Produto 100</p>
            <button>Remover</button>
          </ItemCarrinho>

          <p>Valor total:</p>
        </Aside>

        <Footer>FOOTER</Footer>
      </Div>
    );
  }
}
