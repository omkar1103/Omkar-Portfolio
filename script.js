document.addEventListener("scroll", function () {
    const header = document.querySelector(".main-header");
    if (window.scrollY > 50) {
        header.classList.add("fixed-header");
    } else {3
        header.classList.remove("fixed-header");
    }
});

$(document).ready(function () {
    new Typed('#type-it', {
      strings: ['Web Developer', 'Frontend Developer', 'Java Developer'],
      typeSpeed: 100,
      loop: true
    });
  });


