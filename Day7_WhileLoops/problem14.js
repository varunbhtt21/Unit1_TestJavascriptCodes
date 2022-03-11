
var guest = 1;

while(guest <= 10)
{

  
  guest++;
  
  if(guest == 4)
  {
    console.log("Bomb Blast");
    continue;
  }

  console.log("Guest",guest);
}