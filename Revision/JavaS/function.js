function OnetoN(n){
    for(let i=1;i<=n;i++){
        console.log(i);
    }
    console.log();
}

OnetoN(2);
OnetoN(18);

function eqn(a,b){
    return console.log(Math.abs(a*a*a)+Math.abs(b*b*b));
}

eqn(-2,4);