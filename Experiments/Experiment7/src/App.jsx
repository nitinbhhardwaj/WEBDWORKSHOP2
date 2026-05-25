import Student from './Student.jsx';

function App() {
  return (
    <>
      <div
        style={{
          border: "2px solid black",
          backgroundColor: "#e5e5e5",
          width: "500px",
          margin: "20px auto",
          padding: "20px",
        }}
      >
        <h1
          style={{
            paddingLeft: "20px",
            fontSize: "40px",
            fontWeight: "bold",
          }}
        >
          Student Information
        </h1>

        <Student
          name="Nitin Bhardwaj"
          course="Computer Science"
          marks="100"
        />

        <Student
          name="Niyatee Agrawal"
          course="Information Technology"
          marks="92"
        />

        <Student
          name="Ojesev Gupta"
          course="Electronics"
          marks="78"
        />
      </div>
    </>
  );
}

export default App;