import Count from '../UI/Count/Count';
import Increase from '../UI/Increase/Increase';
import {
  CheckoutContainerStyled,
  CheckoutInfoStyled,
  CheckoutProductInfoStyled,
  PriceStyled,
  ProductTitleStyled,
} from './CardProductCheckoutStyles';
import { useDispatch } from 'react-redux';
import * as cartActions from '../Redux/cart/cart-actions'

const CardProductCheckout = ({ img, title, desc, price, quantity, id }) => {
  
  const dispatch = useDispatch();
  
  return (
    <CheckoutContainerStyled>
      <CheckoutProductInfoStyled>
        <img
          src={img}
          alt={title}
        />
        <CheckoutInfoStyled>
          <ProductTitleStyled>{title}</ProductTitleStyled>
          <p>{desc}</p>
          <PriceStyled>{price}</PriceStyled>
        </CheckoutInfoStyled>
      </CheckoutProductInfoStyled>
      <div>
        <Increase
        onClick={() => dispatch(cartActions.removeFromCart(id))}
        >-</Increase>
        <Count>{quantity}</Count>
        <Increase
        onClick={() => dispatch(cartActions.addToCart({ img, title, desc, price, id}))}
        >+</Increase>
      </div>
    </CheckoutContainerStyled>
  );
};

export default CardProductCheckout;
