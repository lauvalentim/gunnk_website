// Função para alternar entre os conteúdos de "Projeto" e "Quem Cria"
function showTab(tabId) {
  const tabs = document.querySelectorAll('.tab-content');
  const buttons = document.querySelectorAll('.tab-btn');

  tabs.forEach(tab => {
    tab.classList.remove('active');
    tab.classList.add('hidden');
  });

  buttons.forEach(btn => {
    btn.classList.remove('active');
  });

  const selectedTab = document.getElementById(tabId);
  if (!selectedTab) {
    console.error(`Elemento com ID "${tabId}" não encontrado.`);
    return;
  }

  selectedTab.classList.add('active');
  selectedTab.classList.remove('hidden');

  // Marca botão como ativo
  const activeBtn = Array.from(buttons).find(btn => btn.getAttribute('onclick')?.includes(tabId));
  if (activeBtn) activeBtn.classList.add('active');

  // Aplica animação suave na exibição
  gsap.to(selectedTab, {
    opacity: 1,
    y: 0,
    scale: 1,
    duration: 0.5,
    ease: "back.out(1.7)"
  });
}

// Scroll suave para âncoras
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const destino = document.querySelector(this.getAttribute('href'));
    if (destino) {
      destino.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Revelar elementos ao rolar a página
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

// Ativação do botão glitch
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("glitch-toggle");

  toggle.addEventListener("click", () => {
    window.open("https://puginarug.com/", "_blank");
  });
});

// Mostrar conteúdo ao carregar
window.addEventListener("load", function () {
  document.body.classList.add("loaded");
});
