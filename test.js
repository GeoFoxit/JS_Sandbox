const a = [1, 2, 3, 4, 5, 6]
const b = [6, 5, 4, 3, 2, 1]
const c = [1, 6, 5, 10, 8, 7]
const d = [1, 2, 10, 2, 4, 6]

const calcMaxRevenue = arr => {
    const maxPrice = Math.max(...arr)
    const indexOfMaxValue = arr.indexOf(maxPrice)
    let revenue = 0
    for (let i = 0; i < indexOfMaxValue; i++) revenue += maxPrice - arr[i]
    return revenue += arr.length - 1 === indexOfMaxValue
        ? 0
        : calcMaxRevenue(arr.splice(indexOfMaxValue + 1))
}

console.log(calcMaxRevenue(a))
console.log(calcMaxRevenue(b))
console.log(calcMaxRevenue(c))
console.log(calcMaxRevenue(d))



const SUM = NUMBER => {

    console.log(NUMBER)

    const a = NUM => {
        console.log(NUMBER += NUM)
        return a
    }

    return a
}

console.log(SUM(1)(5)(10))
