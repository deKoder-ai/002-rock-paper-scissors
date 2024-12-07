function playRound() {
    const human = getHumanChoice();
    const computer = getComputerChoice();
    let winner = null

    // decide winner
    if (human === 'Rock' && computer === 'Rock') {
        winner = 'It\'s a draw :/';
    } else if (human === 'Rock' && computer === 'Paper') {
        winner = 'Computer wins!! Paper beats Rock';
    } else if (human === 'Rock' && computer === 'Scissors') {
        winner = 'You win!! Rock beats Scissors';
    } else if (human === 'Paper' && computer === 'Rock') {
        winner = 'You win!! Paper beats Rock';
    } else if (human === 'Paper' && computer === 'Paper') {
        winner = 'It\'s a draw :/';
    } else if (human === 'Paper' && computer === 'Scissors') {
        winner = 'Computer wins!! Scissors beats Paper';
    } else if (human === 'Scissors' && computer === 'Rock') {
        winner = 'Computer wins!! Rock beats Scissors';
    } else if (human === 'Scissors' && computer === 'Paper') {
        winner = 'You win!! Scissors beats Paper';
    } else {
        winner = 'It\'s a draw :/';
    }

    let result = `You: ${human} | Computer: ${computer} | ${winner}`;
}