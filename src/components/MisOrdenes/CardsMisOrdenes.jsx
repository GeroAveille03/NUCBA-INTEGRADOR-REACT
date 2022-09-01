import CardMisOrdenes from './CardMisOrdenes';
import { MisOrdenesContainerStyled } from './CardMisOrdenesStyles';
import { useSelector } from 'react-redux/es/hooks/useSelector';

const CardsMisOrdenes = () => {
  
  const {orders, loading, error} = useSelector(state => state.orders)

  if(loading && !orders.length){
    return 
  }

  if(error){
    return <h2>{error.message}</h2>
  }
  
  return (
    <MisOrdenesContainerStyled>
      
      {orders.length ? (
        orders.map(order => <CardMisOrdenes 
        key={order.id} {...order}/>)
        ) : (
          <h2>¿Que esperas para hacer tu primer pedido?</h2>
        )
    }

    </MisOrdenesContainerStyled>
  );
};

export default CardsMisOrdenes;