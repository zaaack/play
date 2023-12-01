import React from 'react'
import { Code } from '../../Common/Code'
import './index.scss'
export interface Props {

}

export function AnimFillMode(props: Props) {
  return (
    <div className='anim-fill-mode'>
        <div className='item'>
            <Code className="label">animation-fill-mode: none;</Code>
            <div className='box ' style={{animationFillMode: 'none'}}></div>
        </div>
        <div className='item'>
            <Code className="label">animation-fill-mode: forwards;</Code>
            <div className='box ' style={{animationFillMode: 'forwards'}}></div>
        </div>
        <div className='item'>
            <Code className="label">animation-fill-mode: backwards;</Code>
            <div className='box ' style={{animationFillMode: 'backwards'}}></div>
        </div>
        <div className='item'>
            <Code className="label">animation-fill-mode: both;</Code>
            <div className='box ' style={{animationFillMode: 'both'}}></div>
        </div>
    </div>
  )
}
