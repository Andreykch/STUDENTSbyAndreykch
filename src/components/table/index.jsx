import { toJS } from "mobx";
import { observer } from "mobx-react"
import React, { useEffect } from "react"
import studentsStore from "../../mobxStore/studentsStore.js";
import { TableContainer } from "./styled.jsx"
import TableHead from "./tableHead/index.jsx"
import TableRow from "./tableRow/index.jsx"
import { useMediaQuery } from 'react-responsive'

function getFullSpeciality(specialty) {
    switch (specialty) {
        case ('kb'): return 'Компьютерная безопасность'
        case ('mt'): return 'Механика и математика'
        case ('kn'): return 'Компьютерные науки'
        case ('ft'): return 'Фундаментальная информатика'
    }
}



function Table() {
    const isWidthScreen = useMediaQuery({ query: '(min-width: 720px)' })

    useEffect(() => {
        fetch('https://front-assignment-api.2tapp.cc/api/persons')
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                console.log('Request successful', data);
                studentsStore.Set(data.students)
            })
            .catch(function (error) {
                console.log('Request failed', error)
            });
    }, []
    )

    return <TableContainer>
        {isWidthScreen && <TableHead/>}
        <article>
            {studentsStore.displyedStudents.map((student) => <TableRow key={student.id} id={student.id} name={student.name} specialty={getFullSpeciality(student.specialty)} group={student.group.toUpperCase()} color={student.color} rating={student.rating} age={student.age} avatar={student.avatar} />)}
        </article>
    </TableContainer>
}

export default observer(Table)
