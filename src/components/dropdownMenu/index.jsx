import { observer } from 'mobx-react'
import React from 'react'
import { DropdownMenuContainer } from './styled.jsx'
import sortMenuStore from '../../mobxStore/sortMenuStore.js'
import Button from '../Button/index.jsx'
import studentsStore from '../../mobxStore/studentsStore.js'

function DropdownMenu (props) {
  if (sortMenuStore.isOpen) {
    return <DropdownMenuContainer>
            {props.buttonsParam.map(params => <Button sortStudents onClick={() => { studentsStore.Sort(params.action); sortMenuStore.ChangeState(); sortMenuStore.UpdateMenuButtonContent(params.name, params.action) }} key={params.key}> {params.name} </Button>)}
        </DropdownMenuContainer>
  }
  return <></>
}

export default observer(DropdownMenu)
