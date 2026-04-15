function calculateResult(){
let n=parseInt(document.getElementById("n").value),total=0;
for(let i=1;i<=n;i++){
let marks=parseFloat(prompt("Enter marks for subject "+i));
total+=marks;
}
let avg=total/n,grade,result;
if(avg>=90)grade="A";
else if(avg>=75)grade="B";
else if(avg>=70)grade="C";
else if(avg>=60)grade="D";
else grade="F";
result=avg>=40?"Pass":"Fail";
document.getElementById("result").innerHTML=
"Total Marks: "+total+"<br>Average Marks: "+avg.toFixed(2)+"<br>Grade: "+grade+"<br>Result: "+result;
}