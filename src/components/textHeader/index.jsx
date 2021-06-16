import React from "react"
import { TextHeaderContainer } from "./styled.jsx"

function TextHeader(params) {
    return <TextHeaderContainer>
        {params.header}
    </TextHeaderContainer>
}

export default TextHeader
