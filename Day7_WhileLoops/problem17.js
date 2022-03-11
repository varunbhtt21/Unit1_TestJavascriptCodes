
// Problem 2: Print the odd numbers from 0 till the given limit

var start = 0;
var limit = 50;

while(start <= limit)
{

  if(start % 2 == 0)
  {
    console.log("even",start);
  }
  else
  {
    console.log("odd",start);
  }
  
  start= start+1;
}