//The isNaN() function determines whether a value is an illegal number (Not-a-Number). This function returns true if the value equates to NaN. Otherwise it returns false
function kilogram()
{
let input=document.getElementById('enter').value
let kg=input/2.205 +" kg"
let n= document.getElementById('output').value=kg
if (n=='NaN kg'|| input=='') {
    
    document.getElementById('output').value=""
    alert('invalid input')
}
}
function pound()
{

let input=document.getElementById('enter').value
let pound=input*2.205 +" pound"
let n= document.getElementById('output').value=pound
if (n=='NaN pound'|| input=='') {
    alert('invalid input')
    document.getElementById('output').value=""
}
}
let btnkg=document.getElementById('btn1')
let btnpound=document.getElementById('btn2')
btnkg.addEventListener('click',kilogram)
btnpound.addEventListener('click',pound)