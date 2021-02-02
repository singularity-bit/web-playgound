var input =document.getElementById("item");
var button=document.getElementById("enter");
var ul=document.querySelector("ul");
button.addEventListener("click",function(){
    var li=document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
})