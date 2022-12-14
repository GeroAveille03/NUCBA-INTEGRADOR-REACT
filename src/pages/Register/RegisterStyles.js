import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Form as FormikForm } from 'formik';

export const LoginContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
`;

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
  gap: 20px;
`;

export const LoginButtonGoogleStyled = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 1rem 1.5rem;
  outline: none;
  border: none;
  border-radius: 1rem;
  background: var(--blue-union);
  color: white;
  cursor: pointer;
`;

export const LoginEmailStyled = styled(Link)`
  & p {
    color: var(--white-union);
    font-size: 1.3em;

    :hover {
      text-decoration: underline;
      transition: all 0.25s ease-out;
    }
  }
`;
export const LoginInputSubmitStyled = styled.input`
  padding: 0.8rem 1.5rem;
  outline: none;
  border: none;
  border-radius: 10px;
  background-color: var(--red-union);
  color: white;
  text-transform: uppercase;
  font-weight: 400;
  cursor: pointer;
`;
