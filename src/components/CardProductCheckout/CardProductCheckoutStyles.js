import styled from 'styled-components';

export const CheckoutContainerStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 110%;
  padding: 1.5rem;
  height: 100px;
  margin-top: 25px;
  gap: 60px;
`;

export const CheckoutProductInfoStyled = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  
  img{
    width: 125px;
    height: 125px;
  }
`;

export const CheckoutInfoStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const ProductTitleStyled = styled.h3`
  margin: 0;
`;

export const PriceStyled = styled.span`
  font-weight: 800;
  font-size: 2rem;
  background: var(--btn-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
