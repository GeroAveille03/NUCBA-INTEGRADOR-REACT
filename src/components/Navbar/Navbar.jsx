import React, { useState, useEffect } from "react";
import {
  LinksContainerSty,
  LogoSty,
  NavbarContainerSty,
  LinkContainerSty,
  UserNavSty,
  ModalOverlaySty,
} from "./NavbarSty";
import { Link } from "react-router-dom";
import { HiHome } from "react-icons/hi";
import { FaUserAlt, FaShoppingCart } from "react-icons/fa";
import { AnimatePresence } from "framer-motion";
import ModalUser from "./ModalUser/ModalUser";
import ModalCart from "./ModalCart/ModalCart";
import { useSelector, useDispatch } from "react-redux";
import * as cartActions from '../Redux/cart/cart-actions'

const Navbar = () => {
  const [openUser, setOpenUser] = useState();

  const dispatch = useDispatch()

  useEffect(() =>{
    if(!hiddenCart){
      dispatch(cartActions.toggleHiddenCart())
    }
  },[dispatch])

  const hiddenCart = useSelector((state) => state.cart.hidden);

  return (
    <NavbarContainerSty>
      {
        !hiddenCart && (
          <ModalOverlaySty
          onClick={() => !hiddenCart && dispatch(cartActions.toggleHiddenCart())}
          isHidden={hiddenCart}
          />
        )
      }

      <AnimatePresence>{!hiddenCart && <ModalCart />}</AnimatePresence>

      <AnimatePresence>
        {openUser && <ModalUser closeModal={setOpenUser} />}
      </AnimatePresence>
      <div>
        <Link to="/">
          <LogoSty src="https://i.imgur.com/nAc9UkE.png" alt="" />
        </Link>
      </div>
      <LinksContainerSty>
        <Link to="/">
          <LinkContainerSty>
            <HiHome />
          </LinkContainerSty>
        </Link>

        {/* <Link to=''> */}
        <LinkContainerSty
        onClick={() => dispatch(cartActions.toggleHiddenCart())}
        >
          <FaShoppingCart />
          {/* <ModalCart></ModalCart> */}
        </LinkContainerSty>
        {/* </Link> */}

        <UserNavSty>
          {/* <Link to=""> */}
          <LinkContainerSty
            onClick={() => {
              setOpenUser(!openUser);
            }}
          >
            <FaUserAlt />
            <span>Iniciá Sesión</span>
          </LinkContainerSty>
          {/* </Link> */}
          {/* <ModalUser /> */}
        </UserNavSty>
      </LinksContainerSty>
    </NavbarContainerSty>
  );
};

export default Navbar;
