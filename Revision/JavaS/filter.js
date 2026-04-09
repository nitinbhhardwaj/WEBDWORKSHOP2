let arr=[1,3,4,5,6,7,8];
console.log(arr);

// function fun(ele){
// if(ele%2!=0) return true;
// else return false;
// }

// arr= arr.filter(function(ele){
// if(ele%2!=0) return true;
// else return false;
// });

// arr= arr.filter((ele)=>{
// if(ele%2!=0) return true;
// else return false;
// });

// arr= arr.filter((ele)=>{
// if(ele<1) return true;
// else return false;
// });

// arr= arr.filter((ele)=>{
// return (ele<5)? true:false;
// });

// arr= arr.filter((ele)=>{
// return (ele<5);
// });

arr= arr.filter((ele)=>(ele<5));
console.log(arr);