let x=document.getElementById("main");
let arr=["https://i.pinimg.com/1200x/92/c3/07/92c307470891d3fd1a66c6bbacae7bb2.jpg","https://i.pinimg.com/736x/a0/49/6b/a0496b6dae9a472b09d94fe175e6c8bd.jpg","https://i.pinimg.com/736x/16/de/bc/16debca7c7c015239e7c56436c925f44.jpg","https://i.pinimg.com/1200x/1e/c9/7f/1ec97f06980234d428001c1ffdb9a5d7.jpg","https://i.pinimg.com/1200x/84/25/76/842576708d43afb020ecc62e46ae8c01.jpg","https://i.pinimg.com/736x/be/10/45/be1045ee762404b555e90ecb65906d0a.jpg","https://i.pinimg.com/1200x/c0/a8/54/c0a854b6175068664164913594fa5f96.jpg","https://i.pinimg.com/736x/78/9e/76/789e768774ca4dde657caf44ff813e63.jpg","https://i.pinimg.com/1200x/c9/d7/7a/c9d77aeb146d1cc74e33b54e77bb85ab.jpg","https://i.pinimg.com/736x/62/15/f6/6215f66e4d5746f7d029bbe52b013c5e.jpg"];
let s="";
for(let i=1;i<=78;i++){
    let y=Math.floor(Math.random()*arr.length);
    s+=`<div class="cards"><img src=${arr[y]}></div>`
}
x.innerHTML=s;



