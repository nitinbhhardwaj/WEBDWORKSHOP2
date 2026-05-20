import Student from './Student.jsx'
function App() {
  return(
  <>
  <div><h1 style={{textAlign:"center"}}>Student Details </h1></div>
  <Student name="Nitin Bhardwaj" course="Computer Science" marks="100"></Student>
  <Student name="Ojasya Pandey" course="Computer Science" marks="91"></Student>
  <Student name="Aman Tiwari" course="Computer Science" marks="88"></Student>
  </>
  );
}

export default App
