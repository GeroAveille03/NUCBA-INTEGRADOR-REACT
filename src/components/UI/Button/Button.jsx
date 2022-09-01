import React from "react";
import { ButtonSty } from "./ButtonSty";

const Button = ({
  children,
  disabled = false,
  onClick = () => "",
  onSubmit,
}) => {
  return (
    <ButtonSty onClick={onClick} onSubmit={onSubmit}>
      <button className="btn"  disabled={disabled}>{children}</button>
    </ButtonSty>
  );
};

export default Button;
