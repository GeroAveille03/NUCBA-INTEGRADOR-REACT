import React from "react";
import { IncreaseSty } from "./IncreaseSty";

const Increase = ({children, secondary = false, onClick, disabled = false}) => {
  return (
    <IncreaseSty
    whileTap={{scale: 0.95}}
    secondary={secondary}
    onClick={onClick}
    disabled={disabled}
    >
        {children}
    </IncreaseSty>
  )
}

export default Increase