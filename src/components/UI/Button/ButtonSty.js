import styled from "styled-components";

export const ButtonSty = styled.div`
    display:flex;
    justify-content: center;
    margin-left: -22px;
  button.btn {
    margin-left: 18px;
    margin-top: 20px;
    padding: 0.8em 1.75em;
    background-color: transparent;
    border-radius: 6px;
    border: 0.3px solid var(--white-union);
    -webkit-transition: 0.5s;
    transition: 0.5s;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    z-index: 1;
    font-weight: 800;
    font-size: 17px;
    font-family: "Roboto", "Segoe UI", sans-serif;
    text-transform: uppercase;
    color: var(--white-union);

    &.btn::after,
    &.btn::before {
      content: "";
      display: block;
      height: 100%;
      width: 100%;
      -webkit-transform: skew(90deg) translate(-50%, -50%);
      -ms-transform: skew(90deg) translate(-50%, -50%);
      transform: skew(90deg) translate(-50%, -50%);
      position: absolute;
      inset: 50%;
      left: 25%;
      z-index: -1;
      -webkit-transition: 0.5s ease-out;
      transition: 0.5s ease-out;
      background-color: var(--white-union);
    }

    &.btn::before {
      top: -50%;
      left: -25%;
      -webkit-transform: skew(90deg) rotate(180deg) translate(-50%, -50%);
      -ms-transform: skew(90deg) rotate(180deg) translate(-50%, -50%);
      transform: skew(90deg) rotate(180deg) translate(-50%, -50%);
    }

    &.btn:hover::before {
      -webkit-transform: skew(45deg) rotate(180deg) translate(-50%, -50%);
      -ms-transform: skew(45deg) rotate(180deg) translate(-50%, -50%);
      transform: skew(45deg) rotate(180deg) translate(-50%, -50%);
    }

    &.btn:hover::after {
      -webkit-transform: skew(45deg) translate(-50%, -50%);
      -ms-transform: skew(45deg) translate(-50%, -50%);
      transform: skew(45deg) translate(-50%, -50%);
    }

    &.btn:hover {
      color: var(--red-union);
    }

    &.btn:active {
      -webkit-filter: brightness(0.7);
      filter: brightness(0.7);
      -webkit-transform: scale(0.98);
      -ms-transform: scale(0.98);
      transform: scale(0.98);
    }
  }
`;
