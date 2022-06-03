var page = document.querySelector(".body");
var themeButton = document.querySelector(".themeButton");

themeButton.onclick = function() {
page.classList.toggle("lightTheme");
page.classList.toggle("darkTheme");
};


var burger = document.getElementById("mi");
var mobNav = document.getElementById("mn");

burger.onclick = function() {
burger.classList.toggle("_active");
mobNav.classList.toggle("_active");
};