function init() {
  var date = new Date().getFullYear();
  document.getElementById("year").innerHTML = date;
}

window.addEventListener("load", function () {
  init();
});
