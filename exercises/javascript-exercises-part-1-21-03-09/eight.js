
// 8 - Write a JavaScript function to get the first element of an array.
//     Passing a parameter 'n' will return the first 'n' elements of the array.
//     example - console.log(first([7, 9, 0, -2]));
// console.log(first([],3));
// console.log(first([7, 9, 0],3));
// console.log(first([7, 9, 0, -2],6));
// Output should be: Expected Output :
//         7
//         []
//         [7, 9, 0]
//         [7, 9, 0, -2]

function getFirst_n_elements(array, n = 1) {

    if(array) {

        if(n === 1) {
            return array[0]
        }
        else {
            return array.splice(0, n)
        }

    }

    return array;
}

console.log(getFirst_n_elements([7, 9, 0, -2]))
console.log(getFirst_n_elements([], 3))
console.log(getFirst_n_elements([7, 9, 0],3))
console.log(getFirst_n_elements([7, 9, 0, -2],6))
