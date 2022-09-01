import React from "react";
import { ModalContainerStyled, UsernameStyled, HrStyled } from "./ModalUserSty";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as userActions from "../../Redux/user/user-actions";
import { auth } from "../../../firebase/firebase-utils";

const ModalUser = () => {
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <ModalContainerStyled
      initial={{ translateX: 600 }}
      animate={{ translateX: 0 }}
      exit={{ translateX: 600 }}
      transition={{ duration: 0.5 }}
      key="cart-user"
    >
      <UsernameStyled>{`¡Hola ${currentUser?.displayName}!`}</UsernameStyled>
      <HrStyled />
      <span>
        <Link to="/mis-ordenes">Mis Ordenes</Link>
      </span>
      <span
        onClick={() =>
          auth.signOut().then(() => dispatch(userActions.toggleMenuHidden()))
        }
      >
        Cerrar Sesión
      </span>
    </ModalContainerStyled>
  );
};

export default ModalUser;
