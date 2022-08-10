import React from "react";
import CarouselHome from "./Carousel";
import {
  ButtonSty,
  CarouselContainer,
  HomeContainer,
  HomeWrapper,
  TitleSty,
} from "./HomeSty";
import { AiFillShopping } from "react-icons/ai";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <HomeWrapper>
        <TitleSty>¡Bienvenido a Tienda Unión!</TitleSty>
        <HomeContainer>
          <img
            src="https://www.tiendaunion.com.ar/sistema/skin_base_tiendaunion/assets/img/kappa.svg"
            alt=""
            style={{
              height: "200px",
              width: "325px",
              marginTop: "125px",
              filter: "invert(20%)",
              marginLeft: "80px",
            }}
          />

          <CarouselContainer>
            <CarouselHome />
          </CarouselContainer>

          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Escudo_club_Atl%C3%A9tico_Uni%C3%B3n_de_santa_fe.svg/1200px-Escudo_club_Atl%C3%A9tico_Uni%C3%B3n_de_santa_fe.svg.png"
            alt=""
            style={{
              height: "280px",
              marginTop: "110px",
            }}
          />
        </HomeContainer>
        <Link to='/products'>
          <ButtonSty whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.2 }}>
            Ver más productos
            <AiFillShopping style={{ height: "18px" }} />
          </ButtonSty>
        </Link>
      </HomeWrapper>
    </>
  );
};

export default Home;
