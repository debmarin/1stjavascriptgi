// very easy
let numOne = 8;
let numTwo = 5;
let difference = numOne - numTwo;
console.log(`The difference between ${numOne} and ${numTwo} is ${difference}`)

//easy
let nameOne = 'Billy';
let nameTwo = 'Amy';
let characterDiff = nameOne.length - nameTwo.length;
console.log(`The name ${nameOne} is longer than ${nameTwo} by ${characterDiff} characters.`)

//medium
let input = prompt("Hello, How are you?");
if (input === input.toUpperCase()){
    console.log("Why are you shouting?")
}
else if (input === input.toLowerCase()){
    console.log("Why are you whispering?")
}
else {
    console.log("Thanks for talking normally")
} 


//hard
function add(a,b) {
    let c = a + b;
    return c;
}
console.log(add(5,3));

function subtract(a,b) {
    let c = a - b;
    return c;
}
console.log(subtract(7,1))

function multiply(a,b) {
    let c = a * b;
    return c;
}
console.log(multiply(2,6))

function divide(a,b) {
    let c = a / b;
    return c;
}
console.log(divide(12,4))

//very hard
let x = prompt("To use this calculator please enter a first number:");
let operator = prompt("Now choose an operator: + , - , * , / ");
let y = prompt("And then enter the second number:");
x = parseFloat(x);
y = parseFloat(y);

if (operator == '+'){
    alert(`${x} + ${y} = ${add(x,y)}`)
}
else if (operator == '-'){
    alert(`${x} - ${y} = ${subtract(x,y)}`)
}
else if (operator == '*'){
    alert(`${x} * ${y} = ${multiply(x,y)}`)
}
else if (operator == '/'){
    alert(`${x} / ${y} = ${divide(x,y)}`)
}