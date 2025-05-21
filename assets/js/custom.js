document.addEventListener("DOMContentLoaded", function () {
  const sections = ["home", "services", "about", "portfolio", "contact"];
  const navLinks = document.querySelectorAll(".nav-link");

  function onScroll() {
    let scrollPos = window.scrollY + 80;
    sections.forEach((id, idx) => {
      const section = document.getElementById(id);
      if (
        section &&
        section.offsetTop <= scrollPos &&
        section.offsetTop + section.offsetHeight > scrollPos
      ) {
        navLinks.forEach((link) => link.classList.remove("active"));
        navLinks[idx].classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", onScroll);

  // Klik menu langsung aktif
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      navLinks.forEach((l) => l.classList.remove("active"));
      this.classList.add("active");
    });
  });
});
function showSlideInOnScroll() {
  document.querySelectorAll(".slide-in").forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 60) {
      el.classList.add("show");
    }
  });
}
window.addEventListener("scroll", showSlideInOnScroll);
window.addEventListener("DOMContentLoaded", showSlideInOnScroll);

// Jika klik menu tentang, animasi ulang
document.querySelectorAll('a[href="#about"]').forEach((link) => {
  link.addEventListener("click", function () {
    const img = document.querySelector("#about .slide-in");
    if (img) {
      img.classList.remove("show");
      void img.offsetWidth; // force reflow
      img.classList.add("show");
    }
  });
});
