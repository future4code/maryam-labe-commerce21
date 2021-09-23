import React from "react";
import styled from "styled-components";

const Rodape = styled.footer`
  background-color: #282657;
  color: #fff;
  grid-column: span 3;
  font-size: 1rem;
  text-align: center;

  display: grid;
  place-content: center;
`;

export default class Footer extends React.Component {
  render() {
    return <Rodape>Todos os direitos reservados</Rodape>;
  }
}
