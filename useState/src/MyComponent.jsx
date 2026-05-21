import React, {useState} from 'react';
function MyComponent(){
    const [name,setName]=useState("Guest");
    const updateName=()=>{
        setName("Spongebob");
    }

    const[age,setAge]=useState(0);
    const incrementAge=()=>{
        setAge(age+1);
    }

    const[isEmployed,setToggle]=useState(false);
    const toggleEmployedStatus=()=>{
        setToggle(!isEmployed);
    }
    return(<div>
        <p>Name: {name}</p>
                <button onClick={updateName}>Set Name</button>
        <p>Age: {age}</p>
        <button onClick={incrementAge}>Increment Age</button>

        <p>Is employed:  {(isEmployed)? "Yes": "No"}</p>
        <button onClick={toggleEmployedStatus}>Set EmployedStatus</button>
        
    </div>);
}
export default MyComponent