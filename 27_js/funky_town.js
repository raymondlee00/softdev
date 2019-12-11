function fibonacci(i) {
  return (
    (1 / Math.sqrt(5)) *
    (Math.pow((1 + Math.sqrt(5)) / 2, i) - Math.pow((1 - Math.sqrt(5)) / 2, i))
  );
}

function gcd(x, y) {
  if (x == 0) {
    return y;
  } else if (y == 0) {
    return x;
  }
  var dividend = x > y ? x : y;
  var divisor = x > y ? y : x;

  while (dividend % divisor != 0) {
    var res = dividend % divisor;

    var dummy = dividend % divisor;
    dividend = divisor;
    divisor = dummy;
    console.log(dividend % divisor);

    if (dividend % divisor == 0) {
      return res;
    }
  }
  //   return dividend % divisor;
}

function randomStudent(arr) {
    return arr[Math.floor(arr.length * Math.random())];
}
