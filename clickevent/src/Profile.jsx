function Profile(){
    const imageUrl='https://i1-c.pinimg.com/1200x/1e/c9/7f/1ec97f06980234d428001c1ffdb9a5d7.jpg';
    const handleClick=(e)=>(e.target.style.display="None")
    return(<img onClick={(e)=>handleClick(e)} src={imageUrl}></img>);
}
export default Profile