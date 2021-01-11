const container = []

const countDown = n => {
    if (!n) return container

    container.push(n)
    countDown(n-1)
}

countDown(10)
console.log(container)

// ES6 solution
const decrement = Array.from(Array(10), (_,x) => x + 1).reverse()

console.log(decrement)