import React from "react";
import {
  ButtonContainerStyled,
  CardFilter,
  ProductosContainer,
  ProductsFilterContainer,
} from "./ProductsSty";
import { products } from "../../data/Products";
import CardProducto from "./CardProducto";
import Button from "../../components/UI/Button/Button";
import { FaTshirt } from "react-icons/fa";
import { IoIosShirt } from "react-icons/io";
import { GiHoodie, GiUnderwearShorts } from "react-icons/gi";

const CardsProductos = () => {
  return (
    <>
      <ProductsFilterContainer>
        <CardFilter>
          <IoIosShirt />
        </CardFilter>
        <CardFilter>
          <FaTshirt />
        </CardFilter>
        <CardFilter>
          <GiHoodie />
        </CardFilter>
        <CardFilter>
          <GiUnderwearShorts />
        </CardFilter>
      </ProductsFilterContainer>

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

        <ButtonContainerStyled>
          <Button>
            <span>Ver Menos</span>
          </Button>

          <Button>
            <span>Ver Más</span>
          </Button>
        </ButtonContainerStyled>
      </ProductosContainer>
    </>
  );
};

export default CardsProductos;
