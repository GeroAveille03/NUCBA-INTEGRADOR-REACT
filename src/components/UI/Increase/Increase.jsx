import React from "react";
import { IncreaseSty } from "./IncreaseSty";

const Increase = ({children, secondary = false}) => {
  return (
    <IncreaseSty
    whileTap={{scale: 0.95}}
    secondary={secondary}
    >
        {children}
    </IncreaseSty>
  )
}

export default Increase