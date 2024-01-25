import state from './state.js'
import * as el from './elements.js'
import * as timer from './timer.js' 


export function toggleRunning(){
  state.isRunning = document.documentElement.classList.toggle('running')
  timer.countDown()

}


export function reset(){
  state.isRunning = false 
  document.documentElement.classList.remove('running')
  timer.updateDisplay()
}

export function set(){
  el.minutes.setAttribute('contenteditable', true)
  el.minutes.focus()
}

export function plus(){
 let upMinutes = state.minutes += state.plus
  if(upMinutes > 60){
    return state.minutes = 60
  }
 timer.updateDisplay()
  
/*  state.isRunning = true
 let upMinutes = state.minutes += 5
 upMinutes = upMinutes > 60 ? 60 : state.minutes
timer.updateDisplay(upMinutes) */
}

export function minus(){
  let downMinutes = state.minutes -= state.minus
  if(downMinutes < 0){
    return state.minutes = 0
  }
  timer.updateDisplay()
}

