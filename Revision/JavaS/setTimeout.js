//Print 1 to 19 but with a delay of 1 second between each other


 for(let i=30;i>=1;i--){
    setTimeout(function(){
        console.log(i);
    },1000*i);
 }



//     setTimeout(function(){
//     console.log("Hello");
// },2*1000);
//     setTimeout(function(){
//         console.log("Mello");
//     },3*1000);