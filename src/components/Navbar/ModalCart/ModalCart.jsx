import React from "react";
import Submit from "../../UI/Submit/Submit";
import {
  ButtonContainerStyled,
  CartContainerSty,
  EnvioStyled,
  HrStyled,
  MainContainerStyled,
  PriceContainerStyled,
  PriceStyled,
  ProductsWrapperStyled,
  SubtotalStyled,
  TitleSty,
  TotalStyled,
} from "./ModalCartSty";
import { useDispatch, useSelector } from "react-redux";
import ModalCartCard from "./ModalCartCard";
import { formatPrice } from "../../../utils/formatPrice";
import { useNavigate } from "react-router-dom";
import * as cartActions from '../../Redux/cart/cart-actions'

const ModalCart = () => {
  const { cartItems, shippingCost } = useSelector((state) => state.cart);

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const totalPrice = cartItems.reduce((acc, item) => {
    return (acc += item.price * item.quantity);
  }, 0);

  return (
    <CartContainerSty
      initial={{ translateX: 600 }}
      animate={{ translateX: 0 }}
      exit={{ translateX: 600 }}
      transition={{ duration: 0.5 }}
      key="cart-modal"
    >
      <MainContainerStyled>
        <TitleSty>
          <h1>Tus Productos</h1>
        </TitleSty>
        <HrStyled style={{ marginTop: "-15px" }} />

        <ProductsWrapperStyled>
          {cartItems.length ? (
            cartItems.map((item) => <ModalCartCard key={item.id} {...item} />)
          ) : (
            <p>¡Tu carrito está vacío!</p>
          )}
        </ProductsWrapperStyled>
      </MainContainerStyled>

      <PriceContainerStyled>
        <SubtotalStyled>
          <p>Subtotal:</p>
          <span>{formatPrice(totalPrice)}</span>
        </SubtotalStyled>
        <EnvioStyled>
          <p>Envío</p>
          <span>{formatPrice(shippingCost)}</span>
        </EnvioStyled>
        <hr />
        <TotalStyled>
          <p>Total:</p>
          <PriceStyled>{formatPrice(totalPrice + shippingCost)}</PriceStyled>
        </TotalStyled>
        <ButtonContainerStyled>
          <Submit
            value={"Iniciar Pedido"}
            disabled={cartItems.length === 0}
            onClick={() => {
              navigate("/checkout")
              dispatch(cartActions.toggleHiddenCart())
            }}
          >
            Iniciar Pedido
          </Submit>
        </ButtonContainerStyled>
      </PriceContainerStyled>
    </CartContainerSty>
  );
};

export default ModalCart;
