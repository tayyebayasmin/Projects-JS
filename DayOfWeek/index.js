var a=document.getElementById('first')
console.log(a)
var d=new Date()
console.log(date)
var day=d.getDay()
var date=d.toLocaleDateString()
var b=document.getElementById('second')
b.innerText=date
if(day==0)
{
a.innerText='Sunday'
}
if(day==1)
{
a.innerText='Monday'
}
if(day==2)
{
a.innerText='Tuesday'
}
if(day==3)
{
a.innerText='Wednesday'
}
if(day==4)
{
a.innerText='Thursday'
}
if(day==5)
{
a.innerText='Friday'
}
if(day==6)
{
a.innerText='Saturday'
}
