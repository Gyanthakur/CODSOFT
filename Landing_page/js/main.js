var navbar = document.querySelector(".navbar");
window.onscroll = () =>
{
    this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
}
const navMenu = document.querySelector(".menu");
navTogle = document.querySelector(".menu-btn");
if(navTogle)
{
    navTogle.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    })
}
const navLink = document.querySelectorAll(".nav-link");
function linkAction()
{
    const navMenu = document.querySelector(".menu");
    navMenu.classList.remove("active")
}
navLink.forEach(n => n.addEventListener("click", linkAction))
var pic = document.querySelector("#main-shoe");
var cyan = document.querySelector(".cyan");
var purple = document.querySelector(".purple");
var blue = document.querySelector(".blue");
var pink = document.querySelector(".pink");
var green = document.querySelector(".green");
var red = document.querySelector(".red");
const colors =document.querySelectorAll(".color");
var info = [
    {
        src: "images/cyan.png"
    },
    {
        src: "images/purple.png"
    },
    {
        src: "images/blue.png"
    },
    {
        src: "images/pink.png"
    },
    {
        src: "images/green.png"
    },
    {
        src: "images/red.png"
    }
]
cyan.addEventListener("click",function()
{
    pic.src = info[0].src;
})
purple.addEventListener("click",function()
{
    pic.src = info[1].src;
})
blue.addEventListener("click",function()
{
    pic.src = info[2].src;
})
pink.addEventListener("click",function()
{
    pic.src = info[3].src;
})
green.addEventListener("click",function()
{
    pic.src = info[4].src;
})
red.addEventListener("click",function()
{
    pic.src = info[5].src;
})
function color()
{
    colors.forEach(c => c.classList.remove('active'));
    this.classList.add('active');
}
colors.forEach(c => c.addEventListener('click', color));