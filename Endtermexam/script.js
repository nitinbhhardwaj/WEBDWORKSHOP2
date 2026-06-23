let principal=window.prompt("Enter the principal?");
let rate=window.prompt("Enter the rate of Interest?");
let time=window.prompt("Enter the time(in years)?");
let si=(principal*rate*time)/100;

document.getElementById("head").textContent=`${si}`;