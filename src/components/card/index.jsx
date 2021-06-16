import React from "react"
import studentsStore from "../../mobxStore/studentsStore.js"
import Button from "../Button/index.jsx"
import Avatar from "../avatar/index.jsx"
import { CardContainer } from "./styled.jsx"

function Card(props) {
    return <CardContainer>
        <div className='studentCard__mainInformation'>
            <Avatar size='40' avatarURL={props.avatar} studentsName={props.name}></Avatar>
            <div className='description'>
                <p className='studentName'>{props.name}</p>
                <div>
                    <div className='favoriteColor' style={{ background: 'var(--' + props.color + ')' }} />
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.95487 3.75057C9.83473 3.3668 9.50679 3.11883 9.11942 3.11883H6.62136L5.83471 0.629359C5.71379 0.246668 5.38653 0 5.00027 0C4.99904 0 4.99777 -1.11798e-08 4.99654 2.03393e-05C4.60871 0.00160768 4.28158 0.251328 4.16318 0.636217L3.39946 3.11883H0.880602C0.492256 3.11883 0.164059 3.36764 0.044505 3.75267C-0.0750685 4.1377 0.0510471 4.5397 0.365809 4.77679L2.40383 6.3119L1.61937 8.79448C1.49796 9.17869 1.62197 9.58127 1.93528 9.82006C2.09264 9.94001 2.27326 10 2.454 10C2.6331 9.99998 2.81229 9.94104 2.96887 9.82309L5.01043 8.28535L7.02773 9.82051C7.3407 10.0587 7.74601 10.0598 8.06027 9.8235C8.37452 9.58717 8.50112 9.18596 8.38284 8.80136L7.61697 6.3119L9.63767 4.77416C9.95052 4.5361 10.075 4.13432 9.95487 3.75057Z" fill="black" />
                    </svg>
                    <p className='studentRating'>{props.rating}</p>
                </div>
            </div>
            <Button buttonType='deleteStudent' onClick={() => studentsStore.DeleteStudent(props.id)} />
        </div>
        <div className='separator' />
        <div className='studentCard__informationList'>
            <ul>
                <li className='studentAge'>{props.age}</li>
                <li>{props.specialty}</li>
                <li>{props.group}</li>
            </ul>
        </div>
    </CardContainer>
}

export default Card
