import React from "react";
import styled from "@emotion/styled";
import useCoin from "../hooks/useCoin";

const Boton = styled.input`
  margin-top: 20px;
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
  background-color: #66a2fe;
  border: none;
  width: 100%;
  border-radius: 10px;
  color: #fff;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #326ac0;
    cursor: pointer;
  }
`;

const Formulario = () => {
  const MONEDAS = [
    { codigo: "USD", nombre: "Dólar Estadounidense" },
    { codigo: "EUR", nombre: "Euro" },
    { codigo: "GBP", nombre: "Libra Esterlina" },
    { codigo: "UYU", nombre: "Peso Uruguayo" },
  ];
  // Utilizar el hook personalizado

  const [moneda, SelectMonedas, setMoneda] = useCoin(
    "Elige tu Moneda",
    "",
    MONEDAS
  );
  return (
    <form>
      <SelectMonedas />
      <Boton type="submit" value="Calcular" />
    </form>
  );
};

export default Formulario;
