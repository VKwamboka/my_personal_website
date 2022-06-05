// const h2 = document.createElement("h2");
// h2.textContent = "This content added by JavaScript";
// document.querySelector("body").appendChild(h2);
window.onload = function () {
    document.body.className = '';
}
window.ontouchmove = function () {
    return false;
}
window.onorientationchange = function () {
    document.body.scrollTop = 0;
}
window.addEventListener("load", function() {
    alert("Welcome!");
})

function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "block") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }