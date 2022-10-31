function reveal() {
    let reveal = document.querySelectorAll(".reveal");
reveal.forEach((reveal)=> {
    let windowheight = window.innerHeight;
    let elementop = reveal.getBoundingClientRect().top;
    let elemenvisible = 100;

    if (elementop< windowheight - elemenvisible) {
        reveal.classList.add("active");
    }else {reveal.classList.remove("active")
    }
});
}
window.addEventListener("scroll", reveal);