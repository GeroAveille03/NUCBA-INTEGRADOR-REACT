import React from "react";
import Count from "../../UI/Count/Count";
import Increase from "../../UI/Increase/Increase";
import Submit from "../../UI/Submit/Submit";
import { ButtonContainerStyled, CartContainerSty, EnvioStyled, HrStyled, ImgStock, PriceContainerStyled, PriceStyled, ProductContainerStyled, SubtotalStyled, TitleSty, TotalStyled } from "./ModalCartSty";

const ModalCart = () => {
  return (
    <CartContainerSty
    initial={{ translateX: 600 }}
    animate={{ translateX: 0 }}
    exit={{ translateX: 600 }}
    transition={{ duration: 0.5 }}
      key="cart-modal"
    >
      <TitleSty>
        <h1>Tus Productos</h1>
      </TitleSty>
      <HrStyled 
      style={{marginTop: "-10px"}}
      />
    <div>
      <ProductContainerStyled>
        <ImgStock
        src="https://www.tiendaunion.com.ar/sistema/fotos/productos/00000118_00000490_G_1647002878622b44fee8713.jpg"
        alt=""
        />
        <div>
          <p>Union Camiseta</p>
          <PriceStyled>
            $12400
          </PriceStyled>
        </div>
        <div>
          <Increase>-</Increase>
          <Count>1</Count>
          <Increase secondary>+</Increase>
        </div>
      </ProductContainerStyled>
      <PriceContainerStyled>
        <SubtotalStyled>
          <p>Subtotal:</p>
          <span>$12400</span>
        </SubtotalStyled>
        <EnvioStyled>
          <p>Envío</p>
          <span>$600</span>
        </EnvioStyled>
        <hr/>
        <TotalStyled>
          <p>Total:</p>
          <PriceStyled>
            $13000
          </PriceStyled>
        </TotalStyled>
        <ButtonContainerStyled>
          <Submit/>
        </ButtonContainerStyled>
      </PriceContainerStyled>
    </div>

    </CartContainerSty>
  );
};

export default ModalCart;
