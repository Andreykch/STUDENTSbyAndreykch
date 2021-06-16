import React from 'react'
import { TextLogoContainer } from './styled.jsx'

function TextLogo (params) {
  return <TextLogoContainer>
        {params.text}
        <span>{params.userName}</span>
    </TextLogoContainer>
}

export default TextLogo
