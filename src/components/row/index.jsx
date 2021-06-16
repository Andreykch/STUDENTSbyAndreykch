/* eslint-disable react/prop-types */
import React from 'react'
import studentsStore from '../../mobxStore/studentsStore.js'
import Button from '../Button/index.jsx'
import Avatar from '../avatar/index.jsx'
import { RowContainer } from './styled.jsx'

function Row (props) {
  return <RowContainer>
        <Avatar size='40' avatarURL={props.avatar} studentsName={props.name}></Avatar>
        <p>{props.name}</p>
        <p>{props.specialty}</p>
        <p>{props.group}</p>
        <p>{props.age}</p>
        <p>{props.rating}</p>
        <div className='favoriteColor' style={{ background: 'var(--' + props.color + ')' }} />
        <Button buttonType='deleteStudent' onClick={() => studentsStore.DeleteStudent(props.id)} />
    </RowContainer>
}

export default Row
