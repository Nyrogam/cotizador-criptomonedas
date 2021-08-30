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

const useCoin = (label, stateInicial, opciones) => {
  // State del hook

  const [state, setState] = useState("");

  const Seleccionar = (stateInicial) => (
    <>
      <Label> {label} </Label>
      <Select onChange={(e) => setState(e.target.value)} value={state}>
        <option value="">- Seleccione su moneda -</option>
        {opciones.map(({ codigo, nombre }) => (
          <option key={codigo} value={codigo}>
            {nombre}
          </option>
        ))}
      </Select>
    </>
  );

  // Return del state, interfaz y funcion para modificar el state

  return [state, Seleccionar];
};

export default useCoin;
