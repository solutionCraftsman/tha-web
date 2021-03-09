
// 7 - Write a JavaScript program to compute the sum of the two given
// integers. If the two values are same, then returns triple their sum.

function computeSum(firstInteger, secondInteger) {

    let sum = firstInteger + secondInteger

    if(firstInteger === secondInteger) {
        sum *= 3
    }

    return sum
}

console.log(computeSum(1, 2))
console.log(computeSum(2, 2))
console.log(computeSum(5, 5))
