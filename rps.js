let rounds=0;
let victory=0;
let lost=0;
let tie =0;

function computerPlay () 
{
     let randomchoice = Math.floor(Math.random()*3);
     if (randomchoice === 0) 
     {
         return "rock"
     }
     
     if (randomchoice === 1) 
     {
         return "scissors"
     }
     
     if (randomchoice === 2) 
     {
         return "paper"
     }
}



function   playerSelection(choice)
{
    let lowcasechoice= choice.toLowerCase();
    if (lowcasechoice === "rock")
    {
        return lowcasechoice;

    } else if (lowcasechoice=== "paper")
    {
        return lowcasechoice;

    } else if (lowcasechoice==="scissors") 
    {
        return lowcasechoice;
    } else 
    {
        playerSelection(prompt("Invalid choice : insert your choice again"))
        
    }

}
       
function singleRound(computerSelection , playerSelection)
{
    if (computerSelection === "scissors" && playerSelection === "rock" )
    {
        return ("You won " + playerSelection + " beats " +computerSelection);
       

    } else if (computerSelection === "scissors" && playerSelection === "paper" )
    {
       
        return ("You lost " + computerSelection + " beats " +playerSelection);
       

    } else if (computerSelection === "paper" && playerSelection === "scissors" )
    {
        return ("You won " + playerSelection + " beats " +computerSelection);

    } else if (computerSelection === "paper" && playerSelection === "rock" )
    {
        return ("You lost " + computerSelection + " beats " +playerSelection);

    } else if (computerSelection === "rock" && playerSelection === "paper" )
    {
        return ("You won " + playerSelection + " beats " +computerSelection);

    } else if (computerSelection === "rock" && playerSelection === "scissors" )
    {
        return ("You lost " + computerSelection + " beats " +playerSelection);

    } else if (computerSelection === playerSelection) 
    {
        return "It's a tie"
    }
}


function game(chosenButton) 
{
    while (results.querySelector('p')!== null) 
    {
        results.removeChild(results.querySelector('p'))
    }   
    rounds++;
    const resultround= document.createElement('p')
    resultround.textContent= singleRound(computerPlay(),playerSelection(chosenButton.textContent))
    results.appendChild(resultround);
    if (resultround.textContent.includes("won"))
    {
        victory++;
    } else if (resultround.textContent.includes("lost"))
    {
        lost++;
    } else 
    {
        tie++;
    }
        
    if (rounds=== 5)
    {
        rounds=0;
    if (victory>lost)
    {
        const resultgame= document.createElement('p')
        resultgame.textContent= "You won the game,congratulations!  You won " + victory + " rounds over 5 rounds"
        results.appendChild(resultgame);
        victory=0;
        lost=0;
        tie=0;
        return
    } else  if (victory<lost)
    {
        const resultgame= document.createElement('p')
        resultgame.textContent= "You lost the game: You lost " + (lost)+ " rounds over 5 rounds"
        results.appendChild(resultgame);
        victory=0;
        lost=0;
        tie=0;
        return
        
    } else {
        const resultgame= document.createElement('p')
        resultgame.textContent= "You tied the game!"
        results.appendChild(resultgame);
        victory=0;
        lost=0;
        tie=0;
        return
    }
    }
}


const buttons= document.querySelectorAll('button')
const results = document.querySelector('.results')

buttons.forEach(element => {element.addEventListener('click',() => { game(element)})});