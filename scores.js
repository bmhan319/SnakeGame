let score = 0
let highScore = 0

export function displayScores(scoreDiv, highScoreDiv) {
  scoreDiv.innerHTML = score
  if (sessionStorage.highScore !== undefined) {
    highScore = sessionStorage.getItem("highScore")
  } 
  highScoreDiv.innerHTML = highScore
}

export function updateScore(points) {
  score = score + points
  return score
}

export function updateHighScore() {
  if (score > highScore) {
    highScore = score
    sessionStorage.setItem("highScore", highScore)
  }
}