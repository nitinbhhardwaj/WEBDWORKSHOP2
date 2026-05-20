import PropTypes from 'prop-types'
function Students(props){
    return(
        <div style={{border:"2px solid black",margin:"2px",padding:"3px"}}>
            <p>Name:{props.name}</p>
            <p>   Age:{props.age} </p>
            <p>Student: {props.isStudent ? "True" : "False"}</p>
        </div>
    );
}
Students.propTypes={
    name:PropTypes.string,
    age:PropTypes.number,
    isStudent:PropTypes.bool,
}
Students.defaultProps={
    name:"Aman",
}
export default Students