import React from "react";
import styled from "styled-components";

const Nav = styled.div`
  background-color: green;
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
        <input type="number" />

        <label>Valor máximo</label>
        <input type="number" />

        <label>Busca por nome</label>
        <input type="text" />
      </Nav>
    );
  }
}
