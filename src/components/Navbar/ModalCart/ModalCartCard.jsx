import React from 'react';
import {useDispatch} from 'react-redux/es/exports'
import * as cartActions from '../../Redux/cart/cart-actions'
import { formatPrice } from '../../../utils/formatPrice';

import { BsPlusLg } from 'react-icons/bs';
import { FaMinus } from 'react-icons/fa';

import Count from '../../UI/Count/Count';
import Increase from '../../UI/Increase/Increase';

import {
  ProductContainerStyled,
  TextContainerStyled,
  CardTitleStyled,
  TextStyled,
  PriceStyled,
  QuantityContainerStyled,
} from './ModalCartSty';

const ModalCartCard = ({ img, title, desc, price, quantity, id}) => {

  const dispatch = useDispatch();

  return (
    <ProductContainerStyled>
      <img src={img} alt={title} />
      <TextContainerStyled>
        <CardTitleStyled>{title}</CardTitleStyled>
        <TextStyled>{desc}</TextStyled>
        <PriceStyled>{formatPrice(price)}</PriceStyled>
      </TextContainerStyled>
      <QuantityContainerStyled>
        <Increase>
          <FaMinus
          onClick={()=> dispatch(cartActions.removeFromCart(id))}
          />
        </Increase>
        <Count>{quantity}</Count>
        <Increase>
          <BsPlusLg 
            onClick={() => dispatch(cartActions.addToCart({img, title, desc, price, id}))}
          />
        </Increase>
      </QuantityContainerStyled>
    </ProductContainerStyled>
  );
};

export default ModalCartCard;