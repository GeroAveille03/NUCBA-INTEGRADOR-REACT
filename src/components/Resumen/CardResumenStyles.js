import styled from 'styled-components';

export const ProductStyled = styled.div`
  background: var(--red-union);
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  border-radius: 15px;
  padding: 2rem;
  max-width: 80%;
`;

export const ProductLeftStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  img{
    height: 250px;
  }
`;

export const ProductPriceStyled = styled.span`
  font-weight: 800;
  font-size: 2rem;
`;
