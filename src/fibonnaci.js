function *fibonacci(n, current = 0, next = 1) {
    if (n === 0) {
      return current;
    }
    yield current;
    yield *fibonacci(n-1, next, current + next);
  }

  console.log([...fibonacci(10)])