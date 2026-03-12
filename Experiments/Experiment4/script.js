function calculateResult(){

    let n = document.getElementById("n").value;
    n = parseInt(n);

    let total = 0;

    for(let i = 1; i <= n; i++){
        let marks = parseFloat(prompt("Enter marks for subject " + i));
        total = total + marks;
    }

    let average = total / n;

    let grade;
    let result;

    if(average >= 90){
        grade = "A";
    }
    else if(average >= 75){
        grade = "B";
    }
    else if(average >= 70){
        grade = "C";
    }
    else if(average >= 60){
        grade = "D";
    }
    else{
        grade = "F";
    }

    if(average >= 40){
        result = "Pass";
    }
    else{
        result = "Fail";
    }

    document.getElementById("result").innerHTML =
        "Total Marks: " + total + "<br>" +
        "Average Marks: " + average.toFixed(2) + "<br>" +
        "Grade: " + grade + "<br>" +
        "Result: " + result;
}