// JavaScript

// Remplace tout le contenu de script.js par ça :

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

  // initialisation
  majDiapos();
});
