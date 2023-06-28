// Author: Mateen Dayshin Andan
// Description: Number guessing game
// This was done after watching "JavaScript Crash Course - Tutorial for Complete Beginners" (link: https://www.youtube.com/watch?v=XIOLqoPHCJ4)

//user input
const prompt = require('prompt-sync')({ sigint: true });

//setting maximum number and minimum number
const minNumber = 0;
const maxNumber = 15;

//generating the random number
const randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1));
//math.floor rounds up to the nearest integer
//math.random generates a random decimal number between 0 and 1
//math.random * (maxNumber - minNumber + 1) generates a random decimal number between 0 and 15

//setting the number of guesses
const numberOfGuesses = 3;
let guessCount = 0;
while (guessCount < numberOfGuesses) {
    //user input
    const guess = Number(prompt('Guess a number between 0 and 15 (You have 3 guesses): '));

    // using switches to check if the guess is correct
    switch (true) {
        case guess === randomNumber:
            console.log('You got it! The number was ' + randomNumber + '.');
            console.log('It took you ' + (guessCount + 1) + ' guesses.');
            guessCount = numberOfGuesses;
            break;
        case guess > randomNumber:
            console.log('Your guess is too high!');
            break;
        case guess < randomNumber:
            console.log('Your guess is too low!');
            break;
        default:
            console.log('Please enter a number between 0 and 15.');
            break;
    }
    guessCount++;
}

//if the user runs out of guesses
if (guessCount === numberOfGuesses) {
    console.log('Game Over. \nSorry, You are out of guesses. The number was ' + randomNumber + '.');
}