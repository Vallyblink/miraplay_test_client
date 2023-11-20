import styled from 'styled-components';

export const SectionContainer = styled.div`
    height: 520px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-repeat: no-repeat;
    align-items: initial;
    margin: 0 auto;
    width: 1170px;

  
   @media screen and (max-width: 1200px){
    height: 100%;
    display: flex;
    flex-direction: column;
    width:100%
    }


    @media screen and (min-width: 320px) and (max-width: 767px){
    min-height: 500px;
    overflow: hidden;
    width: 100%;
    }
`;

export const SectionTitle = styled.h2`
  font-size: 30px;
  font-weight: 900;
  line-height: 100%;
  margin-bottom: 64px;
  text-transform: uppercase;
  font-family: 'Neue Machina-Ultrabold';
  color: #eaeaea;
`;

export const GameContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
  width: calc((100% - 60px) / 4); 
  @media screen and (min-width: 1200px) {
    width: 100%;
  }

  @media screen and (max-width: 1200px){
    width: calc((100% - 60px) / 1);
    height: 100%;
    display: flex;
    justify-content: center;
    }


    @media screen and (min-width: 320px) and (max-width: 767px){
    width: calc((100% - 60px) / 1);
    }
`;

export const GameCard = styled.div`
 background: #1c1c1c;
  border-radius: 20px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  width: 170px; 
  margin-bottom: 30px;
  color: #afafaf;
  height: 200px;

  &:hover {
  background: #403c3c;
  }

   
`;

export const GameImage = styled.img`
   border-radius: 20px 20px 0 0;
  object-fit: cover;
  object-position: center;
  width: 100%;
  height: 70%;
`;

export const GameTitle = styled.p`
  color: #eaeaea;
  font-size: 15px;
  font-weight: 800;
  line-height: 115%;
  text-align: center;
  text-transform: uppercase;
  width: 100%;
  font-family: 'Neue Machina-Ultrabold';
`;