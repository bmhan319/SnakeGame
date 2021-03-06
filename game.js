import { SNAKE_SPEED, update as updateSnake, draw as drawSnake, getSnakeHead, snakeIntersection }  from './snake.js'
import { update as updateFood, draw as drawFood } from './food.js'
import { outsideGrid } from './grid.js'
import { displayScores, updateHighScore} from './scores.js'
 

let lastRenderTime = 0
let gameOver = false
const gameBoard = document.querySelector('#game-board')
const scoreDiv = document.querySelector('.points')
const highScoreDiv = document.querySelector('.high-points')


function main(currentTime) {
  displayScores(scoreDiv, highScoreDiv)
  if (gameOver) {
    if ( confirm(`You lost!  You scored ${scoreDiv.innerHTML} points. Press OK to restart.`) ) {
      location.reload()
    } 
    return
  }

  const secondSinceLastRender = (currentTime - lastRenderTime) / 1000

  window.requestAnimationFrame(main) 
  if (secondSinceLastRender < 1 / SNAKE_SPEED) return

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
  updateFood()
  checkDeath()
  updateHighScore()
}

function draw() {
  //this code is added to clear the gameboard before running the drawSnake function so that the tail graphics are removed everytime the snake moves
  gameBoard.innerHTML = ''
  drawSnake(gameBoard)
  drawFood(gameBoard)
}

function checkDeath() {
  gameOver = outsideGrid( getSnakeHead() ) || snakeIntersection()
}

