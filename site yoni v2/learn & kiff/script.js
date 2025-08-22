

document.querySelectorAll('.diaporama').forEach(diaporama => {
  const btnPrev       = diaporama.querySelector('.fleche.precedente');
  const btnNext       = diaporama.querySelector('.fleche.suivante');
  const diapositives  = Array.from(diaporama.querySelectorAll('.diapo'));
  let idx             = 0;

  const majDiapos = () => {
    diapositives.forEach((d, i) => {
      d.classList.toggle('active', i === idx);
    });
  };

  btnPrev.addEventListener('click', () => {
    idx = (idx - 1 + diapositives.length) % diapositives.length;
    majDiapos();
  });

  btnNext.addEventListener('click', () => {
    idx = (idx + 1) % diapositives.length;
    majDiapos();
  });

 
  majDiapos();
});


document.addEventListener("DOMContentLoaded", () => {
  // Sélection du logo et de la navbar
  const logo = document.querySelector('.logo');
  const nav = document.querySelector('nav');

  // Initialisation : logo en haut et invisible, navbar invisible
  logo.style.opacity = 0;
  logo.style.transform = 'translateY(-50px)';
  nav.style.opacity = 0;

  // Animation du logo : descente et apparition
  setTimeout(() => {
    logo.style.transition = 'transform 0.8s ease-out, opacity 0.8s ease-out';
    logo.style.opacity = 1;
    logo.style.transform = 'translateY(0)';
  }, 200);

  // Animation de la navbar : fade-in
  setTimeout(() => {
    nav.style.transition = 'opacity 1s ease-out';
    nav.style.opacity = 1;
  }, 600);
});
