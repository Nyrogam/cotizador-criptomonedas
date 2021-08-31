import React from "react";
import styled from "@emotion/styled";

const Mensaje = styled.p`
  background-color: #e60b00;
  padding: 1rem;
  color: #fff;
  font-size: 25px;
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
  font-family: "Bebas Neue", cursive;
  border-radius: 10px;
`;

const Error = ({ mensaje }) => {
  return <Mensaje>{mensaje}</Mensaje>;
};

export default Error;
