import React from 'react';
import {
  ProductLeftStyled,
  ProductPriceStyled,
  ProductStyled,
} from './CardResumenStyles';

const CardResumen = () => {
  return (
    <ProductStyled>
      <ProductLeftStyled>
        <img
          src='https://i.imgur.com/SCv52yR.png'
          alt=''
        />
        <div>
          <h3>Camiseta Titular 2022</h3>
          <p>Camiseta Roja y Blanca Titular Kappa</p>
        </div>
      </ProductLeftStyled>
      <div>
        <p>3U</p>
        <p>#0002617</p>
        <ProductPriceStyled>$12400</ProductPriceStyled>
      </div>
    </ProductStyled>
  );
};

export default CardResumen;
