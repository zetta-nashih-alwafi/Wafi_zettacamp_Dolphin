"use strict";
let text = 'Learning Typescript is different than Javascript';
let firstNumber = 9;
let secondNumber = 19;
console.log(learnTypeScript(text, firstNumber, secondNumber));
console.log(notSimpleTypeScript(text, firstNumber, secondNumber));
function learnTypeScript(argument1, argument2, argument3) {
    let result = argument1.substring(argument3, argument2);
    return result;
}
function notSimpleTypeScript(argument1, argument2, argument3) {
    let result = Array.from(argument1).reverse().join("").substring(argument2 + argument3);
    result = Array.from(result).reverse().join("").substring(argument2);
    return result;
}
