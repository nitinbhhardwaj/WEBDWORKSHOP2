/*Callback function is a function which 
passes in another function*/
function sumOfProducts(a,b,c){
    return a*b*c;
}
function product(a,b,c){
    return product(a,b,c);
}
function fun(x,y){
    let x=product(2,3,4);
    console.log(x-y);
}
fun(product,10);