
// for(let i=30;i>=1;i--){
//    setTimeout(function(){
//     console.log(i)},Math.abs((i-30)*200)
//    );
// }


// setTimeout(function(){for(let i=1;i<=10;i++){
//     console.log(i);
// }},2000);

for(let i=1;i<=10;i++){
    setTimeout(function(){
        console.log(i);
    },i*300);
}


