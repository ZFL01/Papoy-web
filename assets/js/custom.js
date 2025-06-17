document.addEventListener("DOMContentLoaded", function () {
  // Smooth scroll dengan offset navbar
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (targetId.length > 1 && document.querySelector(targetId)) {
        e.preventDefault();
        const target = document.querySelector(targetId);
        const navbar = document.querySelector(".navbar.fixed-top");
        const offset = navbar ? navbar.offsetHeight + 16 : 80;
        const y = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    });
  });

  // Scrollspy akurat
  function updateActiveNav() {
  const sections = Array.from(document.querySelectorAll("section[id]"));
  const navbar = document.querySelector(".navbar.fixed-top");
  const offset = navbar ? navbar.offsetHeight : 64;
  const scrollPos = window.scrollY + offset + 1;

  let currentSection = sections[0];
  for (let i = 0; i < sections.length; i++) {
    const section = sections[i];
    const top = section.offsetTop;
    const bottom = top + section.offsetHeight;
    if (scrollPos >= top && scrollPos < bottom) {
      currentSection = section;
      break;
    }
    if (i === sections.length - 1 && scrollPos >= top) {
      currentSection = section;
    }
  }

  // HAPUS semua active dulu!
  document.querySelectorAll(".navbar-nav .nav-link").forEach(link => {
    link.classList.remove("active");
  });

  // Tambahkan active ke menu yang benar
  const id = currentSection.getAttribute("id");
  const navLink = document.querySelector(`.navbar-nav .nav-link[href="#${id}"]`);
  if (navLink) navLink.classList.add("active");
  }

  window.addEventListener("scroll", updateActiveNav);
  updateActiveNav();

  // Slide-in animasi
  function showSlideInOnScroll() {
    document.querySelectorAll(".slide-in, .slide-in-left").forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 60) {
        el.classList.add("show");
      }
    });
  }
  window.addEventListener("scroll", showSlideInOnScroll);
  showSlideInOnScroll();

  // Rainbow underline aktif saat load
  document.querySelector(".rainbow-underline")?.classList.add("active");

  // Animasi ulang gambar/about saat klik menu tentang
  document.querySelectorAll('a[href="#about"]').forEach((link) => {
    link.addEventListener("click", function () {
      const img = document.querySelector(
        "#about .slide-in, #about .slide-in-left"
      );
      if (img) {
        img.classList.remove("show");
        void img.offsetWidth;
        img.classList.add("show");
      }
    });
  });

  // Dark mode toggle (ganti icon dan gambar hero)
  const darkToggle = document.getElementById("toggle-dark");
  if (darkToggle) {
    darkToggle.addEventListener("click", function () {
      document.body.classList.toggle("dark-mode");
      const icon = this.querySelector("i");
      const heroesImg = document.getElementById("heroes-img");
      if (document.body.classList.contains("dark-mode")) {
        icon.classList.remove("bi-moon");
        icon.classList.add("bi-brightness-high");
        if (heroesImg) {
          heroesImg.src = "assets/img/ImgD.png";
          heroesImg.onload = animateHeroesImg;
        }
      } else {
        icon.classList.remove("bi-brightness-high");
        icon.classList.add("bi-moon");
        if (heroesImg) {
          heroesImg.src = "assets/img/Img.jpg";
          heroesImg.onload = animateHeroesImg;
        }
      }
    });
  }

  // Heroes animasi saat load/ganti gambar
  function animateHeroesImg() {
    const img = document.getElementById("heroes-img");
    if (!img) return;
    img.classList.remove("show");
    void img.offsetWidth;
    img.classList.add("show");
  }
  animateHeroesImg();

  // Slider produk Papoy
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
  if (slides.length > 0) {
    showSlide(current); // tampilkan pertama kali
    setInterval(() => {
      current = (current + 1) % slides.length;
      showSlide(current);
    }, 3000); // Ganti setiap 3 detik
  }
});
