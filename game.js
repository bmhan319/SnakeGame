import { SNAKE_SPEED, update as updateSnake, draw as drawSnake }  from './snake.js'


let lastRenderTime = 0
const gameBoard = document.querySelector('#game-board')

function main(currentTime) {
  const secondSinceLastRender = (currentTime - lastRenderTime) / 1000

  window.requestAnimationFrame(main) 
  if (secondSinceLastRender < 1 / SNAKE_SPEED) return

  console.log("render")
  //console.log(currentTime)
  //console.log(lastRenderTime)
  //console.log(secondSinceLastRender)
  lastRenderTime = currentTime
  
  //Handles logic for the game
  update()

  //draws image on screen based on update
  draw()
}

window.requestAnimationFrame(main)


function update() {
  updateSnake()
}

function draw() {
  //this code is added to clear the gameboard before running the drawSnake function so that the tail graphics are removed everytime the snake moves
  gameBoard.innerHTML = ''
  drawSnake(gameBoard)
}