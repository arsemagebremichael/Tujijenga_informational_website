const navToggle = document.querySelector(".nav-toggle")
const links = document.querySelector(".links")
// const showLinks = document.querySelector("show-links")

navToggle.addEventListener("click",function(){
    links.classList.toggle("show-links")
})