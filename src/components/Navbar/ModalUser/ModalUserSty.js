import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ModalContainerStyled = styled(motion.div)`
  position: absolute;
  background-color: var(--dark-red-union);
  box-shadow: 0 0 50px 20px rgba(0, 0, 0, 0.3);
  width: 450px;
  height: 280px;
  top: 100px;
  right: 0px;
  z-index: 99;
  border-radius: 0 0 1rem 0rem;
  padding: 0.2rem;
  font-size: 28px;

  & span {
    display: flex;
    margin-top: 10px;
    cursor: pointer;
    margin-left: 20px;
  }

  & Link {
    margin-left: 20px;
  }
`;

export const UsernameStyled = styled.h2`
  font-weight: 400;
  margin-left: 20px;
`;

export const HrStyled = styled.hr`
  margin: 2rem 0;
`;