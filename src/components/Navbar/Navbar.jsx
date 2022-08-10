import React, { useState } from "react";
import {
  LinksContainerSty,
  LogoSty,
  NavbarContainerSty,
  LinkContainerSty,
  UserNavSty,
} from "./NavbarSty";
import { Link } from "react-router-dom";
import { HiHome } from "react-icons/hi";
import { FaUserAlt, FaShoppingCart } from "react-icons/fa";
import { AnimatePresence } from "framer-motion";
import ModalUser from "./ModalUser/ModalUser";
import ModalCart from "./ModalCart/ModalCart";

const Navbar = () => {
  const [openUser, setOpenUser] = useState();
  const [openModal, setOpenModal] = useState();

  return (
    <NavbarContainerSty>
      <AnimatePresence>
        {openModal && <ModalCart closeModal={setOpenModal} />}
      </AnimatePresence>
      <AnimatePresence>
        {openUser && <ModalUser closeModal={setOpenUser} />}
      </AnimatePresence>
      <div>
        <Link to="/">
          <LogoSty
            src="https://www.tiendaunion.com.ar/sistema/skin_base_tiendaunion/assets/img/id.svg"
            alt=""
          />
        </Link>
      </div>
      <LinksContainerSty>
        <Link to="/">
          <LinkContainerSty>
            <HiHome />
          </LinkContainerSty>
        </Link>

        <Link to=''>
          <LinkContainerSty
            onClick={() => {
              setOpenModal(!openModal && !openUser);
            }}
          >
            <FaShoppingCart />
            {/* <ModalCart></ModalCart> */}
          </LinkContainerSty>
        </Link>

        <UserNavSty>
          <Link to="">
            <LinkContainerSty
              onClick={() => {
                setOpenUser(!openUser && !openModal);
              }}
            >
              <FaUserAlt />
              <span>Iniciá Sesión</span>
            </LinkContainerSty>
          </Link>
          {/* <ModalUser /> */}
        </UserNavSty>
      </LinksContainerSty>
    </NavbarContainerSty>
  );
};

export default Navbar;
