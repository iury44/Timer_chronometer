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
  //el.seconds.contentext = '00'
  el.minutes.focus()
  sounds.buttonPressAudio.play()
}

export function plus(){
  let minutes = Number(el.minutes.textContent);
  console.log(minutes);
  minutes += 5;

  if (minutes > 60) {
    minutes = 60; // Limite máximo de 60 minutos
  }

  state.minutes = minutes;
  timer.updateDisplay();
  sounds.buttonPressAudio.play();
}

export function minus(){
  let minutes = Number(el.minutes.textContent)
  
  if(minutes >= 5){
    minutes -= 5
  }
  state.minutes = minutes 
  timer.updateDisplay()
  sounds.buttonPressAudio.play()
}



export function toggleMusic(action) {
 
  let currentAudio = null
  const selectedSound = sounds.sounds[action];

  if (!selectedSound) {
    console.error(`Sound not found for action: ${action}`);
    return;
  }

  if (currentAudio && currentAudio !== selectedSound) {
    // Se houver um áudio em execução diferente do selecionado, pausa
    currentAudio.pause();
  }

  if (selectedSound.paused) {
    // Se o áudio selecionado estiver pausado, inicia
    selectedSound.play();
  } else {
    // Se o áudio selecionado não estiver pausado, pausa
    selectedSound.pause();
  }

  currentAudio = selectedSound;
  
}

