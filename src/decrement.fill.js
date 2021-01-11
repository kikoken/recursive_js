const container = []

const countDown = n => {
    if (!n) return container

    container.push(n)
    countDown(n-1)
}

countDown(10)
console.log(container)

// ES6 solution
const decrement = n => Array.from(Array(n), (_,x) => x + 1).reverse()

console.log(decrement)