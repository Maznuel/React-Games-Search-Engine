import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useDispatch } from 'react-redux'
import loadDetail from '../actions/detailAction'
import { Link } from 'react-router-dom'
import { smallImage } from '../util'
import { popUp } from '../animation'

const Game = ({ name, released, image, id }) => {
    const stringId = id.toString()
    //load the game info
    const dispatch = useDispatch()
    const loadDetailHandler = () => {
        dispatch(loadDetail(id))
        document.body.style.overflow = 'hidden'
    }

    return (
        <Games variants={popUp} initial='hidden' animate='show' layoutId={stringId} onClick={loadDetailHandler}>
            <Link to={`/game/${id}`}>
                <motion.h2 className='gameh2' >{name}</motion.h2>
                <p>{released}</p>
                <motion.img layoutId={`image ${stringId}`} className="gameIMG" src={smallImage(image, 640)} alt={name} />
            </Link>
        </Games>
    )
}


const Games = styled(motion.div)`
height:60vh;
box-shadow: 0px 5px 30px rgba(0,0,0,0.3);
text-align:center;
border-radius: 20px;
cursor:pointer;
color:white;
p{
    margin-bottom:10px;
    color:white;
}
background:#d40000;
h2{
    color:white;
}
`




export default Game