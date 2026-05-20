function UserGreeting(props){
    // if(props.isloggedIn){
    //     return <h2>Welcome {props.username}</h2>
    // }
    // else{
    //     return <h2>Please log in to continue</h2>
    // }
    return (props.isloggedIn)? <h2>Welcome {props.username}</h2> : <h2>Please log in to continue</h2>;
}
export default UserGreeting  