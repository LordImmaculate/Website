window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
    setTimeout(() => {
    loader.classList.add("loader-hidden");
    }, 200);
})

window.onload = function() {
    var mainElement = document.querySelector('.main');
    mainElement.classList.add('main-animate');
};