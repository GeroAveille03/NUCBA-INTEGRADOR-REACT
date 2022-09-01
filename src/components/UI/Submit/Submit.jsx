import React from 'react'
import { InputSubmitSty } from './SubmitSty'

const Submit = ({value= 'Ingresar', onClick, disabled = false, onSubmit}) => {
  return (
    <InputSubmitSty
    value={value}
    type='submit'
    whileTap={{scale: 0.95}}
    disabled={disabled}
    onClick={onClick}
    onSubmit={onSubmit}
    >
        
    </InputSubmitSty>
  )
}

export default Submit