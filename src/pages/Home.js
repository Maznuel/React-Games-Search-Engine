import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { loadGames } from '../actions/gamesAction'
import styled from 'styled-components'
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion'
//Components
import Game from '../components/Game'
import GameDetail from '../components/GameDetail'
import { useLocation } from 'react-router-dom'
import { fadeIn, popUp } from '../animation'
import Line from '../components/Line';

function Home() {
    const location = useLocation()
    const path = location.pathname.split('/')[2]
    console.log(path)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(loadGames())
    }, [dispatch])
    const { popular, newGames, upcoming, searched } = useSelector((state) => state.games)
    return (
        <GameList variants={fadeIn} initial='hidden' animate='show'>
            <AnimateSharedLayout type='crossfade'>
                <AnimatePresence>{path && <GameDetail path={path} />}</AnimatePresence>
                {searched.length ? (
                    <div className='searched'>
                        <Line />
                        <h2>Searched</h2>
                        <Line />
                        <Games >
                            {searched.map((game) => (
                                <Game name={game.name} released={game.released} id={game.id}
                                    image={game.background_image} key={game.id} />
                            ))}
                        </Games>
                    </div>
                ) : ''}
                <Line />
                <h2>Upcoming Games</h2>
                <Line />
                <Games>
                    {upcoming.map((game) => (
                        <Game name={game.name} released={game.released} id={game.id}
                            image={game.background_image} key={game.id} />
                    ))}
                </Games>
                <Line />
                <h2>Popular Games</h2>
                <Line />
                <Games>
                    {popular.map((game) => (
                        <Game name={game.name} released={game.released} id={game.id}
                            image={game.background_image} key={game.id} />
                    ))}
                </Games>
                <Line />
                <h2>New Games</h2>
                <Line />
                <Games>
                    {newGames.map((game) => (
                        <Game name={game.name} released={game.released} id={game.id}
                            image={game.background_image} key={game.id} />
                    ))}
                </Games>
            </AnimateSharedLayout>
        </GameList >
    )
}

const GameList = styled.div`
padding:0rem 4rem;
h2{
    text-align: center;
    padding:3rem 0rem;
    color:white;
}
`

const Games = styled(motion.div)`
margin-top:40px;
margin-bottom:40px;
min-height:40vh;
display:grid;
grid-template-columns: repeat(auto-fit,minmax(400px,1fr));
grid-column-gap: 2rem;
grid-row-gap: 2rem;
h2{
    color:black;
    margin-left:0%;
}
`

export default Home
//repeat(auto-fit,minmax(300px, 1fr)