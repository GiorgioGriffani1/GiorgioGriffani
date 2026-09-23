// Widget "Parla con Giorgio" — iframe verso il chatbot AI (thefox-1fi.pages.dev)
// Stesso comportamento su ogni pagina del sito: bottone fisso in basso a destra,
// popup su desktop, apertura in nuova scheda su mobile (schermi stretti non
// hanno spazio per un popup di 380px senza coprire il contenuto).
(function () {
  const btn = document.getElementById('gg-chat-btn');
  const popup = document.getElementById('gg-chat-popup');
  const tooltip = document.getElementById('gg-tooltip');
  const iframe = document.getElementById('gg-iframe');
  if (!btn || !popup || !iframe) return;

  let open = false, loaded = false, tipTimer;
  setTimeout(() => {
    tooltip.classList.add('show');
    tipTimer = setTimeout(() => tooltip.classList.remove('show'), 4000);
  }, 3000);

  btn.addEventListener('click', () => {
    if (window.innerWidth <= 768) {
      window.open('https://thefox-1fi.pages.dev/', '_blank');
      return;
    }
    open = !open;
    tooltip.classList.remove('show');
    clearTimeout(tipTimer);
    if (open) {
      if (!loaded) { iframe.src = iframe.dataset.src; loaded = true; }
      popup.style.display = 'block';
      requestAnimationFrame(() => popup.classList.add('open'));
      btn.textContent = '✕'; btn.style.fontSize = '22px';
    } else {
      popup.classList.remove('open');
      setTimeout(() => { popup.style.display = 'none'; }, 250);
      btn.textContent = '🦊'; btn.style.fontSize = '28px';
    }
  });

  document.addEventListener('click', (e) => {
    if (open && !popup.contains(e.target) && e.target !== btn) {
      open = false;
      popup.classList.remove('open');
      setTimeout(() => { popup.style.display = 'none'; }, 250);
      btn.textContent = '🦊'; btn.style.fontSize = '28px';
    }
  });
})();
