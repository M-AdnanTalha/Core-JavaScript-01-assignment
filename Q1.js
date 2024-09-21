marks=99
if(marks>=90){
    grade=`A`
}
else if(marks<90 && marks>=70){
    grade=`B`
}
else if(marks<70 && marks>=50){
    grade=`C`
}
else{
    grade=`F`
}

console.log(grade)