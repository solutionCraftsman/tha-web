
// 6 - Write a function rotate that rotates the elements of an array. All
// elements should be moved one position to the left. The 0th element
// should be placed at the end of the array. The rotated array should be
// returned.
// ** Example: rotate(['a', 'b', 'c']) should
// return ['b', 'c', 'a']

function rotate(array) {

    const firstElement = array.shift()
    array.push(firstElement)

    return array
}

console.log(rotate(['a', 'b', 'c']))
console.log(rotate([1, 2, 3]))
