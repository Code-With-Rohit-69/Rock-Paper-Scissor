let user = 0;
let computer = 0;
let userScore = document.querySelector('#user');
let compScore = document.querySelector('#computer');
let result = document.querySelector('.result p');
let color = document.querySelector('.result');
let picker = document.querySelector('.picker');

const options = [
    { choice: 'rock', image: 'rock.png' },
    { choice: 'paper', image: 'paper2.png' },
    { choice: 'scissor', image: 'scissor.png' }
];

const computerChoice = () => {
    let input = Math.floor(Math.random() * 3);
    return options[input];
}

const draw = () => {
    console.log('Match is draw.');
    result.innerText = 'Match is draw';
    color.style.backgroundColor = 'black';
}

const playGame = (userChoice) => {
    console.log("Your choice: ", userChoice);
    let comChoice = computerChoice();
    console.log("Computer Choice: ", comChoice.choice);
    if(userChoice === comChoice.choice){
        draw();
        showWinner(null);
    }
    else{
        let userWin = true;
        if(userChoice === 'rock'){
            userWin = comChoice.choice === 'paper' ? false : true;
        }
        else if(userChoice === 'paper'){
            userWin = comChoice.choice === 'scissor' ? false : true;
        }
        else{
            userWin = comChoice.choice === 'rock' ? false : true;
        }
        showWinner(userWin, comChoice);
    }
}

const choices = document.querySelectorAll('.choice');
choices.forEach((choice) => {
    choice.addEventListener('click', ()=> {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})

const showWinner = (userWin, comChoice) => {
    if (userWin === null) {
        result.innerText = 'Match is draw';
        color.style.backgroundColor = 'black';
    } else if (userWin === true) {
        user++;
        userScore.innerText = user;
        result.innerText = 'You Won';
        color.style.backgroundColor = 'green';
        console.log('You Win');
    } else {
        computer++;
        compScore.innerText = computer;
        result.innerText = 'Computer Won';
        color.style.backgroundColor = 'red';
        console.log('Computer Win');
    }
    if (comChoice !== null) {
        picker.innerHTML = `<img src="${comChoice.image}" alt="${comChoice.choice}">`;
        console.log(`${comChoice.image} choice of computer`);
    }
}