import styled from "styled-components";
import { motion } from "framer-motion";

export const CartContainerSty = styled(motion.div)`
  position: absolute;
  background-color: var(--dark-red-union);
  box-shadow: 0 0 50px 20px rgba(0, 0, 0, 0.3);
  width: 450px;
  height: 85vh;
  top: 95px;
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
  margin-top: -40px;
`;

export const HrStyled = styled.hr`
  margin: 2rem 0;
`;

export const ProductContainerStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  padding: 0rem 2rem;
  border-radius: 15px;

  img {
    height: 125px;
    width: 125px;
  }
`;

export const ProductsWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 105%;
  height: 400px;
  margin: 0 auto;
  padding: 1rem;
  margin-top: -1rem;
  margin-left: -2rem;

  overflow: scroll;

  &::-webkit-scrollbar {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--white-union);
    border-radius: 5px;
  }

  &::-webkit-scrollbar:horizontal {
    display: none;
  }

  @media (max-height: 800px) {
    height: 325px;
  }
`;

export const PriceStyled = styled.span`
  font-weight: 800;
  font-size: 2rem;
`;

export const PriceContainerStyled = styled.div`
  margin-top: 5.5rem;

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

export const MainContainerStyled = styled.div`
  height: 55%;
`;

export const TextContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  width: 190px;
`;

export const CardTitleStyled = styled.h3`
  margin: 0;
  margin-bottom: 2px;
  font-weight: 500;
`;

export const TextStyled = styled.p`
  margin: 0;
  color: white;
  font-size: 1rem;
`;

export const QuantityContainerStyled = styled.div`
  display: flex;
  align-items: center;
`;
