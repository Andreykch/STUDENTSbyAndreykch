import styled from 'styled-components'

const buttonWidthHandler = props => {
  if (props.deleteStudent) {
    return '30px;'
  } else if (props.sortStudents) {
    return '170px;'
  } else { return '180px;' }
}

const buttonHeightHandler = props => {
  if (props.deleteStudent) {
    return '30px;'
  } else if (props.sortStudents) {
    return '35px;'
  } else { return '48px;' }
}

const buttonBorderRadiusHandler = props => {
  if (props.deleteStudent) {
    return '50%;'
  } else if (props.sortStudents) {
    return '5px;'
  } else { return '6px;' }
}

const buttonShadowHandler = props => {
  if (props.deleteStudent) {
    return '0px 0px 16.3715px rgba(0, 0, 0, 0.1);'
  } else if (props.sortStudents) {
    return 'none;'
  } else { return '0px 7px 64px rgba(0, 0, 0, 0.07);' }
}

export const ButtonContainer = styled.button`
    box-sizing: border-box;
    background: var(--white);
    border: none;
    color: var(--black);
    font-family: "Geometria", Roboto, Arial, serif;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 16px;
    cursor: pointer;
    display: flex;
    align-items: center;

    width: ${props => buttonWidthHandler(props)}
    height: ${props => buttonHeightHandler(props)}
    box-shadow: ${props => buttonShadowHandler(props)}
    border-radius: ${props => buttonBorderRadiusHandler(props)}
    padding: ${props => props.deleteStudent ? '0;' : '0 20px;'}
    justify-content: ${props => props.deleteStudent ? 'center;' : 'space-between;'}

    .sortIcon{
        transform: ${props => props.direction === -1 ? 'scale(1, 1);' : 'scale(1, -1);'}
    }


    @media screen and (max-width: 720px) {
        width: ${props => props.sortStudents ? '180px;' : props => props.deleteStudent ? '30px;' : '54px;'}

        p{
            display: none;
        }
    }

    &:focus,
    &:hover {
        background: rgba(73, 194, 232, 0.11);
    }

    &:focus p::after{
        content: '';
        bacground-image: url(../../static/searchIcon.svg);
    }
`
