const words = ["chemistry", "history", "biology", "geography", "literature"];
const chosenWord = words[Math.floor(Math.random() * words.length)];
const maxAttempts = 5;


let attemptsLeft = maxAttempts;
let guessedLetters = [];
let displayWord = Array(chosenWord.length).fill("_");


const buttonPlay = () => {



alert(`Try to guess the school subject that is hidden.\nYou will only have 5 attempts to do this!\nGood luck!`)
while (attemptsLeft > 0) {
    alert(`Word: ${displayWord.join(" ")}\nAttemts left: ${attemptsLeft}\nGuessed letters: ${guessedLetters.join(", ") || "No"}`);
    
    
    let guess = prompt("Enter your letter:");
    

    if (guess === null) {
        alert("The game is over");
        break
    } 

    guess = guess.toLowerCase()

    if (!/^[a-zA-Z]$/.test(guess)) {
        alert("Invalid letter. Please try again")
    }

    if (guessedLetters.includes(guess)) {
        alert("This letter is already there, try another one");
        continue
    }

    guessedLetters.push(guess);

    if (chosenWord.includes(guess)) {
        for (let i = 0; i < chosenWord.length; i++) {

            if (chosenWord[i] === guess) {
                displayWord[i] = guess
            }
        }

    } else {
        attemptsLeft--;
        alert(` This letter "${guess}" is not in the word`)
    }


    if (displayWord.join("") === chosenWord) {
        alert(`Congratulations, the word "${chosenWord}" was correct!`)
        break
    }


    if (attemptsLeft === 0) {
        alert(`Oops! You didn't guess the word, the word was: ${chosenWord}`)
    }
    
} 


}

document.querySelector(".button").onclick = () => buttonPlay()


