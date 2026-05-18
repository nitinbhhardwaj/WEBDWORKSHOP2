import React from 'react';
import './Student.css';
function Student(props) {
return (
<div className="student-card">
<h2>{props.name}</h2>
<p><span>Course:</span> {props.course}</p>
<p><span>Marks:</span> {props.marks}</p>
</div>
);
}
export default Student;