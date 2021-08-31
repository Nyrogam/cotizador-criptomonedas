import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import useCoin from "../hooks/useCoin";
import useCrypto from "../hooks/useCrypto";
import axios from "axios";
import Error from "./Error";

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

const Formulario = ({ setMoneda, setCrypto }) => {
  const [listado, setListado] = useState([]);
  const [error, setError] = useState(false);

  const MONEDAS = [
    { codigo: "USD", nombre: "Dólar Estadounidense" },
    { codigo: "EUR", nombre: "Euro" },
    { codigo: "GBP", nombre: "Libra Esterlina" },
    { codigo: "UYU", nombre: "Peso Uruguayo" },
  ];
  // Utilizar useCoin

  const [moneda, SelectMonedas] = useCoin("Elige tu Moneda", "", MONEDAS);

  // Utilizar useCrypto

  const [crypto, SelectCrypto] = useCrypto(
    "Elige tu Criptomoneda",
    "",
    listado
  );

  // Llamar a la api

  useEffect(() => {
    const consultarAPI = async () => {
      const url =
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";
      const resultado = await axios.get(url);

      setListado(resultado.data.Data);
    };
    consultarAPI();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // validacion

    if (moneda === "" || crypto === "") {
      setError(true);
      return;
    }

    //pasar los datos
    setError(false);
    setMoneda(moneda);
    setCrypto(crypto);
  };

  return (
    <form onSubmit={handleSubmit}>
      {error ? <Error mensaje="Todos los campos son obligatorios" /> : null}
      <SelectMonedas />
      <SelectCrypto />
      <Boton type="submit" value="Calcular" />
    </form>
  );
};

export default Formulario;
