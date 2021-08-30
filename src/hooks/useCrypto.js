import React, { useState } from "react";
import styled from "@emotion/styled";

const Label = styled.label`
  font-family: "Bebas Neue", cursive;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 2.4rem;
  margin-top: 2rem;
  display: block;
`;

const Select = styled.select`
  width: 100%;
  display: block;
  padding: 1rem;
  --webkit-appearance: none;
  border-radius: 10px;
  border: none;
  font-size: 1.2rem;
`;

const useCrypto = (label, stateInicial, opciones) => {
  // State del hook

  const [state, setState] = useState("");

  const SelectCrypto = (stateInicial) => (
    <>
      <Label> {label} </Label>
      <Select onChange={(e) => setState(e.target.value)} value={state}>
        <option value="">- Seleccione su criptomoneda -</option>
        {opciones.map(({ CoinInfo: { Id, Name, FullName } }) => (
          <option key={Id} value={Name}>
            {FullName} ({Name})
          </option>
        ))}
      </Select>
    </>
  );

  // Return del state, interfaz y funcion para modificar el state

  return [state, SelectCrypto, setState];
};

export default useCrypto;
