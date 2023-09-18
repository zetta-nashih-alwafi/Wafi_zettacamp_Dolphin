let text: string = 'Learning Typescript is different than Javascript'
let firstNumber: number = 9
let secondNumber: number = 19

console.log(learnTypeScript(text, firstNumber, secondNumber));
console.log(notSimpleTypeScript(text, firstNumber, secondNumber));

function learnTypeScript (argument1: string, argument2: number, argument3: number): string {
    let result: string = argument1.substring(argument3, argument2)

    return result;
}

function notSimpleTypeScript (argument1: string, argument2: number, argument3: number): string {
    let result: string = Array.from(argument1).reverse().join("").substring(argument2 + argument3)
    result = Array.from(result).reverse().join("").substring(argument2)

    return result
}
