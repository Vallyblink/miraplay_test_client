import styled from 'styled-components';

export const GameContainer = styled.div`
  margin: 0 auto;
  min-height: 500px;
  padding-bottom: 50px;

  @media screen and (min-width: 1200px) {
    margin: 0 auto;
    min-height: 500px;
    padding-bottom: 50px;
    width: 1170px;
  }

  @media screen and (min-width: 320px) and (max-width: 780px) {
    min-height: 500px;
    overflow: hidden;
    width: 100%;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 10px;
  max-width: 800px;
  width: 100%;
  align-items: baseline;
`;

export const MainTitle = styled.h2`
  font-size: 48px;
  font-weight: 900;
  font-family: 'Neue Machina-Ultrabold';
  line-height: 100%;
  margin-bottom: 42px;
  text-transform: uppercase;
  color: #eaeaea;

  @media screen and (min-width: 780px) and (max-width: 1200px) {
    margin-left: 40px;
  }

  @media screen and (min-width: 320px) and (max-width: 780px) {
    margin-left: 40px;
  }
`;

export const Genres = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-bottom: 20px;
  margin-left: 30px;
`;

export const GenresList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const GenreItem = styled.li`
  margin-bottom: 10px;
`;

export const GameCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
  width: calc((100% - 60px) / 4);
  

  @media screen and (min-width: 1200px) {
    width: 100%;
  }

  @media screen and (min-width: 780px) and (max-width: 1200px) {
    width: calc((100% - 60px) / 1);
    margin-left: 30px;

    &:nth-child(2n) {
      margin-left: 0;
    }
  }

  @media screen and (min-width: 320px) and (max-width: 780px) {
    width: calc((100% - 40px));
    margin-left: 20px;
  }
`;

export const GameCard = styled.div`
  background: #1c1c1c;
  border: 1px solid #454545;
  border-radius: 20px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  width: calc((100% - 60px) / 2);
  margin-bottom: 30px;
  color: #afafaf;
  height: 530px;
  width: 335px; 

  &:hover {
  }
  @media screen and (min-width: 320px) and (max-width: 780px) {
    width: calc((100% - 40px) / 2);
  }
  @media screen and (min-width: 320px) and (max-width: 780px) {
    width: calc((100% - 40px) / 1);
  }
`;

export const GameImage = styled.img`
  border-radius: 20px 20px 0 0;
  height: 335px;
  min-height: 335px;
  object-fit: cover;
  object-position: center;
  width: 100%;
`;

export const CardInfo = styled.div`
  padding: 15px;
  overflow: hidden;
`;

export const GameTitle = styled.h2`
  font-size: 22px;
  font-weight: 800;
  line-height: 36px;
  margin-bottom: 6px;
  text-transform: uppercase;
  font-family: 'Neue Machina-Ultrabold';
  color: #eaeaea;
`;

export const GameDescription = styled.p`
  font-size: 12px;
  font-weight: 300;
  line-height: 18px;
  height: 89px;
  font-family: 'Neue Machina';
  color: #afafaf;
  margin-bottom: 30px;
  overflow: hidden;
`;

export const AdditionalInfo = styled.div`
  align-items: center;
  backdrop-filter: blur(10px);
  border-radius: 10px;
  color: #afafaf;
  display: flex;
  justify-content: space-between;
`;

export const LoadMoreButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;