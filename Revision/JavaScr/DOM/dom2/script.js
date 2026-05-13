let x=document.getElementById("box1");
x.addEventListener("mouseenter",function(){
    let r=Math.floor(Math.random()*100);
    x.innerText=`${r}`;
})
x.addEventListener("mouseleave",function(){
    x.innerText=1;
})


let y=document.getElementById("box2");
let clr="green";
y.addEventListener("mouseenter",function(){
    if(clr=="green"){
        y.style.backgroundColor="green";
        clr="red";
    }
    else{
        y.style.backgroundColor="red";
        clr="green";
    }
})
y.addEventListener("mouseleave",function(){
    y.style.backgroundColor="white";
})
let z=document.getElementById("box3");
z.addEventListener("mousemove",function(){
    let r=Math.random*255;
    let g=Math.random*255;
    let b=Math.random*255;
    z.style.backgroundColor=rgb(255,255,255);
})
z.addEventListener("mouseleave",function(){
    z.style.backgroundColor=rgb(0,0,0);
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