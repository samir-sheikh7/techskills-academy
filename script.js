
const links = document.querySelectorAll(".menu-link");

links.forEach(function(link) {
  link.addEventListener("click", function(e) {
    e.preventDefault(); // default jump stop karega

    
    const targetId = this.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    // smooth scroll
    targetSection.scrollIntoView({
      behavior: "smooth"
    });
  });
});

