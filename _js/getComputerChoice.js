function getComputerChoice() {
    let choice = null
    let rand1to3 = Math.floor(Math.random() * 3);
    switch(rand1to3) {
        case 0:
            choice = 'Rock';
            break;
        case 1:
            choice = 'Paper';
            break;
        case 2:
            choice = 'Scissors';
            break;
        default:
            choice = 'Rock';
            break;
      }
    return choice;
}