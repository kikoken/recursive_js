const factorial = n => {
    if(n===0 || n === 1) return 1

    return n * factorial(n-1)
}

console.log(factorial(100))

// ES6 clean syntax
const factorialCal = n => (n === 0 || n === 1) ? 1 : factorialCal(n - 1) * n
//console.log(factorialCal(11))

// Accumulator param for avoid overflow stack
const factorialOverflow = (num, accumulator) => num <= 1 ? accumulator || 1 : factorialOverflow(--num, num * (accumulator || num + 1));
//console.log(factorialOverflow(11))


// ES6 no recursion
const factorialNoRecursion = n => Array.from({length: n}, (v,k) => k + 1).reduce((acc,cur) => acc*cur, 1)
//console.log(factorialNoRecursion(11))

// ES6 bigInt solution
const longFactorial = n => {
    let bigInt = BigInt(n)
    let factorial = 1n
    for(let i = 0n; i < bigInt; i++)
        factorial *= bigInt - i
    
    return String(factorial)
}
//console.log(longFactorial(11))
