
function Student(props){
    return(
        <div>
            <div style={{backgroundColor:"white",padding:"100px",height:"200px",width:"400px",marginBottom:"80px",borderRadius:"15px",boxShadow:"5px 8px 15px black",textAlign:"center"}}>
                <h2 style={{color:"blue"}}>
                    Name:{props.name}
                </h2>
                <p>Course:{props.course}</p>
                <p>Marks:{props.marks}</p>
            </div>
            </div>
    );
}
export default Student