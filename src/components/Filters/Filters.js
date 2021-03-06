import React from "react";
import styled from "styled-components";

const Nav = styled.div`
  background-color: #282657;
  color: white;
  display: flex;
  flex-direction: column;
  padding: 15px;
  width: 15vw;
`;

export default class Filters extends React.Component {
  render() {
    return (
      <Nav>
        <h3>Filtro</h3>

        <label>Valor mínimo</label>
        <input type="number"
        value={this.props.minimoFilter}
        onChange={this.props.onChangeMinimoFilter}
        />

        <label>Valor máximo</label>
        <input type="number" 
        value={this.props.maximoFilter}
        onChange={this.props.onChangeMaximoFilter}
        />

        <label>Busca por nome</label>
        <input type="text" 
        value={this.props.nomeFilter}
        onChange={this.props.onChangeNomeFilter}
        />
      </Nav>
    );
  }
}
