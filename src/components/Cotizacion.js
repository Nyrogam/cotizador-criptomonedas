import React from "react";
import styled from "@emotion/styled";

const DivResultado = styled.div`
  color: #fff;
  font-family: Arial, Helvetica, sans-serif;

  p {
    span {
      font-weight: bold;
    }
  }
`;

const Info = styled.p`
  font-size: 20px;
`;

const Precio = styled.p`
  font-size: 30px;
`;

const Cotizacion = ({ cotizacion }) => {
  if (Object.keys(cotizacion).length === 0) return null;

  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE } = cotizacion;

  return (
    <DivResultado>
      <Precio>
        El precio es: <span>{PRICE}</span>
      </Precio>
      <Info>
        Precio más alto del día: <span>{HIGHDAY}</span>
      </Info>
      <Info>
        Precio más bajo del día: <span>{LOWDAY}</span>
      </Info>
      <Info>
        Variación en las últimas 24 horas: <span>{CHANGEPCT24HOUR}</span>
      </Info>
      <Info>
        Ultima actualización: <span>{LASTUPDATE}</span>
      </Info>
    </DivResultado>
  );
};

export default Cotizacion;
