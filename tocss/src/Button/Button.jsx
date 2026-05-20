// import styles from './Button.module.css'
function Button(){
    const styles={
    backgroundColor:"skyblue",
    border:"2px solid skyblue",
    color:"white",
    borderRadius:"10px",
    margin:"30px",
    padding:"20px",
    fontSize:"30px",
    cursor:"pointer"
    }
    return(
        // <button className={styles.button}>Click me</button>
        <button style={styles}>Click me</button>
    );
}
export default Button