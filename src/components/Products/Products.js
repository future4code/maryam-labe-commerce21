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
  background-color: #c06bae;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  text-align: center;
  padding: 0 15px;
`;

const Main = styled.main`
  background-color: #875dd9;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0 auto;
  padding: 30px;
  width: 60vw;
`;

const DivProdutos = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 250px);
  gap: 8px;
  padding: 10px;
  justify-content: center;
`;


export default class Products extends React.Component {

  state = {
    sort: 'DECRESCENTE'
  }

  getFiltraEOrdenaLista = () => {
    return this.props.produtos
      .filter((produto) => this.props.maximoFilter ? produto.preco < this.props.maximoFilter : true)
      .filter((produto) => this.props.minimoFilter ? produto.preco > this.props.minimoFilter : true)
      .filter((produto) => this.props.nomeFilter ? produto.nome.includes(this.props.nomeFilter) : true)
      .sort((a, b) => this.state.sort === 'CRESCENTE' ? a.preco - b.preco : b.preco - a.preco)
  }

  onChangeSort = (event) => {
    this.setState({sort: event.target.value})
  }

  render() {
    const filtraEOrdenaLista = this.getFiltraEOrdenaLista()
    return (
      <Main>
        <CabecalhoMain>
          <div>Quantidade de produtos: {filtraEOrdenaLista.length}</div>

          <ContainerOrdenacao>
            <p>Ordenação:</p>
            <select value={this.state.sort} onChange={this.onChangeSort}>
              <option value={'CRESCENTE'}>Crescente</option>
              <option value={'DECRESCENTE'}>Decrescente</option>
            </select>
          </ContainerOrdenacao>

        </CabecalhoMain>

        <DivProdutos>
        {filtraEOrdenaLista.map((produto) => {
          return <ProductCard
            produto={produto}
            onAdicionarProduto={this.props.onAdicionarProduto}
          />
        })}
        </DivProdutos>
      </Main>
    );
  }
}
