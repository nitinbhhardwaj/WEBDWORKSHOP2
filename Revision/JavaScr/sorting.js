let arr=[2,-3,-4,6,2,-6,1,7];
console.log(arr.sort((a,b)=>(a-b)));

console.log(arr.sort((a,b)=>(b-a)));
console.log(arr.sort((a,b)=>(Math.abs(a)-Math.abs(b))));