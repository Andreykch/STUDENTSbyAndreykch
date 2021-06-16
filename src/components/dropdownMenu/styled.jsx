import styled from 'styled-components'

export const DropdownMenuContainer = styled.div`
    position: absolute;
    top: 48px;
    right: 0;
    width: 100%;
    height: min-content;
    background: var(--white);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    padding: 5px 0;
    z-index: 10;

    box-shadow: 0px 7px 64px rgba(0, 0, 0, 0.07);
    border-radius: 6px;

    @media screen and (max-width: 720px) {
        width: max-content;
    }
`
