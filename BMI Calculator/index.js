
function cal(){
    let weight = document.getElementById('wt').value;
    let height = document.getElementById('ht').value;
    let yourBMI =(weight/(height*height)*10000);
    let n=document.getElementById('bmi-output').value = yourBMI;
    if (isNaN(n)) {
        alert('invalid input')
        document.getElementById('bmi-output').value=""
    }
}
let btn = document.querySelector('button');
console.log(btn)
btn.addEventListener('click', cal)