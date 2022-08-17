import React from "react";
import Button from "../../components/UI/Button/Button";
import CardsMisOrdenes from "../../components/MisOrdenes/CardsMisOrdenes";
import {
  MisOrdenesBtnContainerStyled,
  MisOrdenesContainerStyled,
  MisOrdenesPatternStyled,
  MisOrdenesTitleStyled,
} from "./MisOrdenesStyles";
import { Link } from "react-router-dom";

const MisOrdenes = () => {
  return (
    <>
      <MisOrdenesContainerStyled>
        <MisOrdenesTitleStyled>Mis órdenes</MisOrdenesTitleStyled>
        <CardsMisOrdenes />
        <MisOrdenesBtnContainerStyled>
          <Link to='/products'>
            <Button>Volver a comprar</Button>
          </Link>
        </MisOrdenesBtnContainerStyled>
      </MisOrdenesContainerStyled>
    </>
  );
};

export default MisOrdenes;
