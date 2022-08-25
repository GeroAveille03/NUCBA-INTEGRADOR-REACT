import React from "react";
import { CardFilter } from "./CategoriasSty";
import { useDispatch } from "react-redux";
import * as categoriesActions from "../Redux/categories/categories-actions";

export const Categoria = ({ imgSource, category }) => {
//   const selectedCategory = useSelector(
//     (state) => state.categories.selectedCategory
//   );

  const dispatch = useDispatch();

  const handlerFilter = (category) => {
    dispatch(categoriesActions.selectCategory(category));
  };

  return (
    <CardFilter
      onClick={() => handlerFilter(category)}
    >
      <img src={imgSource} alt="" />
    </CardFilter>
  );
};
