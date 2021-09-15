import React from "react";
import styled from "styled-components";
import ProductCard from "./ProductCard";

const ContainerOrdenacao = styled.div`
  display: flex;

  p {
    margin-right: 8px;
  }
`;

const CabecalhoMain = styled.div`
  background-color: grey;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  text-align: center;
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

const DivProdutos = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 250px);
  gap: 8px;
  padding: 10px;
  justify-content: center;
`;

export default class Products extends React.Component {
  render() {
    return (
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
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </DivProdutos>
      </Main>
    );
  }
}
