function computerPlay () 
{
     let rock = Math.floor(Math.random()*2);
     if (rock === 1) 
     {
         return "rock"
     }
     let scissors = Math.floor(Math.random()*2);
     if (scissors === 1) 
     {
         return "scissors"
     }
     let paper = Math.floor(Math.random()*2);
     if (paper === 1) 
     {
         return "paper"
     }
}