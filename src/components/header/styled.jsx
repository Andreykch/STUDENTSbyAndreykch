import styled from "styled-components";

export const HeaderContainer = styled.header`
    background: var(--white);
    box-shadow: 0px 7px 64px rgba(0, 0, 0, 0.07);

    .headerContent{
        box-sizing: border-box;
        width: 1180px;
        margin: auto;
        padding: 22px 0;
        display: grid;
        grid-template-columns: min-content max-content;
        gap: 45px;
    }

    @media screen and (max-width: 1180px) {
        .headerContent {
            width: 100%;
            padding: 22px 30px;
            gap: 25px;
        }
    }
`
