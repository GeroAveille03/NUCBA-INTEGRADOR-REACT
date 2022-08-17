import React from 'react';
import { Link } from 'react-router-dom';
import CardResumen from '../../components/Resumen/CardResumen';
import {
  CostoEnvioStyled,
  CostoProductoStyled,
  CostoTotalStyled,
  HrStyled,
  ProductsContainerStyled,
  ResumenContainerInfoStyled,
  ResumenContainerStyled,
  ResumenTitleStyled,
} from './ResumenSty';

const Resumen = () => {
  return (
    <ResumenContainerStyled>
      <ResumenTitleStyled>
        <h1>Resumen Orden: #0002617</h1>
        <Link borderRadius='20' to='/mis-ordenes'></Link>
      </ResumenTitleStyled>
      <h2>Productos:</h2>
      <ProductsContainerStyled>
        <CardResumen />
        <CardResumen />
      </ProductsContainerStyled>
      <HrStyled />
      <ResumenContainerInfoStyled>
        <h3>Costos:</h3>
        <CostoProductoStyled>
          <p>Costo de productos</p>
          <span>$200</span>
        </CostoProductoStyled>
        <CostoEnvioStyled>
          <p>Costo de envío</p>
          <span>$250</span>
        </CostoEnvioStyled>
        <CostoTotalStyled>
          <p>Total</p>
          <span>$450</span>
        </CostoTotalStyled>
      </ResumenContainerInfoStyled>
    </ResumenContainerStyled>
  );
};

export default Resumen;