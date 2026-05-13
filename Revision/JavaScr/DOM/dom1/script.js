let x=document.querySelector("h2");


setTimeout(function another(){
    x.innerHTML="This is done by me";
    x.style.color="red";
    x.style.fontFamily="Gill Sans";
},4000);

let y=document.querySelector(".new");
setTimeout(function changed(){
y.innerHTML="Bread and butter"},2000);




