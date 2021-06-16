import styled from 'styled-components'

export const SearchBarContainer = styled.div`
    position: relative;

    input{
        height: 48px;
        width: 100%;
        box-sizing: border-box;
        padding 0 55px;
        box-shadow: 0px 7px 64px rgba(0, 0, 0, 0.07);
        border: none;
        border-radius: 6px;
        color: var(--black);
        font-family: "Geometria", Roboto, Arial, serif;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 20px;
    }

    input::placeholder{
        opacity: .3;
    }

    .searchIcon{
        position: absolute;
        top: 15px;
        left: 20px;
    }
`
