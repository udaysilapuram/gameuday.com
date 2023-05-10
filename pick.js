let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");
let randomnumber = Math.ceil(Math.random() * 100);
console.log(randomnumber)

function checkGuess() {
    let gussednumber = parseInt(userInput.value);

    if (gussednumber > randomnumber) {
        gameResult.textContent = "Too high try again";
        gameResult.style.backgroundColor = "#1e217c";
    } else if (gussednumber < randomnumber) {
        gameResult.textContent = "Too low try again";
        gameResult.style.backgroundColor = "#1e217c";
    } else if (gussednumber === randomnumber)

    {
        gameResult.textContent = "congralations it equal WIN ";
        gameResult.style.backgroundColor = "#1e217c";
    }
    else
    {
    gameResult.textContent = "please provide a valid input";
    gameResult.style.backgroundColor = "red";
    
    }
    
}