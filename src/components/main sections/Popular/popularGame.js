import React from 'react';
import { GameCard, GameContainer, GameImage, GameTitle, SectionContainer, SectionTitle } from './popularGame.styled';

const PopularGamesSection = ({ games }) => {
  return (
    <SectionContainer>
      <SectionTitle>Popular Games</SectionTitle>
      <GameContainer>
        {games.map((game) => (
          <GameCard key={game._id}>
            <GameImage src={game.gameImage} alt={game.commonGameName} />
            <GameTitle>{game.commonGameName}</GameTitle>
          </GameCard>
        ))}
      </GameContainer>
    </SectionContainer>
  );
};

export default PopularGamesSection;