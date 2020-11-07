function Calculate()
{
 let h=document.getElementById('h').value;
 if(h>0 && h<=180){

if(h<=30)
{

document.getElementById("result").innerHTML=Number(h)*7.85;

}
else if(h<=60)
{
var result=235.50+(Number(h)-30)*7.85;
document.getElementById("result").innerHTML=result;

}
else if(h<=90)
{
var result=471+(Number(h)-60)*10;
document.getElementById("result").innerHTML=result;

}
else if(h<=120)
{
var result=771+(Number(h)-90)*27.75;
document.getElementById("result").innerHTML=result;

}
else
{


document.getElementById("result").innerHTML=1603.50+(Number(h)-120)*32+480;

}
}
else
{
document.getElementById("error").innerHTML="Enter the number between 1-180";

}

}