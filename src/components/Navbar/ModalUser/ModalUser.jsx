import React from "react";
import { ModalContainerStyled, UsernameStyled, HrStyled } from "./ModalUserSty";
import { Link } from 'react-router-dom';

const ModalUser = () => {
  return (
    <ModalContainerStyled
      initial={{ translateX: 600 }}
      animate={{ translateX: 0 }}
      exit={{ translateX: 600 }}
      transition={{ duration: 0.5 }}
      key="cart-user"
    >
      <UsernameStyled>Hola Gero!</UsernameStyled>
      <HrStyled />
      <Link to='/mis-ordenes'>Mis Ordenes
     </Link>
      <p>Cerrar Sesión</p>
    </ModalContainerStyled>
  );
};

export default ModalUser;
