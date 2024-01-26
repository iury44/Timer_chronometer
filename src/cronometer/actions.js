import state from './state.js'
import * as timer from './timer.js' 
import * as el from './elements.js'
import * as sounds from './sounds.js'


export function toggleRunning(){
  state.isRunning = document.documentElement.classList.toggle('running')
  timer.countDown()

    sounds.buttonPressAudio.play()
}


export function reset(){
  state.isRunning = false 
  document.documentElement.classList.remove('running')
  timer.updateDisplay()

  sounds.buttonPressAudio.play()
}

export function set(){
  el.minutes.setAttribute('contenteditable', true)
  el.seconds.contentext = '00'
  el.minutes.focus()
  sounds.buttonPressAudio.play()
}

export function plus(){
 let upMinutes = state.minutes += state.plus
  if(upMinutes > 60){
    return state.minutes = 60
  }
  timer.updateDisplay()
  sounds.buttonPressAudio.play()
}

export function minus(){
  let downMinutes = state.minutes -= state.minus
  if(downMinutes < 0){
    return state.minutes = 0
  }
  timer.updateDisplay()
  sounds.buttonPressAudio.play()
}

export function toggleMusic(){
    
}