/*Callback function is a function which 
passes in another function*/

function product(a,b,c){
    return a*b*c;
}
function fun(x,y){
    x=product(2,3,4);
    console.log(x-y);
}
fun(product,10);