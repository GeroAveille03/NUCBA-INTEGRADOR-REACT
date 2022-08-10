import React from "react";
import { ProductosContainer } from "./ProductsSty";
import { products } from "../../data/Products";
import CardProducto from "./CardProducto";

const CardsProductos = () => {
  return (
    <ProductosContainer>
      {products.map((product) => (
        <CardProducto
          key={product.id}
          title={product.title}
          imgSource={product.img}
          desc={product.desc}
          price={product.price}
        />
      ))}
    </ProductosContainer>
  );
};

export default CardsProductos;
