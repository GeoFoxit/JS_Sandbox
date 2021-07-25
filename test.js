// ##################################################################
// There are arrays with stock prices for each day in a row. Task is to calculate maximum revenue
// that could be collected buying and selling stocks.
// You can buy only one and sell many stocks per day. 

//Initial values
const a = [1, 2, 3, 4, 5, 6] // 15
const b = [6, 5, 4, 3, 2, 1] // 0
const c = [1, 6, 5, 10, 8, 7] // 18
const d = [1, 2, 10, 2, 4, 6] // 23

// Solution
const calcMaxRevenue = arr => {
    const maxPrice = Math.max(...arr)
    const indexOfMaxValue = arr.indexOf(maxPrice)
    let revenue = 0
    for (let i = 0; i < indexOfMaxValue; i++) revenue += maxPrice - arr[i]
    return revenue += arr.length - 1 === indexOfMaxValue
        ? 0
        : calcMaxRevenue(arr.splice(indexOfMaxValue + 1))
}

// Test
console.log(calcMaxRevenue(a))
console.log(calcMaxRevenue(b))
console.log(calcMaxRevenue(c))
console.log(calcMaxRevenue(d))

// ##################################################################
// The task is to write a function that satisfies the given example:
// sum(1)(5)(10)
// CONSOLE:
//  1
//  6
//  16

//Solution
const SUM = NUMBER => {
    console.log(NUMBER)
    const a = NUM => {
        console.log(NUMBER += NUM)
        return a
    }
    return a
}

//Test
console.log(SUM(1)(5)(10))
