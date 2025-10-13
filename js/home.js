// === SCROLL REVEAL ===
const revealScroll = () => {
  const elementos = document.querySelectorAll('.animar-scroll');
  const trigger = window.innerHeight * 0.85;

  elementos.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < trigger) {
      el.classList.add('ativo');
    }
  });
};

// === SCROLL SUAVE EM ÂNCORAS ===
const setupSmoothScroll = () => {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const destino = document.querySelector(link.getAttribute('href'));
      if (destino) {
        destino.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
};

// === BOTÃO DE LINK EXTERNO ===
const setupExternalButton = () => {
  const toggle = document.getElementById("glitch-toggle");
  if (toggle) {
    toggle.addEventListener("click", () => {
      window.open("https://radio.garden/search#google_vignette", "_blank");
    });
  }
};

// === INICIALIZAÇÃO ===
document.addEventListener("DOMContentLoaded", () => {
  revealScroll(); // executa no início
  setupSmoothScroll();
  setupExternalButton();
  window.addEventListener("scroll", revealScroll);
});

// === CLASSE 'loaded' NO BODY ===
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});
