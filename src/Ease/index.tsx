import React, { useState } from 'react'
import './index.scss'

export function Ease() {
    const easeFns = ['ease', 'ease-in', 'ease-out', 'ease-in-out', 'linear', 'step-start', 'step-end']
    const [start, setStart] = useState(false)
  return (
    <div className='ease'>

      {easeFns.map(f => {
        return (
          <div className={`box`} style={{transition: `width 3s ${f}`, width: start? 400:100}}>{f}</div>
        )
      })}
      <button onClick={() => {
        setStart(!start)
      }}>切换</button>
      </div>
  )
}
