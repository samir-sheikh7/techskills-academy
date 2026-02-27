// sabhi menu links select karo
const links = document.querySelectorAll(".menu-link");

// har link par click event lagao
links.forEach(function(link) {
  link.addEventListener("click", function(e) {
    e.preventDefault(); // default jump stop karega

    // target section ka id lo
    const targetId = this.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    // smooth scroll
    targetSection.scrollIntoView({
      behavior: "smooth"
    });
  });
});
