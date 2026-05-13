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
    else if(clr=="red"){
        y.style.backgroundColor="red";
        clr="yellow";
    }
    else{
        y.style.backgroundColor="yellow";
        clr="green";
    }
})
y.addEventListener("mouseleave",function(){
    y.style.backgroundColor="white";
})
let z=document.getElementById("box3");
z.addEventListener("mousemove",function(){
    let r=(Math.random()*256);
    let g=(Math.random()*256);
    let b=(Math.random()*256);
    z.style.backgroundColor=`rgb(${r},${g},${b})`;
})
z.addEventListener("mouseleave",function(){
    z.style.backgroundColor=rgb(255,255,255);
})
let a=document.getElementById("box4");
a.addEventListener("mousemove",function(){
    let r=Math.floor(Math.random()*256);
    let g=Math.floor(Math.random()*256);
    let b=Math.floor(Math.random()*256);
    x.style.backgroundColor=`rgb(${r},255,${b})`;
    y.style.backgroundColor=`rgb(255,${g},${b})`;
    z.style.backgroundColor=`rgb(${r},${g},255)`;
})
a.addEventListener("mouseleave",function(){
    x.style.backgroundColor="white";
    y.style.backgroundColor="white";
    z.style.backgroundColor="white";
})