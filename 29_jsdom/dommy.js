function fibRecur(i) {
  if (i < 2) {
    return i;
  }
  fibRecur(i - 1) + fibRecur(i - 2);
}

function fibonacci(i) {
  return (
    (1 / Math.sqrt(5)) *
    (Math.pow((1 + Math.sqrt(5)) / 2, i) - Math.pow((1 - Math.sqrt(5)) / 2, i))
  );
}

// var dp = [0, 1];
// function fibDP(n) {
//     var counter = dp.length;
//     while (counter < n) {
//         dp[counter] = dp[counter - 1] + dp[counter - 2];
//         counter++;
//     }
//     return dp[n];
// }

var changeHeading = function(e) {
  var h = document.getElementById("h");
  const res = e["target"]["innerText"];
  h.innerHTML = res;
  console.log(res);
  console.log(e);
};

var removeItem = function(e) {
  console.log(e["target"]["firstChild"]);
  e["target"].remove();
};

var lis = document.getElementsByTagName("li");

for (var i = 0; i < lis.length; i++) {
  lis[i].addEventListener("mouseover", e => {
    changeHeading(e);
  });
  lis[i].addEventListener("mouseout", () => {
    document.getElementById("h").innerHTML = "Hello World!";
  });
  lis[i].addEventListener("click", e => {
    // console.log(e);
    removeItem(e);
  });
}

// var bbtn = document.getElementById("b");
// bbtn.addEventListener("click", () => {
//     var li = document.createElement("li");
//     var thelist = document.getElementById("thelist");
//     var numLi = thelist.getElementsByTagName('li').length;

//     thelist.appendChild(li)
// });

var addItem = function(e) {
  var list = document.getElementById("thelist");
  var item = document.createElement("li");
  item.innerText = "WORD";
  item.onmouseover = () => {
    document.getElementById("h").innerText = "WORD";
  };
  list.appendChild(item);
};

var button = document.getElementById("b");
button.addEventListener("click", addItem);

// var fbbtn = document.getElementById("fb");
// fbbtn.addEventListener("click", () => {
//     var li = crea
// });

var addFib = function(e) {
  console.log(e);
  var list = document.getElementById("fiblist");
  var item = document.createElement("li");
  var numLi = list.getElementsByTagName('li').length;
  item.innerText = fibonacci(numLi);
  item.onmouseover = () => {
    document.getElementById("h").innerText = "WORD";
  };
  item.onclick = () => {
    item.remove();
  }
  list.appendChild(item);
};

var addFib2 = function(e) {
  console.log(e);
};

var fb = document.getElementById("fb");
fb.addEventListener("click", addFib);
