function getHumanChoice() {
    let hChoice = prompt("Rock, Paper or Scissors?");
    let hResult = null
    hChoice = hChoice.toLowerCase()
    if (hChoice == 'rock' || hChoice == 'r' || hChoice == '0') {
        hResult = 'Rock';
    } else if (hChoice == 'paper' || hChoice == 'p' || hChoice == '1') {
        hResult = 'Paper';
    } else if (hChoice == 'scissors' || hChoice == 's' || hChoice == '2') {
        hResult = 'Scissors';
    } else {
        // randomise if invalid input
        let rand1to3 = Math.floor(Math.random() * 3);
        switch(rand1to3) {
            case 0:
                hResult = 'Rock';
                break;
            case 1:
                hResult = 'Paper';
                break;
            case 2:
                hResult = 'Scissors';
                break;
            default:
                hResult = 'Rock';
                break;
        }
    }
    return hResult;
}