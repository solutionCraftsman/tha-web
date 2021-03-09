
// 3 - Write a JavaScript program to find the area of a scalene triangle
// where lengths of the three of its sides are 5, 6, 7.

function areaOfScaleneTriangle(a, b, c) {

    const s = calculateSemiPerimeter(a, b, c);
    return Math.sqrt(s * (s - a) * (s - b) * (s - c))

}

function calculateSemiPerimeter(a, b, c) {
    return (a + b + c) / 2
}

let area = areaOfScaleneTriangle(5, 6, 7)
area = area.toFixed(2)
console.log(area)

