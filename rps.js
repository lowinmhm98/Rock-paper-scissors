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


function game() 
{
    let victory =0;
    for (let i = 0; i < 5; i++) 
    {
      let resultround=  singleRound(computerPlay() , playerSelection(prompt("Insert your choice")));
      console.log(resultround);
      if (resultround.includes("won"))
      {
          victory++;
      }
        
    }
     if (victory>=2)
     {
         console.log("You won the game,congratularions")
         return
     } else 
     {
         console.log("You lost the game");   
     }
}