let x=document.getElementById("box1");
x.addEventListener("click",function(){
    x.innerText=Math.round(Math.random(0,10));
})
let y=document.getElementById("box2");
y.addEventListener("click",function(){
    y.style.backgroundColor="Red";
})
y.addEventListener("mouseleave",function(){
    y.style.backgroundColor="white";
})
let z=document.getElementById("box3");
z.addEventListener("mousemove",function(){
    let r=Math.random*256;
    let g=Math.random*256;
    let b=Math.random*256;

})
let a=document.getElementById("box4");
a.addEventListener("mousemove",function(){
    x.style.backgroundColor="blue";
    y.style.backgroundColor="navy";
    z.style.backgroundColor="skyblue";
})
a.addEventListener("mouseleave",function(){
    x.style.backgroundColor="white";
    y.style.backgroundColor="white";
    z.style.backgroundColor="white";
})