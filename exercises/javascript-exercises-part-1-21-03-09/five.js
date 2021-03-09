
// 5 - Write a function addWithSubcharge that adds two amounts with
//     subcharge. For each amount less than or equal to 10, the subcharge
// is 1. For each amount greater than 10, the subcharge is 2.

function addWithSubCharge(firstAmount, secondAmount) {

    let subCharge = 0

    if(firstAmount <= 10) {
        subCharge += 1
    } else {
        subCharge += 2
    }

    if(secondAmount <= 10) {
        subCharge += 1
    } else {
        subCharge += 2
    }

    return firstAmount + secondAmount + subCharge
}

console.log(addWithSubCharge(1, 2))
console.log(addWithSubCharge(10, 10))
console.log(addWithSubCharge(10, 20))
console.log(addWithSubCharge(20, 20))
