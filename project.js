// Menu hamburger pour mobile
const menuIcon = document.getElementById("menu-icon");
const navbar = document.querySelector(".navbar");

if (menuIcon && navbar) {
  menuIcon.addEventListener("click", (e) => {
    e.stopPropagation();
    navbar.classList.toggle("active");

    // Change l'icône
    if (navbar.classList.contains("active")) {
      menuIcon.classList.remove("fa-bars");
      menuIcon.classList.add("fa-times");
    } else {
      menuIcon.classList.remove("fa-times");
      menuIcon.classList.add("fa-bars");
    }
  });

  // Ferme le menu quand on clique sur un lien (sauf l'icône menu)
  const navLinks = document.querySelectorAll(".navbar a:not(#menu-icon)");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navbar.classList.remove("active");
      menuIcon.classList.remove("fa-times");
      menuIcon.classList.add("fa-bars");
    });
  });

  // Ferme le menu si on clique en dehors
  document.addEventListener("click", (e) => {
    const target = e.target;
    if (
      target instanceof Node &&
      !navbar.contains(target) &&
      target !== menuIcon
    ) {
      navbar.classList.remove("active");
      menuIcon.classList.remove("fa-times");
      menuIcon.classList.add("fa-bars");
    }
  });
}
