import styled from "styled-components";

export const TableContainer = styled.section`
    width: 100%;
    margin: 24px 0;

    article{
        display: flex;
        flex-direction: column;
        box-shadow: 0px 7px 64px rgba(0, 0, 0, 0.07);
        border-radius: 6px;
    }

    @media screen and (max-width: 720px) {
         article{
            gap: 10px;
            box-shadow: none;
         }
    }
`
