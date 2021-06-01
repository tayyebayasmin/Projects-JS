var Num=Math.ceil(Math.random()*10)
console.log(Num)
var btn=document.getElementById('btn')
//console.log(btn)
var input=document.querySelector('input')
//console.log(enter)
var output=document.getElementById('p')
//output.innerHTML="jh"
//console.log(output)
btn.addEventListener('click',guess)
function guess(){

    if(input.value=="")
    {
    output.innerHTML="enter any number"
    }
    else if(input.value==Num)
    {
    output.innerHTML = "you guessed it"
    }
    else if(input.value>Num)
    {
        output.innerHTML = "Your Value is high"
    }
    else
    {
        output.innerHTML = "your value is low"
    }
}