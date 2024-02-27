let hours=document.getElementById('hours')
let minutes=document.getElementById('min')
let seconds=document.getElementById('sec')

setInterval(()=>{
    let x=new Date()
hours.innerText =x.getHours()
minutes.innerText=x.getMinutes()
seconds.innerText=x.getSeconds()
if(x.getSeconds()<10){
    seconds.innerText=`0${x.getSeconds()}`
}
if(x.getMinutes()<10){
    minutes.innerText=`0${x.getMinutes()}`
}
if(x.getHours()<10){
    hours.innerText=`0${x.getHours()}`
}
if(x.getHours()<12){
    am_pm.innerText= "AM"
}
else{
    am_pm.innerText= "PM"
}
},1000)


