function revealScroll() {
    const elementos = document.querySelectorAll('.animar-scroll');
    const trigger = window.innerHeight * 0.85;
  
    elementos.forEach(el => {
      const top = el.getBoundingClientRect().top;
      if (top < trigger) {
        el.classList.add('ativo');
      }
    });
  }
  
  window.addEventListener('scroll', revealScroll);
  
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const destino = document.querySelector(this.getAttribute('href'));
      if (destino) {
        destino.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

  window.addEventListener("load", function () {
    document.body.classList.add("loaded");
  });

  document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("glitch-toggle");
  
    toggle.addEventListener("click", () => {
      window.open("https://stellarium-web.org/", "_blank");
    });
  });
  