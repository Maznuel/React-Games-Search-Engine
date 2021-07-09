import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { smallImage } from '../util'
import ps4 from '../img/ps4.svg'
import ps5 from '../img/ps5.svg'
import steam from '../img/steam.svg'
import xbox from '../img/xbox.svg'
import nintendo from '../img/nintendo.svg'
import apple from '../img/apple.svg'
import gamepad from '../img/gamepad.svg'
import xbox2 from '../img/xboxS.svg'
import starEmpty from '../img/star-empty.png'
import starFull from '../img/star-full.png'
import chrome from '../img/chrome.svg'
import linux from '../img/linux.svg'
import android from '../img/android.svg'
import ps3 from '../img/ps3.svg'


const GameDetail = ({ path }) => {
    const history = useHistory()
    const exitDetailHandler = (e) => {
        const element = e.target
        if (element.classList.contains('shadow')) {
            history.push('/')
            document.body.style.overflow = 'auto'
        }
    }
    //Get stars
    const getRating = () => {
        const stars = []
        const rating = Math.floor(game.rating)
        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                stars.push(<img className='star' alt='star' key={i} src={starFull}></img>)
            } else {
                stars.push(<img className='star' alt='star' key={i} src={starEmpty}></img>)

            }
        }
        return stars
    }

    const getPlatform = (platform) => {
        console.log(platform)
        switch (platform) {
            case 'Android':
                return android
            case 'macOS':
                return apple
            case 'Web':
                return chrome
            case 'Linux':
                return linux
            case "PlayStation 5":
                return ps5
            case "PlayStation 4":
                return ps4
            case "Xbox One":
                return xbox
            case "PC":
                return steam
            case "Nintendo Switch":
                return nintendo
            case "iOS":
                return apple
            case 'Xbox Series S/X':
                return xbox2
            case 'Xbox 360':
                return xbox2
            case 'PlayStation 3':
                return ps3


            default:
                return gamepad
        }
    }
    const { screen, game, isLoading } = useSelector((state) => state.detail)
    return (
        <>
            {!isLoading && (
                <CardShadow className="shadow" onClick={exitDetailHandler}>
                    <Detail layoutId={path}>
                        <Stats>
                            <Name>
                                <motion.h1 >{game.name}</motion.h1>
                                {getRating()}
                            </Name>
                            <Info>
                                <H2plat>Platforms</H2plat>
                                <Platforms>
                                    {game.platforms.map(data => (
                                        <img src={getPlatform(data.platform.name)} alt="" />
                                    ))}
                                </Platforms>
                            </Info>
                        </Stats>
                        <Media>
                            <motion.img layoutId={`image ${path}`} src={smallImage(game.background_image, 1280)} alt="image" />
                        </Media>
                        <Description>
                            <p>{game.description_raw}</p>
                        </Description>
                        <div className="gallery">
                            {screen.results.map(screen => (
                                <img src={smallImage(screen.image, 1280)} key={screen.id} alt="" />
                            ))}
                        </div>
                    </Detail>
                </CardShadow>
            )}
        </>
    );
}

const CardShadow = styled(motion.div)`
width:100%;
min-height:100vh;
overflow-y:scroll;
background: rgba(0,0,0,0.5);
position:fixed;
top:0;
z-index: 5;
left:0;
`
const Detail = styled(motion.div)`
display:flex;
flex-direction:column;
width:80%;
padding: 5rem 7rem;
border-radius:1rem;
background:white;
position:absolute;
color:black;
left:10%;
z-index:10;
img{
    width:100%;
}
`
const Name = styled(motion.div)`
flex:1;
`
const Stats = styled(motion.div)`
width:90%;
margin:auto;
display:flex;
align-items:center;
justify-content:space-between;
padding: 2rem 0rem;
flex:1;
.star{
    margin-top:20px;
    margin-left:5px;
    width:20px;
    height: 20px;
    display:inline;
}
`
const Info = styled(motion.div)`
text-align:center;
`
const Platforms = styled(motion.div)`
display:flex;
flex:3;
img{
    margin-left:3rem;
}
h3{
    margin-left:3rem;
}
`
const Media = styled(motion.div)`
margin-top:5rem;
`
const Description = styled(motion.div)`
margin: 4rem 0rem;
`
const H2plat = styled(motion.h2)`
margin-left:3rem;
margin-bottom: 2rem;
`
//<img key={data.platform.id} src={getPlatform(data.platform.name)}alt="" />

export default GameDetail