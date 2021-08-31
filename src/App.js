import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "@emotion/styled";
import imagen from "./cryptomonedas.png";
import Formulario from "./components/Formulario";
import Cotizacion from "./components/Cotizacion";
import Spinner from "./components/Spinner";

const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Imagen = styled.img`
  max-width: 100%;
  margin-top: 5rem;
`;

const Heading = styled.h1`
  font-family: "Bebas Neue", cursive;
  color: #ffffff;
  text-align: left;
  font-weight: 700;
  font-size: 50px;
  margin-bottom: 50px;
  margin-top: 80px;

  &::after {
    content: "";
    width: 120px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
  }
`;

function App() {
  const [moneda, setMoneda] = useState("");
  const [crypto, setCrypto] = useState("");
  const [cotizacion, setCotizacion] = useState({});
  const [carga, setCarga] = useState(false);

  useEffect(() => {
    const consultarAPI = async () => {
      if (moneda === "" || crypto === "") return;

      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${crypto}&tsyms=${moneda}`;
      const resultado = await axios.get(url);

      // Mostrar el spinner

      setCarga(true);

      setTimeout(() => {
        setCarga(false);

        // cargar el resultado

        setCotizacion(resultado.data.DISPLAY[crypto][moneda]);
      }, 2500);
    };
    consultarAPI();
  }, [moneda, crypto]);
  return (
    <Contenedor>
      <div>
        <Imagen src={imagen} alt="Imagen Crypto" />
      </div>
      <div>
        <Heading>Cotiza tu criptomoneda al instante!</Heading>
        <Formulario setCrypto={setCrypto} setMoneda={setMoneda} />
        {carga ? <Spinner /> : <Cotizacion cotizacion={cotizacion} />}
      </div>
    </Contenedor>
  );
}

export default App;
