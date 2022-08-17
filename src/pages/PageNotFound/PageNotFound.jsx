import {
  FoundContainerStyled,
  FoundSubtitleStyled,
  FoundTextStyled,
  FoundTitleStyled,
} from './PageNotFoundStyles';

const PageNotFound = () => {
  return (
    <div>
      <FoundContainerStyled>
        <FoundTextStyled>
          <FoundTitleStyled>404 Error</FoundTitleStyled>
          <FoundSubtitleStyled>#Nro: 1989</FoundSubtitleStyled>
          <p>Parece que la página que buscás no existe o fue removida</p>
        </FoundTextStyled>
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Escudo_club_Atl%C3%A9tico_Uni%C3%B3n_de_santa_fe.svg/1200px-Escudo_club_Atl%C3%A9tico_Uni%C3%B3n_de_santa_fe.svg.png'
          alt=''
          className='imgNotFound'
          style={{height: '300px'}}
        />
      </FoundContainerStyled>
    </div>
  );
};

export default PageNotFound;
