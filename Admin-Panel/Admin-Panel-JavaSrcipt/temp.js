let firstName = document.getElementById("firstName");

let getArray = localStorage.getItem("take");
let arr = JSON.parse(getArray);
for (let i = 0; i < arr.length; i++) {
  firstName.innerHTML = "Bye Bye!" + "\n" + 'See You Again';
}

function start() {
  var t = setTimeout(function () {
    window.location = "/login.html";
  }, 7000);
}