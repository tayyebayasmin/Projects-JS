function kilogram()
{
let input=document.getElementById('enter').value
let Meter=input/3.281 +" meter"
let n=document.getElementById('output').value=Meter
if (n=='NaN meter'|| input=='') {
    
    document.getElementById('output').value=""
    alert('invalid input')
}
}
function pound()
{

let input=document.getElementById('enter').value
let Feet=input*3.281 +" feet"
let n= document.getElementById('output').value=Feet
if (n=='NaN feet'|| input=='') {
    
    document.getElementById('output').value=""
    alert('invalid input')
}
}
let btnkg=document.getElementById('btn1')
let btnpound=document.getElementById('btn2')
btnkg.addEventListener('click',kilogram)
btnpound.addEventListener('click',pound)