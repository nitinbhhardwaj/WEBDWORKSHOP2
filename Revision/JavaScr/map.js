function square(x){
    return x*x;
}

function add(x){
    return x+10;
}
let arr=[2,3,4,5,6];
let brr=arr.map(square);
console.log(brr);

let crr=arr.map(add);
console.log(crr);