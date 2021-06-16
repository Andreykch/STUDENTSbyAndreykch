import { observer } from "mobx-react"
import React from "react"
import studentsStore from "../../../mobxStore/studentsStore.js"
import Avatar from "../../avatar/index.jsx"
import Button from "../../Button/index.jsx"
import { TableRowContainer } from "./styled.jsx"
import { useMediaQuery } from 'react-responsive'
import Card from "../../card/index.jsx"
import Row from "../../row/index.jsx"

function TableRow(props) {
    const isWidthScreen = useMediaQuery({ query: '(min-width: 720px)' })

    return <TableRowContainer>
        {isWidthScreen && <Row id={props.id} name={props.name} avatar={props.avatar} specialty={props.specialty} group={props.group} age={props.age} rating={props.rating} color={props.color} />}
        {!isWidthScreen && <Card id={props.id} name={props.name} avatar={props.avatar} specialty={props.specialty} group={props.group} age={props.age} rating={props.rating} color={props.color}/>}
    </TableRowContainer>
}

export default observer(TableRow)
