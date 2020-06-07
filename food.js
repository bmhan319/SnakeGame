import { onSnake, expandSnake } from './snake.js'
import { randomGridPosition }  from './grid.js'
import { updateScore } from './scores.js'


let food = randomGridPosition()
const EXPANSION_RATE = 1
const points = 10

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