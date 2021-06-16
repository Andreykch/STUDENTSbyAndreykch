import React from "react"
import Logo from "../logo/index.jsx"
import TextLogo from "../textLogo/index.jsx"
import { HeaderContainer } from "./styled.jsx"

function Header() {
    return <HeaderContainer>
        <div className='headerContent'>
            <Logo />
            <TextLogo text='STUDENTS by ' userName='Andreykch' />
        </div>
    </HeaderContainer>
}

export default Header
