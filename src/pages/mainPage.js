import React from 'react';


import PopularGamesSection from 'components/main sections/popularGame';
import data from "../components/popular/popular.json"
import GameList from 'components/main sections/gamelist';

const MainPage = () => {
 
  return (
    <div>
      <PopularGamesSection games={data} />
      <GameList/>
      
      
      
    </div>
  );
};

export default MainPage;
