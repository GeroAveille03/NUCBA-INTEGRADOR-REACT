import React from "react";
import Button from "../../components/UI/Button/Button";
import CardsMisOrdenes from "../../components/MisOrdenes/CardsMisOrdenes";
import {
  MisOrdenesBtnContainerStyled,
  MisOrdenesContainerStyled,
  MisOrdenesPatternStyled,
  MisOrdenesTitleStyled,
} from "./MisOrdenesStyles";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { useEffect } from "react";
import * as ordersActions from "../../components/Redux/orders/orders-actions";

const MisOrdenes = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(ordersActions.getFullOrders(currentUser?.id));
  }, [dispatch, currentUser?.id]);

  return (
    <>
      <MisOrdenesContainerStyled>
        <MisOrdenesTitleStyled>Mis órdenes</MisOrdenesTitleStyled>
        <CardsMisOrdenes />
        <MisOrdenesBtnContainerStyled>
          <Link to="/products">
            <Button onClick={() => navigate("/")}>Volver a comprar</Button>
          </Link>
        </MisOrdenesBtnContainerStyled>
      </MisOrdenesContainerStyled>
    </>
  );
};

export default MisOrdenes;
