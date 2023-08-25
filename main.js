var userAgent = window.navigator.userAgent;
var paralax = document.getElementsByClassName("upper_wrapper");
var upper = document.getElementsByClassName("upper_wrapper");
var bottom =document.getElementsByClassName("bottom_wrapper");

if (userAgent.match(/iPad/i) || userAgent.match(/iPhone/i)) {
    paralax.classList.remove("paralax");
 paralax.classList.add("paralax_bck");
upper.classList.remove(".upper_wrapper");
 upper.classList.add(".bottom_wrapper_bck");
 bottom.classList.remove(".bottom_wrapper");
bottom.classList.add(".bottom_wrapper_bck");
 console.log("safariiiiiiiiiiii");
}
else{
console.log("not safariiiiiiiiii")
}