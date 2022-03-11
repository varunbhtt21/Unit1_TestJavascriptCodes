// Marriage Problem

// Males ----> 21
// Females ----> 18

var gender = "female";
var age = 18;

if(gender == "male")
{
   if(age >= 21)
   {
     console.log("Male : Can Marry");
   }
   else
   {
     console.log("Male : Can't Marry");
   }
}

else if(gender == "female")
{
  if(age >= 18)
  {
    console.log("Female : Can Marry");
  }
  else
  {
    console.log("Female : Can't Marry");
  }
}

else
{
  console.log("Wrong Input");
}
