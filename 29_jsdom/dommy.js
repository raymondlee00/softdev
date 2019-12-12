function fibonacci(i) {
  return (
    (1 / Math.sqrt(5)) *
    (Math.pow((1 + Math.sqrt(5)) / 2, i) - Math.pow((1 - Math.sqrt(5)) / 2, i))
  );
}

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
};

var addFib2 = function(e) {
    console.log(e);

};
