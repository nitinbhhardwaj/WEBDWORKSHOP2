let arr=[1,2,3,4,5,6,6,7,8,9];
console.log(arr);
let x=arr.reduce(function(a,b){
    return a+b;
});
console.log(x);
