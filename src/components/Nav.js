import React, { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import logo from '../img/logo.svg'
import { fetchSearch } from '../actions/gamesAction'
import { useDispatch } from 'react-redux'
import { fadeIn } from '../animation'
import fondonav from '../img/fondonav.png'


const Nav = () => {
    const dispatch = useDispatch()
    const [textInput, setTextInput] = useState('')

    const inputHandler = (e) => {
        setTextInput(e.target.value)
    }
    const submitForm = (e) => {
        e.preventDefault()
        dispatch((fetchSearch(textInput)))
        setTextInput('')
    }
    const clearSearch = () => {
        dispatch({ type: 'CLEAR_SEARCH' })
    }

    return (
        <>
            <StyledNav variants={fadeIn} initial='hidden' animate='show'>
                <Logo onClick={clearSearch}>
                    <h1>Search Games</h1>
                </Logo>
                <form className='search'>
                    <input value={textInput} onChange={inputHandler} type="text" />
                    <button type='submit' onClick={submitForm}>Search</button>
                </form>
            </StyledNav>
        </>
    )
}


const StyledNav = styled(motion.nav)`
margin-top:50px;
overflow:hidden;
padding:9rem 5rem;
text-align: center;
background-image:url(${fondonav});
background-repeat:no-repeat;
background-size:contain;
input{
    width:30%;
    font-size:1.5rem;
    padding:0.5rem;
    border:none;
    margin-top:1rem;
    box-shadow: 0px 0px 30px rgba(0,0,0,0.4);
    color:grey;
}
button{
    font-size:1rem;
    border:none;
    padding:0.8rem 1rem;
    cursor:pointer;
    background: #ff7676;
    color:white;
    position:absolute;
    margin-top:16px;
}
`
const Logo = styled(motion.div)`
border-radius:30px;
width:100%;
text-aling:center;
display:flex;
justify-content:center;
align-items:center;
padding:1rem;
cursor:pointer;
h1{
    font-size:50px;
    color: white;
    bottom:20%;
    font-weight:1200;
}
img{
   width:2rem;
    height:2rem;
    margin-right:1rem;
}
`


export default Nav