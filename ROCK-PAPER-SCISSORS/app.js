const computerChoiseDisplay = document.getElementById('computer-choise')
const userChoiseDisplay = document.getElementById('user-choise')
const resultDisplay = document.getElementById('result')
const possibleChoises = document.querySelectorAll('button')
let userChoise
let computerChoise
let result

possibleChoises.forEach(possibleChoise => possibleChoise.addEventListener('click', (e) => {
   userChoise = e.target.id 
   userChoiseDisplay.innerHTML = userChoise
   generateComputerChoise()
   getResult()
}))

function generateComputerChoise() {
    const randomNumber = Math.floor(Math.random() * possibleChoises.length) + 1 //3
    console.log(randomNumber)

    if (randomNumber === 1){
    computerChoise = 'rock'
    }
    if (randomNumber === 2){
    computerChoise = 'scissors'
    }
    if (randomNumber === 3){
    computerChoise = 'paper'
    }
    computerChoiseDisplay.innerHTML = computerChoise
    }
    function getResult() {
    if (computerChoise === userChoise) {
        result = 'Its a draw!'
    }
    if (computerChoise === 'rock' && userChoise === 'paper') {
        result = 'You win!'
    }
    if (computerChoise === 'rock' && userChoise === 'scissors') {
        result = 'You lost!'
    }
    if (computerChoise === 'paper' && userChoise === 'scissors') {
        result = 'You win!'
    }
    if (computerChoise === 'paper' && userChoise === 'rock') {
        result = 'You lose!'
    }
    if (computerChoise === 'scissors' && userChoise === 'rock') {
        result = 'You win!'
    }
    if (computerChoise === 'scissors' && userChoise === 'paper') {
        result = 'You lose!'
    }
    resultDisplay.innerHTML = result
}