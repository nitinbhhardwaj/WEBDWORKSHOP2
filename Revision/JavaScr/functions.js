// function OnetoN(n){
//     for(let i=1;i<=n;i++){
//         console.log(i);
//     }
// }

// OnetoN(20);

// function sum(a,b){
//     console.log((a*a)+(b*b));
// }
// sum(2,3);

// function sum(a,b){
//     a=Math.abs(a);
//     b=Math.abs(b);
//     console.log(a*a*a+b*b*b);
// }
// sum(2,-3);

function cube(a,b){
     return ((Math.abs(a*a*a))+(Math.abs(b*b*b)));
}
console.log(cube(2,-3));
