import Student from './Student.jsx'
function App() {
  return(
  <>
  <div style={{border:"2px solid black",backgroundColor:"grey",margin:"15px auto",display:"flex",flexDirection:"column",alignItems:"center"}}>     
  <div><h1 style={{textAlign:"center"}}>Student Details </h1></div>
  <Student name="Nitin Bhardwaj" course="Computer Science" marks="100"></Student>
  <Student name="Ojasya Pandey" course="Computer Science" marks="91"></Student>
  <Student name="Aman Tiwari" course="Computer Science" marks="88"></Student>
  </div>
  </>
  );
}

export default App
