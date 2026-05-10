//Object is kind of like map/dictionary where we have key-value pairs
// var details=["Raghav",24,96.6,false];

// let obj={
//     name:"Raghav",
//     age:24,
//     percentage:96.6,
//     isMarried:false
// };
// console.log(obj.isMarried);

// let car={
//     mileage:"23km/hr",
//     name:"Maruti Suzuki"
// };
// console.log(car.name);

let student={
    name:"Mayank",
    section:"CSE-21",
    gpa:"8.7",
    'at coding':"good "
};

// console.log(student['name']);

for (const key in student) {
    if (Object.hasOwnProperty.call(student, key)){
        console.log(key,":",student[key]);
    }
}