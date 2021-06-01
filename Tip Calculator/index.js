function calculate()
{
let bill_amount=document.getElementById('bill').value
//console.log(bill_amount)
let tip_percentage=document.getElementById('tip').value
//console.log(tip_percentage)
let amount=bill_amount/tip_percentage
let tip_amount=document.getElementById('tipamount')
let tipamt=tip_amount.value=amount;
document.getElementById('totalbil').value=parseFloat(tipamt)+parseFloat(bill_amount)
}
let btn=document.querySelector('button')
//console.log(btn)
btn.addEventListener('click',calculate)
//calculate()