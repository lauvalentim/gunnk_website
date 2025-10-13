// === SCROLL REVEAL ===
function revealScroll() {
  const elements = document.querySelectorAll('.animar-scroll');
  const trigger = window.innerHeight * 0.85;

  elements.forEach((el, i) => {
    const top = el.getBoundingClientRect().top;
    if (top < trigger) {
      el.style.transitionDelay = `${i * 0.2}s`;
      el.classList.add('ativo');
    }
  });
}

window.addEventListener('scroll', revealScroll);

// === NAVEGAÇÃO SUAVE ===
function setupSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const destino = document.querySelector(this.getAttribute('href'));
      if (destino) {
        destino.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

// === LOAD CLASS ===
function markPageLoaded() {
  window.addEventListener('load', () => {
    document.body.classList.add('loaded');
  });
}

// === BOTÃO EXTERNO ===
function setupExternalButton() {
  const toggle = document.getElementById("glitch-toggle");
  if (toggle) {
    toggle.addEventListener("click", () => {
      window.open("https://www.nyan.cat/index.php?cat=elevator", "_blank");
    });
  }
}

// === ESCONDER HEADER AO ROLAR ===
function setupHideHeaderOnScroll() {
  let lastScrollTop = 0;
  const header = document.querySelector(".header-custom");

  window.addEventListener("scroll", function () {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
      header.style.transform = "translateY(-100%)";
    } else {
      header.style.transform = "translateY(0)";
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  }, false);
}

// === FADE SLIDE UP ===
function setupFadeSlideUp() {
  const sections = document.querySelectorAll(".fade-slide-up");

  const observer = new IntersectionObserver(entries => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        entry.target.style.transitionDelay = `${i * 0.15}s`;
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.3 });

  sections.forEach(section => observer.observe(section));
}

// === MARCA-TEXTO ===
function setupHighlightAnimation() {
  const highlights = document.querySelectorAll('.highlight');

  const observer = new IntersectionObserver(entries => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting && entry.intersectionRatio >= 0.95) {
        entry.target.style.transitionDelay = `${i * 0.25}s`;
        entry.target.classList.add('animate-highlight');
      } else {
        entry.target.classList.remove('animate-highlight');
        entry.target.classList.add('highlight-inactive');
      }
    });
  }, {
    threshold: [0.95]
  });

  highlights.forEach(span => {
    span.classList.add('highlight-inactive');
    observer.observe(span);
  });
}

// === ELEMENTOS VISUAIS ===
function setupVisualAnimations() {
  const visuals = document.querySelectorAll('.fade-visual');
  const observer = new IntersectionObserver(entries => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        entry.target.style.transitionDelay = `${i * 0.15}s`;
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.4 });

  visuals.forEach(el => {
    el.classList.add('invisible');
    observer.observe(el);
  });
}

// === SINCRONIZAÇÃO TEXTO + VÍDEO ===
function setupFadeSync() {
  const syncBlocks = document.querySelectorAll('.fade-sync');
  const observer = new IntersectionObserver(entries => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        entry.target.style.transitionDelay = `${i * 0.2}s`;
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.6 });

  syncBlocks.forEach(el => {
    el.classList.add('fade-sync-init');
    observer.observe(el);
  });
}

// === SCROLL PROGRESSIVO DA SCENE2 ===
function setupScene2ScrollSwap() {
  const steps = document.querySelectorAll('.img-step');
  const container = document.querySelector('.scroll-container');
  const wrapper = document.querySelector('.scene2-wrapper');

  if (container && steps.length) {
    steps.forEach(step => {
      step.style.transform = 'none';
    });

    function updateImageOnScroll() {
      const scrollY = window.scrollY;
      const containerTop = container.offsetTop;
      const containerHeight = container.offsetHeight;
      const relativeScroll = scrollY - containerTop;
      const index = Math.floor((relativeScroll / containerHeight) * steps.length);

      steps.forEach((step, i) => {
        step.classList.toggle('active', i === index);
      });

      if (wrapper) {
        const trigger = containerTop + containerHeight * 0.1;
        if (scrollY > trigger) {
          wrapper.style.opacity = 1;
        } else {
          wrapper.style.opacity = 0;
        }
      }

      const scene2 = document.querySelector('.scene2');
      if (scene2) {
        const scene2Rect = scene2.getBoundingClientRect();
        const scene2VisibleRatio = 1 - (scene2Rect.top / window.innerHeight);
      }
    }

    window.addEventListener('scroll', updateImageOnScroll);
    updateImageOnScroll();
  }

  // === Desfoque leve no final da scene1 ===
  const scene1 = document.querySelector(".scene1");
  if (scene1) {
    const blurOverlay = document.createElement("div");
    blurOverlay.style.position = "absolute";
    blurOverlay.style.bottom = "0";
    blurOverlay.style.left = "0";
    blurOverlay.style.width = "100%";
    blurOverlay.style.height = "120px";
    blurOverlay.style.background = "linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.6))";
    blurOverlay.style.zIndex = "3";
    blurOverlay.style.pointerEvents = "none";
    scene1.appendChild(blurOverlay);
  }

  // === Transição com efeito TV entre scene9 e scene10 ===
  const scene10 = document.querySelector('.scene10');
  const tvTransition = document.createElement('div');
  tvTransition.classList.add('tv-transition');
  document.body.appendChild(tvTransition);

  const observerTV = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        tvTransition.classList.add('active');
        setTimeout(() => {
          tvTransition.classList.remove('active');
        }, 800);
      }
    });
  }, { threshold: 0.6 });

  if (scene10) observerTV.observe(scene10);
}

// === INIT ALL ===
document.addEventListener("DOMContentLoaded", () => {
  setupSmoothScroll();
  setupExternalButton();
  setupFadeSlideUp();
  setupHighlightAnimation();
  setupVisualAnimations();
  setupFadeSync();
  setupScene2ScrollSwap();
  setupHideHeaderOnScroll();
  //markPageLoaded();
});
