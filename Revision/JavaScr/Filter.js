// // function twice(num){
// //     return num*3;
// // }
// // let arr=[2,3,-5,-9];
// // console.log(arr);
// // let brr=arr.map(twice);
// // console.log(brr);

// // for(const ele of arr){
// //     brr.push(Math.abs(ele));
// // }
// // console.log(brr);

// function fun(x){
//     return x%2!=0;
// }
// let arr=[3,4,65,2,6];
// console.log(arr);

// let brr=arr.filter(fun);
// console.log(brr);

// let crr=arr.filter(function(x){
//     return x%2==0;
// })
// console.log(crr);

// let drr=arr.filter((x)=>(x%2==0));
// console.log(drr);

// let err=arr.filter((x)=>
// ((x%2==0)?true:false))
// console.log(err);

function even(x){
    return x%2==0;
}
let arr=[2,4,3,5,6];
let brr=arr.filter(even);
console.log(brr);

let crr=arr.filter(function even(x){
    return x%2==0;
})
console.log(crr);

let drr=arr.filter((x)=>(x%2==0));
console.log(drr);

let err=arr.filter((x)=>{return x%2==0});
console.log(err);

