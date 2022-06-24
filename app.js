function myFunction ();
var un = document.forms["myForm"]["Uname"].value;
var pw = document.forms["myForm"]["pass"].value;

if(un=="admin" && pw=="123456")
{
  window.location.href="about.html"
}
else{
  alert("invalid username and password");
}