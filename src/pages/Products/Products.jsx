import React, { useEffect, useState } from "react";
import { ButtonContainerStyled, ProductosContainer } from "./ProductsSty";
// import { products } from "../../data/Products";
import CardProducto from "./CardProducto";
import Button from "../../components/UI/Button/Button";
// import { FaTshirt } from "react-icons/fa";
// import { IoIosShirt } from "react-icons/io";
// import { GiHoodie, GiUnderwearShorts } from "react-icons/gi";
import Categorias from "../../components/Categorias/Categorias";
import { useSelector } from "react-redux";
import { INITIAL_LIMIT } from "../../utils";

const CardsProductos = ({ limited }) => {
  let products = useSelector((state) => state.products.products);
  const selectedCategory = useSelector(
    (state) => state.categories.selectedCategory
  );

  if (selectedCategory) {
    products = { [selectedCategory]: products[selectedCategory] };
  }

  const [limit, setLimit] = useState(INITIAL_LIMIT);

  useEffect(() => setLimit(INITIAL_LIMIT), [selectedCategory]);

  const totalProducts = useSelector((state) => state.products.TotalProducts);

  return (
    <>
      <Categorias />

      <ProductosContainer>
        {Object.entries(products).map(([, indumentarias]) =>
          indumentarias.map((indumentaria) => {
            if (limit >= indumentaria.id || selectedCategory) {
              return (
                <CardProducto
                  key={indumentaria.id} {...indumentaria}
                />
              );
            }
            return null;
          })
        )}
        
      </ProductosContainer>
      {!selectedCategory && (
        <ButtonContainerStyled>
          <Button
            onClick={() => setLimit(prevLimit => prevLimit - INITIAL_LIMIT)}
            disabled={INITIAL_LIMIT === limited}
          >
            <span>Ver Menos</span>
          </Button>

          <Button
            onClick={() => setLimit(prevLimit => prevLimit + INITIAL_LIMIT)}
            disabled={totalProducts <= limit}
          >
            <span>Ver Más</span>
          </Button>
        </ButtonContainerStyled>
      )}
    </>
  );
};

export default CardsProductos;
