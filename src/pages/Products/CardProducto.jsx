import React from "react";
import Button from "../../components/UI/Button/Button";
import { ProductosCard } from "./ProductsSty";

const CardProducto = ({ title, imgSource, price, desc }) => {
  return (
    <ProductosCard>
      <img src={imgSource} alt="" />
      <h2>{title}</h2>
      <p>{desc}</p>
      <span>${price}</span>
      <Button>Agregar</Button>
    </ProductosCard>
  );
};

export default CardProducto;
