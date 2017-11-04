# y-combinator-node
y-combinator-node is an implementation of **Y combinator** in JavaScript for tail call optimization.

## Examples
```js
import { Y } from 'y-combinator-node';

const fibonacci = Y(fib => (n => (n <= 2 ? 1 : fib(n - 1) + fib(n - 2))))

console.log( fibonacci(10) )
// 55

const factorial = Y(f => (n => n === 0 ? 1 : n * f(n - 1)))

console.log( factorial(10) )
// 3628800

```

## Installation

```
npm install --save y-combinator-node
```

## Usage
You can import from `y-combinator-node`:

```js
import { Y } from 'y-combinator-node';
// or
const { Y } = require('y-combinator-node');
```
