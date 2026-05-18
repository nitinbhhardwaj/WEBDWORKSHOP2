import Student from "./Lab/Experiment 7/Student";
function App() {
return (
<div className="app">
<h1>Student Details</h1>
<div className="student-list">
<Student name="Faraz Farooqui" course="B.Tech AIML" marks={85} />
<Student name="Bipul Patel" course="B.Tech AIML" marks={90} />
<Student name="Aman Shukla" course="B.Tech AIML" marks={97} />
</div>
</div>
);
}