import React from "react"
import SerachAndSort from "../serachAndSortWrapper/index.jsx"
import Table from "../table/index.jsx"
import TextHeader from "../textHeader/index.jsx"
import { MainContainer } from "./styled.jsx"

function Main() {
    return <MainContainer>
        <TextHeader header="Студенты"/>
        <SerachAndSort/>
        <Table/>
    </MainContainer>
}

export default Main
