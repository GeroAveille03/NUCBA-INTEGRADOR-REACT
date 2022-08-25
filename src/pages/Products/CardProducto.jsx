import React from "react";
import { useDispatch } from "react-redux";
import Button from "../../components/UI/Button/Button";
import { ProductosCard } from "./ProductsSty";
import * as cartActions from '../../components/Redux/cart/cart-actions'
import { formatPrice } from '../../utils/formatPrice'


const CardProducto = ({ title, img, price, desc, id }) => {
  
  const dispatch = useDispatch()
  
  return (
    <ProductosCard>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <p>{desc}</p>
      <span>{formatPrice(price)}</span>
      <Button
         onClick={() => dispatch(cartActions.addToCart({img, title, desc, price, id}))}
      >
        Agregar
      </Button>
    </ProductosCard>
  );
};

export default CardProducto;
