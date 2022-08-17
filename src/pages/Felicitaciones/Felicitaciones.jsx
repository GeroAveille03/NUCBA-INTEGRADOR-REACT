import { Link } from 'react-router-dom';
import Button from '../../components/UI/Button/Button';
import {
  ContainerInfoStyled,
  PatternStyled,
  TextStyled,
} from './FelicitacionesStyled';

const Felicitaciones = () => {
  return (
    <div>
      <TextStyled>
        <img
          src='https://res.cloudinary.com/dcatzxqqf/image/upload/v1656648433/coding/NucbaZappi/Assets/Success-illustration_sbucqm.png'
          alt=''
        />
        <ContainerInfoStyled>
          <h1 style={{fontSize: '2.3em'}}>¡!</h1>
          <p style={{fontSize: '1.8em'}}>Tu pedido fue realizado</p>
        </ContainerInfoStyled>
        <Link to='/resumen'>
          <Button>Volver</Button>
        </Link>
      </TextStyled>
    </div>
  );
};

export default Felicitaciones;
