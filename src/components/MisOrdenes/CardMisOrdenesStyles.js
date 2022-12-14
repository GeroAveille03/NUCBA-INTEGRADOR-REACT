import styled from 'styled-components';

export const MisOrdenesContainerStyled = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  max-width: 1500px;
  margin: 0 auto;
`;

export const PedidoContainerStyled = styled.div`
  background: var(--red-union);
  width: 380px;
  border-radius: 15px;
  padding: 1rem 1.4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  cursor: pointer;
  box-shadow: 1px 3px 1px 2px rgba(0,0,0,0.10)
`;

export const TextContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleStyled = styled.h2`
  margin: 0;
  font-size: 1.2rem;
`;

export const IdStyled = styled.p`
  font-size: 1rem;
  color: var(--white-union);
`;

export const PriceStyled = styled.p`
  font-weight: 800;
  font-size: 2rem;
  color: var(--white-union);
  margin: 0;
`;

export const StatusStyled = styled.span`
  background-color: red;
  text-align: center;
  position: absolute;
  width: 2rem;
  height: 1rem;
  top: 1rem;
  right: 1rem;
  border-radius: 1rem;
  padding: 0.3rem;
`;

export const CheckStyled = styled(StatusStyled)`
  background: #15be77;
`;

export const PendingStyled = styled(StatusStyled)`
  background: #ffa100;
`;

export const CancelStyled = styled(StatusStyled)`
  background: #ff005c;
`;