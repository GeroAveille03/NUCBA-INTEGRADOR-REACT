import React from 'react'
import { InputSubmitSty } from './SubmitSty'

const Submit = ({value= 'Ingresar'}) => {
  return (
    <InputSubmitSty
    value={value}
    type='submit'
    whileTap={{scale: 0.95}}
    >
        
    </InputSubmitSty>
  )
}

export default Submit