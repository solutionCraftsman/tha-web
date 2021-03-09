
// Write a JavaScript program to compute the sum and product of
// an array of integers.

function computeSum(arrayOfIntegers) {

    let sum = 0

    for(const value of arrayOfIntegers) {
        sum += value
    }

    return sum
}

function computeProduct(arrayOfIntegers) {

    let product = 1

    for(const value of arrayOfIntegers) {
        product *= value
    }

    return product
}

const arrayOfIntegers = [1, 2, 3, 4, 5]
console.log(computeSum(arrayOfIntegers))
console.log(computeProduct(arrayOfIntegers))

