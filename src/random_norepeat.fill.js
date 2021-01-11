// Fill array with numbers no repeat
const container = []
const min = 10

const is_exist = (item) => {
    for (i=0; i < container.length; i++)
        if(container[i] === item) return true
    
    return false
}

const randomFillArray = () => {
    let num = Math.floor(Math.random()*100)

    if(container.length < min) {
        if(!is_exist(num))
            container.push(num)
        randomFillArray()
    }
}

randomFillArray()
console.log(container)


// functional solution
const containerFill = () => {
    let numbers = new Set
    while(numbers.size < min) numbers.add(Math.floor(Math.random()*100))

    return Array.from(numbers)
}

console.log(containerFill())