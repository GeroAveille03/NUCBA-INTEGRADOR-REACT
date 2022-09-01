import styled from 'styled-components';
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

export const LoginPasswordStyled = styled.p`
  margin: 0;

  color: var(--white-union);

  :hover {
    text-decoration: underline;
    transition: all 0.25s ease-out;
  }
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

export const LoginEmailStyled = styled.p`
  color: var(--white-union);
  font-size: 1.3em;

  :hover {
    text-decoration: underline;
    transition: all 0.25s ease-out;
  }
`;

//! LOGIN INPUT

export const InputContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LoginInputStyled = styled.input`
  width: 300px;
  padding: 1.5rem 2rem;
  color: white;
  background-color: var(--gray-union);
  border-radius: 15px;
  border: ${({ isError }) => (isError ? '1px solid white ' : 'none')};
  outline: none;
  caret-color: white;

  ::placeholder {
    opacity: 80%;
  }
  -webkit-text-fill-color: white;

  :-webkit-autofill,
  :-webkit-autofill:hover,
  :-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0px 1000px var(--gray-union) inset;
  }
`;

export const ErrorMessageStyled = styled.p`
  margin: 0;
  margin-top: 5px;
  color: white;
  font-size: 14px;
`;