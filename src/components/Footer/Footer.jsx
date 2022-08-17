import React from "react";
import {
  FooterContainerSty,
  FooterH2Sty,
  GeneralContainerSty,
  HrSty,
  SocialIconsSty,
} from "./FooterSty";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <HrSty />
      <FooterContainerSty>
        <GeneralContainerSty>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Escudo_club_Atl%C3%A9tico_Uni%C3%B3n_de_santa_fe.svg/1200px-Escudo_club_Atl%C3%A9tico_Uni%C3%B3n_de_santa_fe.svg.png"
            alt=""
            style={{ height: "200px" }}
          />
          <iframe title="ubicacion-tienda" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3397.053600643727!2d-60.71556981421032!3d-31.632382765349934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b5a9c94befeccb%3A0x9dd4deeb86db3a80!2sTienda%20Union!5e0!3m2!1ses!2sar!4v1659636924647!5m2!1ses!2sar"></iframe>
          <FooterH2Sty>Hecho con ❤️ por ©Gero para NUCBA </FooterH2Sty>

          <SocialIconsSty>
            <a href="https://www.facebook.com/tiendaunionok" target="_blank" rel="noreferrer"><FaFacebookF style={{ fontSize: "40px", cursor: "pointer" }} /></a> 
            <a href="https://www.instagram.com/tiendaunionok/" target="_blank" rel="noreferrer"><BsInstagram style={{ fontSize: "40px", cursor: "pointer" }} /></a> 
            <a href="https://twitter.com/tiendaunionok" target="_blank" rel="noreferrer"><BsTwitter style={{ fontSize: "40px", cursor: "pointer" }} /></a> 
          </SocialIconsSty>
        </GeneralContainerSty>
      </FooterContainerSty>
    </>
  );
};

export default Footer;
