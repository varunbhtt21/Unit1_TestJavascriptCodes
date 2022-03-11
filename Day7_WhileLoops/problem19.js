
// Problem 4: Print the average of even numbers from 1 to 100 (both included)


var start = 1;
var limit = 100;
var sum = 0;
var tik_tok_watch = 0;

while(start <= limit)
{
  if(start % 2==0)
  {
    sum = sum + start;
    tik_tok_watch++;
  }
  
  start++;
}

console.log("sum is",sum)

var average = sum/tik_tok_watch;
console.log("Average is",average);