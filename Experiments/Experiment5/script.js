let employees=[];
function addEmployee(){
let name=prompt("Enter Name"),id=prompt("Enter ID"),
salary=parseFloat(prompt("Enter Salary")),dept=prompt("Enter Department");
if(!name||!id||isNaN(salary)||!dept){alert("Invalid input");return;}
employees.push({name,id,salary,department:dept});
alert("Employee Added");
}
function displayEmployees(){
let text="";
for(let e of employees)
text+=`Name:${e.name} | ID:${e.id} | Salary:${e.salary} | Dept:${e.department}<br>`;
document.getElementById("output").innerHTML=text||"No Data";
}
function salaryAbove(){
let text="Employees with Salary > 50000<br>";
for(let e of employees) if(e.salary>50000) text+=`${e.name} - ${e.salary}<br>`;
document.getElementById("output").innerHTML=text;
}
function totalSalary(){
let total=0;
for(let e of employees) total+=e.salary;
document.getElementById("output").innerHTML="Total Salary: "+total;
}
function averageSalary(){
if(!employees.length)return document.getElementById("output").innerHTML="No Data";
let total=0;
for(let e of employees) total+=e.salary;
document.getElementById("output").innerHTML="Average Salary: "+(total/employees.length).toFixed(2);
}
function countDepartment(){
let dept=prompt("Enter Department");if(!dept)return;
let count=0;
for(let e of employees)
if(e.department.toLowerCase()==dept.toLowerCase())count++;
document.getElementById("output").innerHTML=`Employees in ${dept}: ${count}`;
}