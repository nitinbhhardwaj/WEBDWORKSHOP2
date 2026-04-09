// function sqr(ele){
//     return ele*ele;
// }

let arr=[1,2,3,4,5];
console.log(arr);
// let brr=arr.map(function (ele){
//     return ele*ele;
// });

let brr=arr.map((ele)=>{
    return ele*ele;
});
console.log(brr);

arr=arr.map((ele)=>{
return ele*ele*ele;
});
console.log(arr);

let crr=arr.map(ele => ele-2);
console.log(crr);