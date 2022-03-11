
var guest = 1;

while(guest <= 10)
{

  if(guest == 4)
  {
    console.log("Bomb Blast");
    break;
  }

  console.log("Guest",guest);

  guest++;
}