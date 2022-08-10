import React from "react";
import { ButtonSty } from "./ButtonSty";

const Button = ({ children }) => {
  return (
    <ButtonSty>
      <button className="btn">{children}</button>
    </ButtonSty>
  );
};

export default Button;
