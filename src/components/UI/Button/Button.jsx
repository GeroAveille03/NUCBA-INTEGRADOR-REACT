import React from "react";
import { ButtonSty } from "./ButtonSty";

const Button = ({
  children,
  disabled = false,
  onClick = () => "",
}) => {
  return (
    <ButtonSty onClick={onClick} disabled={disabled}>
      <button className="btn" disabled={disabled}>{children}</button>
    </ButtonSty>
  );
};

export default Button;
