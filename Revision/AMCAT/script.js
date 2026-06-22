// for(let i=1;i<=6;i++){
//     let x=" ";
//     for(let j=1;j<=i;j++){
//         x+="*";
//     }
//     console.log(x);
// }
// let y=[2,3,4,5,6,7];
// for(let ele of y){
//     ele*=2;
//     console.log(ele);
// }
// y.forEach((ele,i,y)=>{
//     console.log(ele,i,y);
// })
// let obj={
//     name:"Nitin",
//     age:24,
//     "isMarried":true
// };
// console.log(obj.isMarried);
// console.log(obj['name']);

// let x=4.3;
// console.log(Math.max(4,3,6));

// a=[2,4,5,6,7,8,9];
// for(const key in a){
//     if(Object.hasOwnProperty.call(a,key)){
//         console.log(a[key]);
//     }
// }

// for(let i=1;i<=10;i++){
//     setTimeout(function(){
//         console.log(i)},i*1000
//     );
// }

function twice(x){
    return 2*x;
}
let arr=[2,3,4,5,6];
let brr=[];
for(let i=0;i<arr.length;i++){
    brr[i]=arr[i]*2;
}
console.log(brr);