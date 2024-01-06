var typed = new Typed(".text", {
    strings: ["Website Designer.", "Front-End Developer."],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});


var loader = document.getElementsByClassName("loader")[0];

window.addEventListener("load", function() {
    loader.style.display = "none";
})


