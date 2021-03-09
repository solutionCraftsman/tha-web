
// 2- Write a JavaScript program to check from two given integers,
//     whether one is positive and another one is negative.

function checkIntegers(firstInteger, secondInteger) {
    return (
        (firstInteger < 0 && secondInteger > 0) ||
        (firstInteger > 0 && secondInteger < 0)
    )
}

console.log(checkIntegers(-1, 1))
console.log(checkIntegers(1, -1))
console.log(checkIntegers(1, 1))
console.log(checkIntegers(0, 0))
