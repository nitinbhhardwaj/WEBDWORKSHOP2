function Student(props) {
  return (
    <div
      style={{
        backgroundColor: "white",
        width: "320px",
        margin: "20px auto",
        padding: "30px",
        borderRadius: "15px",
        boxShadow: "0px 3px 10px rgba(0,0,0,0.3)",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          color: "#1565c0",
          fontSize: "28px",
          marginBottom: "20px",
        }}
      >
        {props.name}
      </h2>

      <p style={{ fontSize: "20px" }}>
        <strong>Course:</strong> {props.course}
      </p>

      <p style={{ fontSize: "20px" }}>
        Marks: {props.marks}
      </p>
    </div>
  );
}

export default Student;