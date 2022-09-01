import styled from 'styled-components';

export const InputBoxStyled = styled.div`
  display: flex;
  margin: 1rem 0;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 50%;
`;

export const InputLabelStyled = styled.label`
  display: flex;
  margin: 1rem 0;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 50%;
`;

export const InputStyled = styled.input`
  background-color: var(--gray-union);
  outline: none;
  border: ${({ isError }) => (isError ? '1px solid var(--blue-union) ' : 'none')};
  border-radius: 8px;
  box-shadow: 6px 5px 2px 2px rgba(0,0,0,0.20);
-webkit-box-shadow: 6px 5px 2px 2px rgba(0,0,0,0.20);
-moz-box-shadow: 6px 5px 2px 2px rgba(0,0,0,0.20);
  height: 30px;
  padding: 0.5rem 1rem;
  color: var(--white-union);
  width: 70%;
  margin-top: 1rem;

  &::placeholder{
    color: var(--white-union)
  }
`;

export const ErrorMessageStyled = styled.p`
  margin: 0;
  margin-top: 5px;
  color: white;
  font-size: 14px;
`;
