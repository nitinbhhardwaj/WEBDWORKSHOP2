a=2;
console.log(a);
a=2.5;
console.log(a);
a=true;
console.log(a);
a="Raghav";
console.log(a);
a='Ram';
console.log(a);
a=[2,4,5,5];
console.log(a);
a.push(3);//adds an element in the end
console.log(a);
a.pop();//deletes an element from the end
console.log(a);
a.shift();//deletes an element from the start
console.log(a);
a.unshift(5);//adds an element in the start
console.log(a);

b=[3,2.5,"Nitin",true,[3,4,5,3]];
console.log(b);

for(let i=0;i<b.length;i++){
    console.log(i+1,b[i]);
}