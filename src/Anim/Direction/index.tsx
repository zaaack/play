import React from 'react'
import { Code } from '../../Common/Code'
import './index.scss'
export interface Props {

}

export function AnimDirection(props: Props) {
  return (
    <div className='anim-direction'>
        <div className='item'>
            <Code className="label">animation-direction: normal;</Code>
            <div className='box ' style={{animationDirection: 'normal'}}></div>
        </div>
        <div className='item'>
            <Code className="label">animation-direction: reverse;</Code>
            <div className='box ' style={{animationDirection: 'reverse'}}></div>
        </div>
        <div className='item'>
            <Code className="label">animation-direction: alternate;</Code>
            <div className='box ' style={{animationDirection: 'alternate'}}></div>
        </div>
        <div className='item'>
            <Code className="label">animation-direction: alternate-reverse;</Code>
            <div className='box ' style={{animationDirection: 'alternate-reverse'}}></div>
        </div>
    </div>
  )
}
