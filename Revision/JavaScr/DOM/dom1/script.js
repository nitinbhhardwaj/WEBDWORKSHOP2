let x=document.querySelector("#heading1");

// addEventListener("click",function(){
//     x.innerHTML="Pikachu";
//     x.style.backgroundColor="yellow";
//     x.style.color="Red";
//})

let y=document.getElementById("heading2");
// addEventListener("mousemove",function(){
//     y.style.color="navy";
//     y.style.backgroundColor="grey";
//})

// let z=document.getElementById("heading3");
// z.addEventListener("click",function(){
//     x.innerHTML="Pikachu";
//    x.style.backgroundColor="yellow";
//      x.style.color="Red";
// })

let z=document.getElementById("heading3");
z.addEventListener("mouseenter",function(){
    x.innerHTML="Pikachu";
    x.style.color="white";
    x.style.backgroundColor="red";
})
z.addEventListener("mouseleave",function(){
    x.innerHTML="Doraemon";
    x.style.color="black";
    x.style.backgroundColor="white";
})
