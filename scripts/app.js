//Menus
const menuStartSection = document.getElementById("menuStartSection");
const menuOpponenetSection = document.getElementById("menuOpponenetSection");
const menuRoundSection = document.getElementById("menuRoundSection");
const menuGameplaySection = document.getElementById("menuGameplaySection");
const menuResultsSection = document.getElementById("menuResultsSection");
const menuFinalSection = document.getElementById("menuFinalSection");

//Buttons(Navigation)
const buttonStart = document.getElementById("buttonStart");
const buttonVSPlayer = document.getElementById("buttonVSPlayer");
const buttonVSComputer = document.getElementById("buttonVSComputer");
const buttonBest1 = document.getElementById("buttonBest1");
const buttonBest3 = document.getElementById("buttonBest3");
const buttonBest5 = document.getElementById("buttonBest5");
const buttonBest7 = document.getElementById("buttonBest7");
const buttonNext = document.getElementById("buttonNext");
const buttonExit = document.getElementById("buttonExit");

//Buttons (Gameplay)
const buttonRock = document.getElementById("btnRock");
const buttonPaper = document.getElementById("btnPaper");
const buttonScissors = document.getElementById("btnScissors");
const buttonLizard = document.getElementById("btnLizard");
const buttonSpock = document.getElementById("btnSpock");

//Modifiable Text
const gameplayText = document.getElementById("gameplayText");
const resultText = document.getElementById("resultText");
const detailsText = document.getElementById("detailsText");
const roundText = document.getElementById("roundText");
const finalText = document.getElementById("finalText");

//Modifiable Images
const player1Choice = document.getElementById("player1Choice");
const player2Choice = document.getElementById("player2Choice");



const rules = {
    //selection: [wins against what?]
      rock: ['scissors', 'lizard'],
      paper: ['rock', 'spock'],
      scissors: ['paper', 'lizard'],
      lizard: ['spock', 'paper'],
      spock: ['scissors', 'rock']
};

let roundsTotal = 1;
let roundsCurrent = 0;
let computerPlayer = false;
let player1Option = "";
let player2Option = "";
let player1Points = 0;
let player2Points = 0;
let playerTurn = 0;


//Move to opponenet selection
buttonStart.addEventListener('click', function()
{
    document.title = "RPSLS - Who Will Play?";
    menuStartSection.style.display = "none";
    menuOpponenetSection.style.display = "block";
})



//Move to Round section

//Disable CPU API functionality
buttonVSPlayer.addEventListener('click', function()
{
    document.title = "RPSLS - Rounds To Play?";
    computerPlayer = false;
    menuOpponenetSection.style.display = "none";
    menuRoundSection.style.display = "block";
})

//Enable CPU API functionality
buttonVSComputer.addEventListener('click', function()
{
    document.title = "RPSLS - Rounds To Play?";
    computerPlayer = true;
    menuOpponenetSection.style.display = "none";
    menuRoundSection.style.display = "block";
})




//Move to Gameplay Section
buttonBest1.addEventListener('click', function()
{
    roundsTotal = 1;
    roundsCurrent = 0;
    playerTurn = 0;
    GameRefresh();
});

buttonBest3.addEventListener('click', function()
{
    roundsTotal = 3;
    roundsCurrent = 0;
    playerTurn = 0;
    GameRefresh();
});

buttonBest5.addEventListener('click', function()
{
    roundsTotal = 5;
    roundsCurrent = 0;
    playerTurn = 0;
    GameRefresh();
});

buttonBest7.addEventListener('click', function()
{
    roundsTotal = 7;
    roundsCurrent = 0;
    playerTurn = 0;
    GameRefresh();
});

async function GameRefresh()
{
    menuRoundSection.style.display = "none";
    menuResultsSection.style.display = "none";
    //Next Round
    if (playerTurn == 0)
    {
        roundsCurrent++;
    }

    if (roundsCurrent > roundsTotal)
    {
        menuFinalSection.style.display = "block";
        if (roundsTotal == 1)
        {
            finalText.innerText = "This game's winner is: "
        } else {
            finalText.innerText = "After " + roundsTotal + " rounds, the winner is: "
        }

        if (player1Points > player2Points)
        {
            finalText.innerText += " Player 1!";
        } else if (player2Points > player1Points){
            if (computerPlayer == true)
            {
                finalText.innerText += " CPU Player!";
            } else {
                finalText.innerText += " Player 2!";
            }
        } else {
            finalText.innerText += "An error handling message? How did they win?!"
        }
        console.log("GAME END");
    } else {
        menuGameplaySection.style.display = "block";
        console.log('Round: ', roundsCurrent);
        
        //Gameaplay Text displays rounds
        if (roundsTotal == 1)
        {
            document.title = "RPSLS";
            gameplayText.innerText = "LET'S GO!";
        } else {
            document.title = "RPSLS - Round " + roundsCurrent;
            gameplayText.innerText = "Round " + roundsCurrent;
        }

        console.log(computerPlayer);
        playerTurn++;
        if (computerPlayer == true)
            { 
                player2Option = await CpuChoice();
                detailsText.innerText = "Select your play!";
            } else {
                detailsText.innerText = "Player " + playerTurn + ", select your play!";
            }
        console.log("playerTurn", playerTurn);
    }
}




//Gameplay stuff
async function CpuChoice()
{
    const response = await fetch(`https://rockpaperscissorslizardspock-akezg8fkdyewb4g7.canadacentral-01.azurewebsites.net/rpsls/cpurandom/`);
    const data = await response.text();
    return data;
}

buttonRock.addEventListener('click', function()
{
    console.log("Player picks rock.");
    if (playerTurn == 1)
        {
            player1Option = "rock";
        } else {
            player2Option = "rock";
        }
    if (playerTurn >= 2 || computerPlayer == true)
        {
            DetermineWinner();
        } else {
            GameRefresh();
        }
});

buttonPaper.addEventListener('click', function()
{
    console.log("Player picks paper.");
    if (playerTurn == 1)
        {
            player1Option = "paper";
        } else {
            player2Option = "paper";
        }
    if (playerTurn >= 2 || computerPlayer == true)
        {
            DetermineWinner();
        } else {
            GameRefresh();
        }
});

buttonScissors.addEventListener('click', function()
{
    console.log("Player picks scissors.");
    if (playerTurn == 1)
        {
            player1Option = "scissors";
        } else {
            player2Option = "scissors";
        }
    if (playerTurn >= 2 || computerPlayer == true)
        {
            DetermineWinner();
        } else {
            GameRefresh();
        }
});

buttonLizard.addEventListener('click', function()
{
    console.log("Player picks lizard.");
    if (playerTurn == 1)
        {
            player1Option = "lizard";
        } else {
            player2Option = "lizard";
        }
    if (playerTurn >= 2 || computerPlayer == true)
        {
            DetermineWinner();
        } else {
            GameRefresh();
        }
});

buttonSpock.addEventListener('click', function()
{
    console.log("Player picks spock.");
    if (playerTurn == 1)
        {
            player1Option = "spock";
        } else {
            player2Option = "spock";
        }
    if (playerTurn >= 2 || computerPlayer == true)
        {
            DetermineWinner();
        } else {
            GameRefresh();
        }
});

async function DetermineWinner()
{
    playerTurn = 0;
    menuGameplaySection.style.display = "none";
    menuResultsSection.style.display = "block";
    resultText.innerText = "Round " + roundsCurrent + " Result...";


    if (rules[player1Option].includes(player2Option))
    {
        player1Points++;
        roundText.innerText = "Looks like " + player1Option + " beats " + player2Option + "! Player 1 wins" + ( (roundsCurrent < roundsTotal) ? " round " + roundsCurrent + "." : (roundsTotal != 1) ? " the final round!" : "!" );
        player1Choice.innerHTML = `<img src="../assets/images/${player1Option}.png" alt="${player1Option}Icon">`;
        player2Choice.innerHTML = `<img src="../assets/images/${player2Option}.png" alt="${player2Option}Icon" style="opacity: 50%;">`;
    } else if (rules[player2Option].includes(player1Option))
        {
            player2Points++;
            roundText.innerText = "It appears that " + player2Option + " beats " + player1Option + "! Player 2 wins" + ( (roundsCurrent < roundsTotal) ? " round " + roundsCurrent + ".": (roundsTotal != 1) ? " the final round!" : "!" );
            player1Choice.innerHTML = `<img src="../assets/images/${player1Option}.png" alt="${player1Option}Icon" style="opacity: 50%;">`;
            player2Choice.innerHTML = `<img src="../assets/images/${player2Option}.png" alt="${player2Option}Icon">`;
        } else {
            roundsCurrent--;
            player1Choice.innerHTML = `<img src="../assets/images/${player1Option}.png" alt="${player1Option}Icon" style="opacity: 50%;">`;
            player2Choice.innerHTML = `<img src="../assets/images/${player2Option}.png" alt="${player2Option}Icon" style="opacity: 50%;">`;
            roundText.innerText = "Looks like it's a tie, let's go again!";
        }
}

buttonNext.addEventListener('click', function()
{
    GameRefresh();
})

buttonExit.addEventListener('click', function()
{
    menuFinalSection.style.display = "none";
    menuStartSection.style.display = "block";
})