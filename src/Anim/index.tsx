import React from 'react'
import './index.scss'

export interface Props {

}

export function Anim() {
  return (
    <div className='anim'>
      <div className='box slideIn'>slideIn</div>
      <div className='box fadeIn'>fadeIn</div>
      <div className='box jump'>jump</div>
    </div>
  )
}
