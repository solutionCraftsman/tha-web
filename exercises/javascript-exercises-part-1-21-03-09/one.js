
// 1 - Write a JavaScript program to check two given numbers and return
// true if one of the number is 50 or if their sum is 50.

function checkNumbers(firstNumber, secondNumber) {
    return (
        firstNumber === 50 ||
        secondNumber === 50 ||
        (firstNumber + secondNumber === 50)
    )
}

console.log(checkNumbers(50, 1))
console.log(checkNumbers(1, 50))
console.log(checkNumbers(50, 50))
console.log(checkNumbers(25, 25))
console.log(checkNumbers(20, 30))
console.log(checkNumbers(1, 1))
console.log(checkNumbers(-50, -50))
