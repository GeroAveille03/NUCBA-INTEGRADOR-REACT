import styled from 'styled-components';

export const CheckoutContainerProductosStyled = styled.div`
  width: 40%;
`;

export const CheckoutContainerPriceStyled = styled.div`
  margin-top: 0.2rem;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const CardsWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  width: 90%;
  height: 440px;
  margin: 0 auto;
  margin-left: -10px;

  overflow: scroll;

  &::-webkit-scrollbar {
    background: transparent;
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--white-union);
    border-radius: 5px;
  }

  &::-webkit-scrollbar:horizontal {
    display: none;
  }

  @media (max-height: 800px) {
    height: 270px;
  }

  @media (min-width: 1500px) {
    width: 72%;
  }
`;

export const CheckoutSubtotalStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CheckoutEnvioStyled = styled(CheckoutSubtotalStyled)``;

export const CheckoutTotalStyled = styled(CheckoutSubtotalStyled)``;

export const CheckoutPriceTotalStyled = styled.span`
  color: var(--white-union);
  font-weight: 800;
  font-size: 1.3rem;
`;

export const CheckoutHrStyled = styled.hr`
  margin: 1rem 0;
`;
