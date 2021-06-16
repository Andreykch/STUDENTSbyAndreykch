import styled from 'styled-components'

export const CardContainer = styled.div`
    grid-template-columns: 1fr;
    grid-template-rows: min-content 1fr;
    border-radius: 6px;
    box-shadow: 0px 7px 64px rgba(0, 0, 0, 0.07);
    z-index: 10;

    .separator{
        width: 100%;
        height: 0;
        opacity: 0.05;
        border: 1px solid var(--black);
    }

    .studentCard__mainInformation{
        padding: 16px 16px 14px 16px;
        display: grid;
        grid-template-columns: min-content 1fr min-content;
        gap: 21px;
    }

    .favoriteColor{
        width: 12px;
        height: 12px;
        border-radius: 50%;
    }

    .description{
        display: flex;
        flex-direction: column;
    }

    .description>div{
        display: flex;
        flex-direction: row;
        gap: 13px;
        align-items: center;
    }

    .studentCard__informationList{
        padding: 16px 16px 16px 77px;
    }

    .studentCard__informationList ul{
        padding-left: 20px;
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

    .studentAge::after{
        margin-left: 1ex;
        content: 'лет';
    }

    .studentCard__informationList li::marker{
        color: var(--blue);
    }
`
