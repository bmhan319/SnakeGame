let inputDirection = {x: 0, y: 0}
let lastInputDirection = {x:0, y: 0}

window.addEventListener('keydown', e => {
  switch(e.key) {
    case 'ArrowUp': 
      //this is added to prevent snake from moving up/down when moving vertically and thus run into himself
      if (lastInputDirection.y !==0) break
      inputDirection = {x: 0, y: -1}
      break
    case 'ArrowDown': 
      //this is added to prevent snake from moving up/down when moving vertically and thus run into himself
      if (lastInputDirection.y !==0) break
      inputDirection = {x: 0, y: 1}
      break
    case 'ArrowLeft': 
      //this is added to prevent snake from moving left/right when moving horizontally and thus run into himself
      if (lastInputDirection.x !==0) break
      inputDirection = {x: -1, y: 0}
      break
    case 'ArrowRight': 
      //this is added to prevent snake from moving left/right when moving horizontally and thus run into himself
      if (lastInputDirection.x !==0) break
      inputDirection = {x: 1, y: 0}
      break
  }
})

export function getInputDirection() {
  lastInputDirection = inputDirection
  return inputDirection
}