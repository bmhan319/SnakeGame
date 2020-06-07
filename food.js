import { onSnake, expandSnake } from './snake.js'
import { randomGridPosition }  from './grid.js'
import { updateScore } from './scores.js'


let food = randomGridPosition()
let EXPANSION_RATE = 1
let points = 10

export function update() {
  if (onSnake(food)) {
    expandSnake(EXPANSION_RATE)
    food = getRandomFoodPosition()
    updateScore(points)
  }
}


export function draw(gameBoard) {
  const foodElement = document.createElement('div')
  foodElement.style.gridRowStart = food.y
  foodElement.style.gridColumnStart = food.x
  foodElement.classList.add('food')
  gameBoard.appendChild(foodElement)
}

function getRandomFoodPosition() {
  let newFoodPosition
  while (newFoodPosition == null || onSnake(newFoodPosition)) {
    newFoodPosition = randomGridPosition()
  }
  return newFoodPosition
}

export function increaseExpansion(segments, speed) {
  if (segments.length >= 10 && segments.length < 30) {
    EXPANSION_RATE = 2
    points = 20
    speed = 6
  } else if (segments.length >= 30 && segments.length < 60) {
    EXPANSION_RATE = 3
    points = 30
    speed = 7
  } else if (segments.length >= 60) {
    EXPANSION_RATE = 4
    points = 40
    speed = 8
  }
  return speed
}
