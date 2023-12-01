import { useState } from 'react'
import './App.css'
import { Anim } from './Anim'
import { Ease } from './Ease'
import Spacer from './Common/Spacer'
import { AnimDirection } from './Anim/Direction'
import { AnimFillMode } from './Anim/FilleMode'

function App() {
  return (
    <div className='root'>
      <Ease />
      <Spacer/>
      <h2>animation</h2>
      <Anim />
      <Spacer/>
      <Spacer/>
      <h2>animation-direction</h2>
      <AnimDirection />
      <Spacer></Spacer>
      <h2>animation-fill-mode</h2>
      <AnimFillMode />
    </div>
  )
}

export default App
