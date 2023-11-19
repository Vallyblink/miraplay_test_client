import styled from 'styled-components';

export const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 65px;
`;

export const GenreButtons = styled.div`
  display: flex;
  gap: 10px;
`;

export const GameCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  display: flex;
  justify-content: center;

  @media screen and (min-width: 1200px) {
    width: 100%;
  }
`;

export const GameCard = styled.div`
  background: #1c1c1c;
  border: 1px solid #454545;
  border-radius: 20px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  width: calc((100% - 60px) / 4); 
  margin-bottom: 30px;
  color: #afafaf;
  height: 530px;

  &:hover {
    
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
  font-size: 18px;
  font-weight: 800;
  line-height: 164%;
  margin-bottom: 6px;
  text-transform: uppercase;
  font-family: 'Neue Machina';
  color: #afafaf;
`;

export const GameDescription = styled.p`
  font-size: 16px;
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
  padding: 5px 10px;
`;
