import { createGlobalStyle } from 'styled-components'
// import styled from 'styled-components/macro'

const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }    

    body {
        background-color: #111111;
        color: #222;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-overflow-scrolling: auto;
        font-family: "Inter", sans-serif;
    }

    h1 {
        font-size: 2em;
        font-weight: 400;

        @media screen and (max-width: 991px) {
            font-size: 0.95em;
            margin-top: -1em;
        }
    }

    h2 {
        font-weight: 500;
        @media screen and (max-width: 991px) {
            font-size: 1.1em;
        }
    }

    h5 {
        font-size: 1.1em;
        font-weight: 500;

        @media screen and (max-width: 991px) {
            font-size: 0.9em;
        }
    }

    @keyframes appear {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
`

export default GlobalStyle;