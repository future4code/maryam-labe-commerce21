import React from "react";
import styled from "styled-components";

const Cabecalho = styled.header`
  background-color: #bfddee;
  color: #fff;
  // height: 80px;
  grid-column: span 3;
`;

export default class Header extends React.Component {
  render() {
    return <Cabecalho>HEADER</Cabecalho>;
  }
}
