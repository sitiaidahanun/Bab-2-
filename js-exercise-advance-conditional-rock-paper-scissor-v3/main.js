function rockPaperScissor(player1, player2) {
  if (player1 === player2) {
    return 'Draw!';
  }

  if (
    (player1 === 'rock' && player2 === 'scissor') ||
    (player1 === 'paper' && player2 === 'rock') ||
    (player1 === 'scissor' && player2 === 'paper')
  ) {
    return 'Player 1 Won!';
  } else {
    return 'Player 2 Won!';
  }
}

// Contoh penggunaan
console.log(rockPaperScissor('rock', 'rock')); // Draw!
console.log(rockPaperScissor('paper', 'rock')); // Player 1 Won!
console.log(rockPaperScissor('scissor', 'rock')); // Player 2 Won!

module.exports = rockPaperScissor;
