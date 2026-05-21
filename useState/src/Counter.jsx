import React,{useState,useEffect} from 'react';
function Counter(){
    const [count,setCount]=useState(0);
    const[color,setColor]=useState("green");

    useEffect(()=>{
        document.title=`Count:${count} ${color}`;
    },[count,color])

    const increment=()=>{
        setCount(c=>c+1);
    };
    const decrement=()=>{
        setCount(c=>c-1);
    };
    const reset=()=>{
        setCount(0);
    };
function changeColor(){
    setColor(c=>c==="green"? "red" : "green");
}
    
    return(
        <div>
        <p>Count: {count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
        <button onClick={changeColor}>Change Color</button>
        </div>
    );
}
export default Counter