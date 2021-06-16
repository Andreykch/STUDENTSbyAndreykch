/* eslint-disable react/prop-types */
import React from 'react'
import { AvatarContainer } from './styled.jsx'

function Avatar (props) {
  return <AvatarContainer>
        <svg role="none" aria-label={'avatar of ' + props.studentsName} style={{ height: props.size + 'px', width: props.size + 'px' }}>
            <defs>
                <mask id="crop">
                    <circle cx={props.size / 2} cy={props.size / 2} fill="white" r={props.size / 2} />
                </mask>
            </defs>
            <g mask='url(#crop)'>
                <image x="0" y="0" height="100%" preserveAspectRatio="xMidYMid slice" width="100%"
                    xlinkHref={props.avatarURL} style={{ height: props.size + 'px', width: props.size + 'px' }} />
                <circle className="avatar__border" cx={props.size / 2} cy={props.size / 2} r={props.size / 2} />
            </g>
        </svg>
    </AvatarContainer>
}

export default Avatar
