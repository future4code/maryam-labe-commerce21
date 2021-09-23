import React from "react";
import styled from "styled-components";

const Cabecalho = styled.header`
  background-color: #282657;
  color: #fff;
  grid-column: span 3;
  font-size: 60px;
  text-align: center;
`;

export default class Header extends React.Component {
  render() {
    return <Cabecalho>LOJA DE FOGUETES</Cabecalho>;
  }
}
