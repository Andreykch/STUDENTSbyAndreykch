import React from 'react'
import SearchBar from '../searchBar/index.jsx'
import Button from '../Button/index.jsx'
import DropdownMenu from '../dropdownMenu/index.jsx'
import { SerachAndSortContainer } from './styled.jsx'
import sortMenuStore from '../../mobxStore/sortMenuStore.js'
import { observer } from 'mobx-react'

function SerachAndSort () {
  return <SerachAndSortContainer>
        <SearchBar/>
        <div className='sortMenuWrapper'>
            <Button buttonType='showMenu' contentText={sortMenuStore.buttonContent} direction={sortMenuStore.sortDirection} onClick={() => sortMenuStore.ChangeState()}/>
            <DropdownMenu buttonsParam={[{ name: 'Имя А-Я', action: 'alphabetRight', mainButtonContent: 'Имя А-Я', key: 0 },
              { name: 'Имя Я-А', action: 'alphabetReverse', key: 1 },
              { name: 'Сначала моложе', action: 'ageRight', key: 2 },
              { name: 'Сначала старше', action: 'ageReverse', key: 3 },
              { name: 'Высокий рейтинг', action: 'raitingReverse', key: 4 },
              { name: 'Низкий рейтинг', action: 'raitingtRight', key: 5 }]} />
        </div>
    </SerachAndSortContainer>
}

export default observer(SerachAndSort)
