import styled from 'styled-components';

export const SectionContainer = styled.div`
  background:#181818;
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-repeat: no-repeat;
  align-items: center;
  padding: 0px 20px;
  z-index: -2;
  

  @media screen and (min-width: 768px) {
    padding: 0px 148px;
    z-index: -2;
`;

export const SectionTitle = styled.h2`
  color: var(--main-text-color);
  font-size: 30px;
  font-weight: 900;
  line-height: 100%;
  margin-bottom: 64px;
  text-transform: uppercase;
`;

export const GameContainer = styled.div`
  display: flex;
  gap: 16px;
`;

export const GameCard = styled.div`
  border-radius: 10px;
  cursor: pointer;
  height: 200px;
  overflow: hidden;
  width: 170px;
`;

export const GameImage = styled.img`
  width: 100%;
`;

export const GameTitle = styled.p`
  color: var(--main-text-color);
  font-size: 15px;
  font-weight: 800;
  line-height: 115%;
  text-align: center;
  text-transform: uppercase;
  width: 100%;
`;