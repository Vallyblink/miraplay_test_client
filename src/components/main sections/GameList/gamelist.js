import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { nanoid } from 'nanoid';
import {
  CardInfo,
  GameCard,
  GameCards,
  GameContainer,
  GameDescription,
  GameImage,
  GameTitle,
  MainTitle,
  ButtonsContainer,
  Genres,
  GenresList,
  GenreItem,
  LoadMoreButtonWrapper,
} from './gamelist.styled';
import { ButtonGenre, ButtonLoadMore } from 'components/buttons/button';

const GameList = () => {
  const [games, setGames] = useState([]);
  const [page, setPage] = useState(1);
  const [genre, setGenre] = useState(false);
  const [hasMoreGames, setHasMoreGames] = useState(true);

  const genres = {
    false: 'Всі',
    FREE: 'Безкоштовні',
    MOBA: 'МОБА',
    SHOOTERS: 'Шутери',
    LAUNCHERS: 'Лаунчери',
    MMORPG: 'MMORPG',
    STRATEGY: 'Стратегії',
    FIGHTING: 'Файтинги',
    RACING: 'Гонки',
    SURVIVAL: 'Виживання',
    ONLINE: 'Онлайн',
  };

  const fetchGames = async () => {
    try {
      const response = await axios.post('https://api.miraplay.cloud/games/by_page', {
        page,
        isFreshGamesFirst: true,
        genre: genre,
        gamesToShow: 9,
      });

      const newGames = response.data.games;

      if (newGames.length === 0) {
        setHasMoreGames(false);
      } else {
        setGames(() => [ ...newGames]);
      }
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  };

  useEffect(() => {
    fetchGames();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, genre]);

  const handleGenreChange = (selectedGenre) => {
    setGenre(selectedGenre);
    setPage(1);
    setHasMoreGames(true);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <GameContainer>
      <MainTitle>Всі Ігри</MainTitle>
      <ButtonsContainer>
        <Genres>
          <GenresList>
            {Object.entries(genres).map(([key, value]) => (
              <GenreItem key={key}>
                <ButtonGenre title={value} active={key === genre} onClick={() => handleGenreChange(key)} />
              </GenreItem>
            ))}
          </GenresList>
        </Genres>
      </ButtonsContainer>

      <GameCards>
        {games.map((game) => (
          <GameCard key={nanoid()}>
            <GameImage src={game.gameImage} alt={game.commonGameName} />
            <CardInfo>
              <GameTitle>{game.commonGameName}</GameTitle>
              <GameDescription>{game.gameDescription}</GameDescription>
              {/* <AdditionalInfo>
              {game.inTop && <p>Топ гра</p>}
              {game.genre && <p>{game.genre}</p>}
              </AdditionalInfo> */}
            </CardInfo>
          </GameCard>
        ))}
      </GameCards>
        <LoadMoreButtonWrapper>
            <ButtonLoadMore onClick={handleLoadMore} title={"Показати ще"} disabled={hasMoreGames !== true} />
        </LoadMoreButtonWrapper>
    </GameContainer>
  );
};

export default GameList;
