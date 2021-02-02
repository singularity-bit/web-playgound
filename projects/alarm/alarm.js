var span=document.createElement("span");
var title = document.getElementById("currentTime");
var timeInput=document.querySelector('input[type="time"]');
var button=document.querySelector('input[type="button"]');
var alarm=document.getElementById("alarmSound");

var inputConver;

var hourInput;
var minuteInput;

var hourSpan;
var minuteSpan;
var spanTime;

const currentTime=()=>{
    var today=new Date(); 
    var time=today.getHours()+":"+today.getMinutes()+":"+today.getSeconds();
    span.textContent=time;
    title.appendChild(span);
}
setInterval(currentTime,1000);
const checkTime=()=>{
    spanTime= span.textContent.split(":");
    hourSpan=parseInt(spanTime[0]);
    minuteSpan=parseInt(spanTime[1]);
    console.log(spanTime);
    if(hourSpan==hourInput && minuteSpan==minuteInput){
        alarm.play();
        setTimeout(x=()=>{alarm.pause()},3000);
        //
    } 
    
}
setInterval(checkTime,3000);
button.addEventListener("click",checkTime);
timeInput.addEventListener("change",function(){
    inputConver=timeInput.value.split(":");  
    hourInput=parseInt(inputConver[0]);
    minuteInput=parseInt(inputConver[1]);
})
