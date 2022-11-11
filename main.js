


document.getElementById("result").onclick = function(){

    //Task 1
var num1 = document.getElementById("frist-number").value ;
var num2 = document.getElementById("scend-number").value ;
var result = document.querySelector("#show-result");
  
let cac = sub(num1 , num2);
   result.innerHTML = cac;

}

document.getElementById("multi-result").onclick = function(){

    var num1 = document.getElementById("frist-number").value ;
var num2 = document.getElementById("scend-number").value ;
var result = document.querySelector("#show-result");
  
let cac = mult(num1 , num2);
   result.innerHTML = cac;

}


document.getElementById("sum-result").onclick = function(){

    var num1 = document.getElementById("frist-number").value ;
var num2 = document.getElementById("scend-number").value ;
var result = document.querySelector("#show-result");
  
let cac = sum(num1 , num2);
   result.innerHTML = cac;

}

document.getElementById("remain-result").onclick = function(){

    var num1 = document.getElementById("frist-number").value ;
var num2 = document.getElementById("scend-number").value ;
var result = document.querySelector("#show-result");
  
let cac = remain(num1 , num2);
   result.innerHTML = cac;

}


document.getElementById("div-result").onclick = function(){

    var num1 = document.getElementById("frist-number").value ;
var num2 = document.getElementById("scend-number").value ;
var result = document.querySelector("#show-result");
  
let cac = div(num1 , num2);
   result.innerHTML = cac;


}

















//sum to numbers
function sum(num1 , num2){

    let result = (num1 + num2) 
    //return " Ther result of sum a  " + num1 + " and " +num2 + " is :"+result ;
    return `The result of sum a ${num1} and ${num2} is : ${result}`;

}

//sub to numbers
function sub(num1 , num2){
    let result = num1 - num2
    return " Ther result of sub a  " + num1 + " and " +num2 + " is :"+result ;

}

//mult to numbers
function mult(num1 , num2){
    let result = num1 * num2
    return " Ther result of mult  a  " + num1 + " and " +num2 + " is :"+result ;

}
//div to numbers
function div(num1 , num2){
    let result = num1 / num2
    return " Ther result of dividing a  " + num1 + " and " +num2 + " is :"+result ;

}

//remain to numbers
function remain(num1 , num2){
    let result = num1 % num2
    return "Ther result of remain a  " + num1 + " and " +num2 + " is :"+result ;
   

}

//`${}`


// console.log(sum(3,3))
// console.log(sub(3,3))
// console.log(mult(3,3))
// console.log(div(3,3))
// console.log(remain(3,3))



     





