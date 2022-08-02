import styled from 'styled-components';
import { motion } from 'framer-motion';

export const CartContainerSty = styled(motion.div)`
  position: absolute;
  background-color: var(--dark-red-union);
  box-shadow: 0 0 50px 20px rgba(0, 0, 0, 0.3);
  width: 500px;
  height: 500px;
  top: 100px;
  right: 0px;
  z-index: 99;
  border-radius: 0 0 1rem 1rem;
  padding: 2rem;
`;

export const TitleSty = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.7em;
  margin-top: -30px;
`;

export const HrStyled = styled.hr`
  margin: 2rem 0;
`;

export const ProductContainerStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  background: var(--gray-bg);
  box-shadow: 0 0 20px 5px rgba(0, 0, 0, 0.3);
  padding: 1rem 2rem;
  border-radius: 15px;
`;

export const ImgStock = styled.img`
  height: 125px;
  width: 125px;
`

export const PriceStyled = styled.span`
  font-weight: 800;
  font-size: 2rem;
`;

export const PriceContainerStyled = styled.div`
  margin-top: 5rem;

  & p {
    text-align: center;
    margin-bottom: 0;
  }
`;

export const SubtotalStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const EnvioStyled = styled(SubtotalStyled)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TotalStyled = styled(SubtotalStyled)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;