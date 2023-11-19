import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { nanoid } from 'nanoid';
import { AdditionalInfo, CardInfo, GameCard, GameCards, GameContainer, GameDescription, GameImage, GameTitle, GenreButtons } from './gamelist.styled';

const GameList = () => {
    const [games, setGames] = useState([]);
    const [page, setPage] = useState(1);
    const [genre, setGenre] = useState('');
   
    useEffect(() => {
        const fetchALLGames = async () => {
            try {
                const response = await axios.get('https://api.miraplay.cloud/games');
                setGames(() => response.data.slice(0, 9));
            } catch (error) {
                console.error('Error fetching data:', error.message);
            }
        };

        fetchALLGames();
    }, []);
    
    const genres = [
        'ALL',
        'FREE',
        'MOBA',
        'SHOOTERS',
        'LAUNCHERS',
        'MMORPG',
        'STRATEGY',
        'FIGHTING',
        'RACING',
        'SURVIVAL',
        'ONLINE',
    ];
  
    const fetchGames = async () => {
        try {
            const response = await axios.post('https://api.miraplay.cloud/games/by_page', {
                page,
                isFreshGamesFirst: true,
                genre,
                gamesToShow: 9,
            });

            setGames(() => [...response.data.games]);
        } catch (error) {
            console.error('Error fetching data:', error.message);
        }
    };
    


    useEffect(() => {
    
        fetchGames()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page, genre]);

    const handleGenreChange = (selectedGenre) => {
        setGenre(selectedGenre);
        setPage(1);
    };
    console.log(genre)
    console.log(games)
    const handleLoadMore = () => {
        setPage((prevPage) => prevPage + 1);
    };

    return (
        <GameContainer>
            <h1>Game List</h1>
            <GenreButtons>
                    {genres.map((g) => (
                        <button key={g} onClick={() => handleGenreChange(g)}>
                            {g}
                        </button>
                    ))}
                </GenreButtons>
            <div>
             
                <GameCards>
                    {games.map((game) => (
                        <GameCard key={nanoid()}>
                            <GameImage src={game.gameImage} alt={game.commonGameName} />
                            <CardInfo>
                                <GameTitle>{game.commonGameName}</GameTitle>
                                <GameDescription>{game.gameDescription}</GameDescription>
                                <AdditionalInfo>
                                   
                                </AdditionalInfo>
                            </CardInfo>
                        </GameCard>
                    ))}
                </GameCards>
                <button onClick={handleLoadMore}>Load More</button>
            </div>
        </GameContainer>
    );
}

export default GameList;
