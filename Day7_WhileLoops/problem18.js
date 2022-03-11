// Problem 3: Print the sum of all the multiples of 3 from 0 to the given limit

var start = 0;
var limit = 20;
var sum = 0;

while(start <= limit)
{
  if(start % 3==0)
  {
    sum = sum + start;
  }
  
  start++;
}

console.log("sum is",sum)