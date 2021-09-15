import React from "react";
import styled from "styled-components";

const Rodape = styled.footer`
  background-color: #bfddee;
  color: #fff;
  grid-column: span 3;
`;

export default class Footer extends React.Component {
  render() {
    return <Rodape>FOOTER</Rodape>;
  }
}
