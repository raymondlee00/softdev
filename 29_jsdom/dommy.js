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
  // console.log(e);
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
  lis[i].addEventListener("mouseout", () => {document.getElementById('h').innerHTML = "Hello World!"});
  lis[i].addEventListener("click", e => {
    // console.log(e);
    removeItem(e);
  });
}
