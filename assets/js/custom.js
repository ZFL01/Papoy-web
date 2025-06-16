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
function showSlideInOnScroll() {
  document.querySelectorAll(".slide-in, .slide-in-left").forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 60) {
      el.classList.add("show");
    }
  });
}
window.addEventListener("scroll", showSlideInOnScroll);
window.addEventListener("DOMContentLoaded", showSlideInOnScroll);

window.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".underline-animate")?.classList.add("active");
});
document.querySelectorAll('a[href="#about"]').forEach((link) => {
  link.addEventListener("click", function () {
    const img = document.querySelector("#about .slide-in-left");
    if (img) {
      img.classList.remove("show");
      void img.offsetWidth;
      img.classList.add("show");
    }
  });
});
window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.rainbow-underline')?.classList.add('active');
});
window.addEventListener('scroll', function() {
  const sections = document.querySelectorAll('section[id]');
  const scrollPos = window.scrollY + 100; // offset navbar
  let found = false;
  sections.forEach(section => {
    const top = section.offsetTop;
    const bottom = top + section.offsetHeight;
    const id = section.getAttribute('id');
    const navLink = document.querySelector(`a[href="#${id}"]`);
    if (scrollPos >= top && scrollPos < bottom) {
      navLink?.classList.add('active');
      found = true;
    } else {
      navLink?.classList.remove('active');
    }
  });

  // Jika sudah mentok ke bawah, paksa menu terakhir aktif
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 2) {
    sections.forEach(section => {
      const id = section.getAttribute('id');
      const navLink = document.querySelector(`a[href="#${id}"]`);
      navLink?.classList.remove('active');
    });
    const lastSection = sections[sections.length - 1];
    const lastId = lastSection.getAttribute('id');
    const lastNavLink = document.querySelector(`a[href="#${lastId}"]`);
    lastNavLink?.classList.add('active');
  }
});

  const slides = document.querySelectorAll(".papoy-slide");
  let current = 0;

  function showSlide(index) {
    slides.forEach((img, i) => {
      img.classList.remove("show", "hide", "d-none");
      if (i === index) {
        img.classList.add("show");
      } else {
        img.classList.add("hide");
      }
    });
  }

  showSlide(current); // tampilkan pertama kali

  setInterval(() => {
    current = (current + 1) % slides.length;
    showSlide(current);
  }, 3000); // Ganti setiap 3 detik
