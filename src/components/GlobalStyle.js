import { createGlobalStyle } from "styled-components";
import fondogames from '../img/fondogames.png'

const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing: border-box;
}
body{
    background-color: #1E1E1E;
    overflow-x:hidden;
}

html{
    &::webkit-scrollbar{
        width:0.5rem;
    }
    &::webkit-scrollbar-thumb{
        background-color:darkgrey;
    }
    &::webkit-scrollbar-track{
        background:white;
    }
}
{
    body:width:100%;
}
h2{
    text-decoration:none;
    text-style:none;
}
a{
    text-decoration: none;
    color: #333;
}
.gameIMG{
    margin-top:1%;
    width: 100%;
    height: 40vh;
    object-fit: cover;
    border-radius: 0px 0px 20px 20px;
}
.gameh2{
    color:white;
}
`

export default GlobalStyle;