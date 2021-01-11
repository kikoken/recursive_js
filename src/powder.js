const powder = (a,b) => {
    if(b === 0) return 1
    return a * powder(a, b - 1)

}

console.log(powder(2,3))