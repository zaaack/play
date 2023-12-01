import { useState } from 'react'
import './App.css'
import { Anim } from './Anim'
import { Ease } from './Ease'
import Spacer from './Common/Spacer'
import { AnimDirection } from './Anim/Direction'
import { AnimFillMode } from './Anim/FilleMode'
import { AnimIterationCount } from './Anim/IterationCount'
import { AnimPlayState } from './Anim/PlayState'

function App() {
  return (
    <div className="root">
      <Ease />
      <Spacer />
      <h2>animation</h2>
      <Anim />
      <Spacer />
      <Spacer />
      <h2>animation-direction</h2>
      <AnimDirection />
      <Spacer/>
      <h2>animation-fill-mode</h2>
      <AnimFillMode />
      <Spacer/>
      <h2>animation-iteration-count</h2>
      <AnimIterationCount />
      <Spacer />
      <h2>animation-play-state</h2>
    <AnimPlayState />
    </div>
  )
}

export default App
