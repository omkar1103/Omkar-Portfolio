document.addEventListener("scroll", function () {
    const header = document.querySelector(".main-header");
    if (window.scrollY > 50) { // Adjust the scroll position as needed
        header.classList.add("fixed-header");
    } else {
        header.classList.remove("fixed-header");
    }
});
