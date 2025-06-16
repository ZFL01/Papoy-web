document.addEventListener("DOMContentLoaded", function () {
  // Smooth scroll dengan offset navbar
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId.length > 1 && document.querySelector(targetId)) {
        e.preventDefault();
        const target = document.querySelector(targetId);
        const navbar = document.querySelector('.navbar.fixed-top');
        const offset = navbar ? navbar.offsetHeight + 16 : 80;
        const y = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    });
  });

  // Scrollspy akurat
  function updateActiveNav() {
    const sections = Array.from(document.querySelectorAll('section[id]'));
    const navbar = document.querySelector('.navbar.fixed-top');
    const offset = navbar ? navbar.offsetHeight + 16 : 80;
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

    document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
      link.classList.remove('active');
    });
    const id = currentSection.getAttribute('id');
    const navLink = document.querySelector(`.navbar-nav .nav-link[href="#${id}"]`);
    if (navLink) navLink.classList.add('active');

    // Jika mentok ke bawah, paksa menu terakhir aktif
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 2) {
      document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
        link.classList.remove('active');
      });
      const lastSection = sections[sections.length - 1];
      const lastId = lastSection.getAttribute('id');
      const lastNavLink = document.querySelector(`.navbar-nav .nav-link[href="#${lastId}"]`);
      if (lastNavLink) lastNavLink.classList.add('active');
    }
  }

  window.addEventListener('scroll', updateActiveNav);
  window.addEventListener('DOMContentLoaded', updateActiveNav);

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
  window.addEventListener("DOMContentLoaded", showSlideInOnScroll);

  // Rainbow underline aktif saat load
  document.querySelector('.rainbow-underline')?.classList.add('active');

  // Animasi ulang gambar/about saat klik menu tentang
  document.querySelectorAll('a[href="#about"]').forEach((link) => {
    link.addEventListener("click", function () {
      const img = document.querySelector("#about .slide-in, #about .slide-in-left");
      if (img) {
        img.classList.remove("show");
        void img.offsetWidth;
        img.classList.add("show");
      }
    });
  });

  // Sembunyikan menu tertentu di home, tampilkan saat scroll
  // Contoh: .nav-layanan
  const navLayanan = document.querySelector('.nav-layanan');
  if (navLayanan) {
    function toggleLayananMenu() {
      if (window.scrollY > 100) {
        navLayanan.style.display = 'block';
      } else {
        navLayanan.style.display = 'none';
      }
    }
    window.addEventListener('scroll', toggleLayananMenu);
    toggleLayananMenu();
  }
});