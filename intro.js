

// --------------------1 to 10 even number--------------


// var num = 0;
// while  (num < 10){
//     console.log("even");
//     num = num + 2;
//     console.log(num);
// }


// -------------some of tool----------------

// var age=2.0235;
// console.log(age.toFixed(3));



// -------------------Factorial-------------

// var factorial = 1;
// for (i=1 ; i<=7 ; i++){
//     factorial = factorial * i;
    
// }
// console.log(factorial);

// function factNote (num){
//     let factorial =1;
// for ( let i=1 ; i <= num ; i++){
//     factorial = factorial * i;
// }
// return factorial;
// }
// var firstFactorial = factNote (7);
// console.log("first fact is", firstFactorial);



// --------------------Leapyear--------------------


// var year = 2020;
// if (year % 4 == 0) {
//     console.log("leapyear");
// } 
// else{
//     console.log ("not leapyear")
// }

// function yearOf (newYear) {
//     if (newYear % 4 == 0){
//         console.log ("leapyear");
        
//     }
//     else {
//         console.log ("not leapyear");
//     }

//     return newYear;
    
   
// }

// const setYearOf = yearOf(2020);
// console.log( "that is" ,setYearOf);


// --------------------celsious to farenheight----------------

// function getCel (celsius) {
//     var farenheight =  (celsius * 9 / 5) + 32;
//     return farenheight;
// }
// const highCel = 100;
// const toCell = getCel(highCel);
// console.log(toCell);

// -----------GRADE-----------

// function getGrade (marks){
//     if (marks >= 40 && marks < 50) {
// console.log("Your grade is C");
//     }
//     else if (marks >= 50 && marks<60){
//         console.log("Your grade is B");
//     }
//     else if (marks >= 60 && marks<70){
//         console.log("Your grade is B+");
//     }
//     else if (marks >= 70 && marks<80){
//         console.log("Your grade is A");
//     }
//     else if (marks >= 80){
//         console.log("your grade is A+");
//     }
//    else{
//        console.log("Fail")
//    }
//    return marks ;
// }
// const yourGrade = getGrade(33);
// console.log(yourGrade);

// --------------13 er namta-------------

function multiPication (number){
    // var number = 13;
    for(var i = 1; i <= 10; i++ ){
        var result = i * number;
        var formula = number +  "*" + i +  "=" + result;
        console.log(formula);
    }
   return number;
    
}
// multiPication(2);
const namta = multiPication(3);

console.log (namta);