import React from 'react'
import Header from './components/header/index.jsx'
import { createGlobalStyle } from 'styled-components'
import Main from './components/main/index.jsx'
import GeometriaWoff from './static/fonts/Geometria.woff'
import GeometriaTtf from './static/fonts/Geometria.ttf'
import GeometriaBoldWoff from './static/fonts/Geometria-Bold.woff'
import GeometriaBoldTtf from './static/fonts/Geometria-Bold.ttf'

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    }

    :root{
        --blue: #49C2E8;
        --red: #E25B5B;
        --green: #83C872;
        --yellow: #F7FB53;
        --black: #000;
        --orange: #EFA638;
        --white: #fff;
        --lgbt: linear-gradient(0deg, rgba(103,58,183,1) 0%, rgba(103,58,183,1) 16%, rgba(21,101,192,1) 17%, rgba(21,101,192,1) 33%, rgba(139,195,74,1) 34%, rgba(139,195,74,1) 50%, rgba(255,235,59,1) 51%, rgba(255,235,59,1) 66%, rgba(255,152,0,1) 67%, rgba(255,152,0,1) 83%, rgba(244,67,48,1) 84%, rgba(244,67,48,1) 100%);
    }

    @font-face {
        font-family: 'Geometria';
        src:
            url('${GeometriaWoff}') format('woff'),
            url('${GeometriaTtf}') format('truetype');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'Geometria';
        src: local('Geometria Bold'),
            local('Geometria-Bold'),
            url('${GeometriaBoldWoff}') format('woff'),
            url('${GeometriaBoldTtf}') format('truetype');
        font-weight: bold;
        font-style: normal;
    }

    body{
        background: var(--white);
        min-width: 375px;
    }

    #root{
        display: flex;
        flex-direction: column;
    }
`

const App = () => (
    <>
        <GlobalStyle />
        <Header/>
        <Main/>
    </>
)

export default App
