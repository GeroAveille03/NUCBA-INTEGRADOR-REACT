import React from 'react';
import CardProductCheckout from '../../CardProductCheckout/CardProductCheckout';
import {
  CardsWrapperStyled,
  CheckoutContainerPriceStyled,
  CheckoutContainerProductosStyled,
  CheckoutEnvioStyled,
  CheckoutHrStyled,
  CheckoutPriceTotalStyled,
  CheckoutSubtotalStyled,
  CheckoutTotalStyled,
} from './ProductsCheckoutStyles';
import {formatPrice} from '../../../utils/formatPrice'

const ProductsCheckout = ({cartItems, shippingCost, price}) => {
  return (
    <CheckoutContainerProductosStyled>
      <CardsWrapperStyled>
        {
          cartItems.length ? (
            cartItems.map(item => <CardProductCheckout key={item.id} {...item}/>)
            )
            : (
              <>
              <p>Comprá algo amarrete</p>
              {/* <Link /> */}
              </>
            )
        }
      </CardsWrapperStyled>
      <CheckoutContainerPriceStyled>
        <CheckoutSubtotalStyled>
          <p>Subtotal</p>
          <span>{formatPrice(price)}</span>
        </CheckoutSubtotalStyled>
        <CheckoutEnvioStyled>
          <p>Envío:</p>
          <span>{formatPrice(shippingCost)}</span>
        </CheckoutEnvioStyled>
        <CheckoutHrStyled />
        <CheckoutTotalStyled>
          <p>Total:</p>
          <CheckoutPriceTotalStyled>
            {formatPrice(price + shippingCost)}
          </CheckoutPriceTotalStyled>
        </CheckoutTotalStyled>
      </CheckoutContainerPriceStyled>
    </CheckoutContainerProductosStyled>
  );
};

export default ProductsCheckout;
