
function Student(props){
    return(
        <div style={{border:"1px solid black",backgroundColor:"grey",display:"flex",justifyContent:"center",margin:"20px"}}>
           
            <div style={{backgroundColor:"white",paddingTop:"100px",textAlign:"center",height:"200px",width:"400px",margin:"10px",borderRadius:"15px",boxShadow:"5px 8px 15px black"}}>
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