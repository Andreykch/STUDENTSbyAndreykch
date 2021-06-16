import React from 'react'
import studentsStore from '../../mobxStore/studentsStore.js'
import { SearchBarContainer } from './styled.jsx'

function SearchBar () {
  const inputRef = React.createRef()

  return <SearchBarContainer>
        <div className='searchIcon'>
            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.3163 17.3087C18.5946 17.5869 18.5946 18.0381 18.3163 18.3163C18.0381 18.5946 17.5869 18.5946 17.3087 18.3163L13.8887 14.8963C13.6104 14.6181 13.6104 14.1669 13.8887 13.8887C14.1669 13.6104 14.6181 13.6104 14.8963 13.8887L18.3163 17.3087ZM7.5525 15.105C3.38137 15.105 0 11.7236 0 7.5525C0 3.38137 3.38137 0 7.5525 0C11.7236 0 15.105 3.38137 15.105 7.5525C15.105 11.7236 11.7236 15.105 7.5525 15.105ZM7.5525 13.68C10.9366 13.68 13.68 10.9366 13.68 7.5525C13.68 4.16838 10.9366 1.425 7.5525 1.425C4.16838 1.425 1.425 4.16838 1.425 7.5525C1.425 10.9366 4.16838 13.68 7.5525 13.68ZM4.0375 6.9825C4.0375 7.24483 3.82484 7.4575 3.5625 7.4575C3.30016 7.4575 3.0875 7.24483 3.0875 6.9825C3.0875 4.83135 4.83135 3.0875 6.9825 3.0875C7.24483 3.0875 7.4575 3.30016 7.4575 3.5625C7.4575 3.82484 7.24483 4.0375 6.9825 4.0375C5.35602 4.0375 4.0375 5.35602 4.0375 6.9825Z" fill="black" />
            </svg>
        </div>
        <input placeholder='Поиск по имени' aria-label='Поиск среди студентов по имени' ref={inputRef} onInput={() => studentsStore.SearchByName(inputRef)}></input>
    </SearchBarContainer>
}

export default SearchBar
