// GameList.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { nanoid } from 'nanoid';

const MainPage = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post('https://api.miraplay.cloud/games/by_page', {
          page: 1,
          isFreshGamesFirst: true,
          genre: 'SURVIVAL',
          gamesToShow: 9,
        });

        setGames(response.data.games);
      } catch (error) {
        console.error('Помилка під час отримання даних:', error.message);
      }
    };

    fetchData();
  }, []);
    
    console.log(games)

  return (
    <div>
      <h1>Game List</h1>
      <div>
        {games.map((game) => (
          <div key={nanoid()}> {/* Use nanoid() as the key */}
            <h2>{game.commonGameName}</h2>
            <p>{game.gameDescription}</p>
            {/* Add other fields from the game object that you want to display */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainPage;
