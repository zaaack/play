import React, { useState } from 'react'
import { Code } from '../../Common/Code'
import './index.scss'
export interface Props {

}

export function AnimPlayState(props: Props) {
    const [isPlaying, setPlaying] = useState(false)
  return (
    <div className='anim-play-state'>
        <div className='item'>
            <Code className="label">animation-play-state: {isPlaying? 'play': 'paused'};</Code>
            <div className='box ' style={{animationPlayState: isPlaying?'running': 'paused'}}></div>
        </div>

      <button onClick={() => {
        setPlaying(s => !s)
      }}>{isPlaying? '暂停' : '开始'}</button>
    </div>
  )
}
