var userAgent = window.navigator.userAgent;
var paralax = document.getElementsByClassName("upper_wrapper");
var upper = document.getElementsByClassName("upper_wrapper");
var bottom =document.getElementsByClassName("bottom_wrapper");

if (userAgent.match(/iPad/i) || userAgent.match(/iPhone/i)) {
 paralax.classList.add("attached")
 upper.classList.add("attached")
 bottom.classList.add("attached")
 console.log("safariiiiiiiiiiii")
}
else{
console.log("not safariiiiiiiiii")
}