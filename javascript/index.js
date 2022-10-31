
function ValidateEmail()
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(emailvalue.value.match(mailformat))
{
alert("successful !");
return true;
}else{
alert("You have entered an invalid email address!");
return false;
}
}

function ValidateEmail2()
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(form2Example1.value.match(mailformat))
{
alert("successful !");
return true;
}else{
alert("You have entered an invalid email address!");
return false;
}
}

function cartshow() {
  let d=document.getElementById("cart");
  d.style.display="block"  
}
function loginshow() {
    let d=document.getElementById("login");
    d.style.display="block"  
  }

function closebtn(){
    let d=document.getElementById("cart");
    d.style.display="none" 
}
function closebtn1(){
    let d=document.getElementById("login");
    d.style.display="none" 
}
function itemlist(){
  document.getElementById("items").style.display="block"
}
function closebtn2(){
    let d=document.getElementById("items");
    d.style.display="none" 
}

function addcart(){

  document.getElementById("ratedtail").innerHTML=document.getElementById("rate1").innerHTML
  document.getElementById("imgsrc").src=document.getElementById("image1").src
  
}

