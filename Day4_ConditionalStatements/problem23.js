// Problem 4: given stored username and password and input username and password, Print if the user can login or not.

var stored_user = "varunbhatt@gmail.com";
var stored_password = "123456";

var input_user = "varunbhatt@gmail.com";
var input_password = "123";


if(input_user == stored_user)
{
  if(input_password == stored_password)
  {
    console.log("Login success");
  }
  else
  {
    console.log("Wrong Password");
  }
}
else
{
  console.log("Wrong Email");
}