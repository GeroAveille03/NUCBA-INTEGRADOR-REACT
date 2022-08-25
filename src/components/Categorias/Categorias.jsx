import React from "react";
import { Categoria } from "./Categoria";
import { ProductsFilterContainer } from "./CategoriasSty";
import { useSelector } from "react-redux";

const Categorias = () => {
  const categories = useSelector((state) => state.categories.categories);

  return (
    <ProductsFilterContainer>
      {categories.map(category => (
        <Categoria
          imgSource={category.img}
          title={category.title}
          category={category.category}
          key={category.id}
        />
      ))}
    </ProductsFilterContainer>
  );
};

export default Categorias
