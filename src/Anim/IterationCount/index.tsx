import React from 'react'
import { Code } from '../../Common/Code'
import './index.scss'
export interface Props {

}

export function AnimIterationCount(props: Props) {
  return (
    <div className='anim-iteration-count'>
        <div className='item'>
            <Code className="label">animation-iterate-count: 0;</Code>
            <div className='box ' style={{animationIterationCount: 0}}></div>
        </div>
        <div className='item'>
            <Code className="label">animation-iterate-count: 1.5;</Code>
            <div className='box ' style={{animationIterationCount: 1.5}}></div>
        </div>
        <div className='item'>
            <Code className="label">animation-iterate-count: 2;</Code>
            <div className='box ' style={{animationIterationCount: 2}}></div>
        </div>
        <div className='item'>
            <Code className="label">animation-iterate-count: infinite;</Code>
            <div className='box ' style={{animationIterationCount: 'infinite'}}></div>
        </div>
    </div>
  )
}
