import styled from 'styled-components'

export const RowContainer = styled.div`
    padding: 12.5px;
    display: grid;
    grid-template-columns: 1fr 4fr 4fr 2fr 2fr 2fr .5fr .5fr;
    gap: 20px;
    align-items: center;

    .favoriteColor{
        width: 30px;
        height: 30px;
        border-radius: 50%;
    }
`
