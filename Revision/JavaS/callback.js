function product(a,b,c){
    return a*b*c;
}
function fun(x,y){
    let z=x(2,3,4);
    return (z-y);
}
console.log(fun(product,5));
