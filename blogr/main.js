/*
var nav = document.getElementsByTagName("h3");
for (let i = 0; i >= nav.length ; 1++)
var navmenu = document.getElementsByTagName("ul");
nav[i].addEventListener("click", () => {
    alert("you clicked h3");
    navmenu.style.display="block";
    
})
*/
var h =document.getElementsByTagName("h3")[0];
var ul = document.getElementsByTagName("ul")[0];
h.addEventListener("click", () => {
    ul.style.display = "block";
})
var hh =document.getElementsByTagName("h3")[1];
var ull = document.getElementsByTagName("ul")[1];
hh.addEventListener("click", () => {
    ull.style.display = "block";
})
var hhh =document.getElementsByTagName("h3")[2];
var ulll = document.getElementsByTagName("ul")[2];
hhh.addEventListener("click", () => {
    ulll.style.display = "block";
})
var toggleBtn = document.getElementById("togglebtn");
var nav = document.querySelector(".menu");
toggleBtn.addEventListener("click", () => {
    nav.classList.toggle("open");
    if (nav.classList.cointains("open") ){
        toggleBtn.src = "images/icon-close.svg";
    }
    else{
        toggleBtn.src = "images/icon-hamburger.svg";
    }
}) 