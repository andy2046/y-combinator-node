const { Y } = require('../dist')

const fibonacci = Y(fib => (n => (n <= 2 ? 1 : fib(n - 1) + fib(n - 2))))

console.log( fibonacci(10) )
// 55

const factorial = Y(f => (n => n === 0 ? 1 : n * f(n - 1)))

console.log( factorial(10) )
// 3628800
