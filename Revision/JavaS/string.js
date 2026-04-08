let s= "  CoderC  is a platform";

// console.log(s,s.length);

// for(let i=0;i<s.length;i++){
//     console.log(s[i]);
// }


// for(const char of s){
//     console.log(char);
// }

//for each loop does not work on string 

console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.trim());
console.log(s.length);
console.log(s.indexOf ('C'));
console.log(s.lastIndexOf('C'));
console.log(s.charAt(3));
console.log(s[3]);
console.log(s.slice(5)); //substring from index 5 onwards
console.log(s.slice(2,7));//substring from index 2 to 6

let arr=s.split(' ');
console.log(arr);
for(const ele of arr){
    console.log(ele);
}

