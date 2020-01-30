function fact(n) {
  var res = 1;
  while (n > 0) {
    res *= n;
    n--;
    // console.log(n);
  }
  return res;
}

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

function changeOutput(objID) {
    htmlObj = document.getElementById(objID);
    // console.log('hello');
    var output = '';
    if (objID == 'factOutput') {
      output = fact(10);
      var res = "The factorial of 10 is: " + output;
      htmlObj.innerHTML = res;
      console.log(res);
    } else if (objID == 'fibOutput') {
      output = fibonacci(1200);
      var res = "The 1200th fibonacci number is: " + output;
      htmlObj.innerHTML = res;
      console.log(res);
    } else if (objID == "gcdOutput") {
      output = gcd(54, 88);
      var res = "The gcd between 54 and 88 is: " + output;
      htmlObj.innerHTML = res;
      console.log(res);
    } else {
      output = randomStudent(['erc', 'kaz', 'matt', 'mike', 'ray', 'sad']);
      var res = "And the random student is..." + output + "!";
      htmlObj.innerHTML = res;
      console.log(res);
    }
}
