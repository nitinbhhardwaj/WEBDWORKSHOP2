let arr=[2,3,-5,-9];
console.log(arr);
let brr=[];
for(const ele of arr){
    brr.push(Math.abs(ele));
}
console.log(brr);