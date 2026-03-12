// let employees = [];

// function addEmployee(){

//     let name = prompt("Enter Employee Name");
//     let id = prompt("Enter Employee ID");
//     let salary = parseFloat(prompt("Enter Salary"));
//     let department = prompt("Enter Department");

//     let emp = {
//         name:name,
//         id:id,
//         salary:salary,
//         department:department
//     };

//     employees.push(emp);

//     alert("Employee Added Successfully!");
// }

// function displayEmployees(){

//     let text = "";

//     for(let i=0;i<employees.length;i++){

//         text += "Name: " + employees[i].name +
//         " | ID: " + employees[i].id +
//         " | Salary: " + employees[i].salary +
//         " | Department: " + employees[i].department +
//         "<br>";
//     }

//     document.getElementById("output").innerHTML = text;
// }

// function salaryAbove(){

//     let text = "Employees with Salary > 50000<br>";

//     for(let i=0;i<employees.length;i++){

//         if(employees[i].salary > 50000){
//             text += employees[i].name + " - " + employees[i].salary + "<br>";
//         }

//     }

//     document.getElementById("output").innerHTML = text;
// }

// function totalSalary(){

//     let total = 0;

//     for(let i=0;i<employees.length;i++){
//         total += employees[i].salary;
//     }

//     document.getElementById("output").innerHTML =
//     "Total Salary: " + total;
// }

// function averageSalary(){

//     let total = 0;

//     for(let i=0;i<employees.length;i++){
//         total += employees[i].salary;
//     }

//     let avg = total / employees.length;

//     document.getElementById("output").innerHTML =
//     "Average Salary: " + avg;
// }

// function countDepartment(){

//     let dept = prompt("Enter Department Name");

//     let count = 0;

//     for(let i=0;i<employees.length;i++){

//         if(employees[i].department.toLowerCase() == dept.toLowerCase()){
//             count++;
//         }

//     }

//     document.getElementById("output").innerHTML =
//     "Employees in " + dept + " department: " + count;
// }

function addEmployee(){

    let name = document.getElementById("name").value;
    let id = document.getElementById("id").value;
    let salary = parseFloat(document.getElementById("salary").value);
    let department = document.getElementById("department").value;