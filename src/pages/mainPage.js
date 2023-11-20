import React from 'react';


import PopularGamesSection from 'components/main sections/Popular/popularGame';
import data from "../components/popular/popular.json"
import GameList from 'components/main sections/GameList/gamelist';
import MainSectionComponent from 'components/main sections/MainSection/maininfo';
import Header from 'components/headbar/mainheadbar';


const MainPage = () => {
 
  return (
    <div>
      <Header/>
      <MainSectionComponent/>
      <PopularGamesSection games={data} />
      <GameList/>
      
      
      
    </div>
  );
};

export default MainPage;
