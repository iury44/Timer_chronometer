import {controls, cards} from './elements.js'


export function registerControls(){
    controls.addEventListener('click',(event)=>{
      console.log(event.target.dataset.action)
    })

    
}

export function registerSounds(){
  cards.addEventListener('click', (event)=>{
    console.log(event.target.dataset.action)
  })
}