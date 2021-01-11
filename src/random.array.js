// fill array with random numbers
const container = []
const min = 10

const fillRandomArray = () => {
    let num = Math.floor(Math.random()*100)
    
    if(container.length < min) {
        container.push(num)
        fillRandomArray()
    }  
}

fillRandomArray()
console.log(container)

// functional solution

const containerRandom = new Array(min).fill(0).map(item => Math.floor(Math.random()*100))
console.log(containerRandom)