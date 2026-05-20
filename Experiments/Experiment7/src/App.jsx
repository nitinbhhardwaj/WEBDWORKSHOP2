import Student from "./Experiments/Experiment 7/Student";
function App() {
return (
<div className="app">
<h1>Student Details</h1>
<div className="student-list">
<Student name="Nitin Bhardwaj" course="B.Tech CSE" marks={99} />
<Student name="Mayank Kumar" course="B.Tech AIML" marks={90} />
<Student name="Ojas Chaudhary" course="B.Tech DS" marks={97} />
</div>
</div>
);
}