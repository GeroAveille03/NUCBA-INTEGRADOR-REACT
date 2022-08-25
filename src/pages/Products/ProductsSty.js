import styled from "styled-components";

export const ProductosContainer = styled.div`
  display: grid;
  place-items: center;
  justify-content: center;
  align-content: center;
  grid-template-columns: repeat(auto-fit, 400px);
  row-gap: 3.5rem;
  width: 100%;
  margin-top: -100px;
  background-color: var(--bordo-bg);
`;

export const ProductosCard = styled.div`
  background: var(--red-union);
  width: 300px;
  border-radius: 15px;
  padding: 1rem;
  min-height: 555px;
  max-height: 556px;
  img {
    width: 100%;
    margin-bottom: 1rem;
    min-height: 335px;
    max-height: 340px;
    min-width: 340px;
    max-width: 350px;
    margin-left: -25px;
  }
  h2 {
    font-weight: 800;
    margin: 0;
  }
  p {
    color: var(--white-union);
    font-size: 1em;
  }
  span {
    font-size: 1.6em;
  }
`
export const ButtonContainerStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 3rem;
`;