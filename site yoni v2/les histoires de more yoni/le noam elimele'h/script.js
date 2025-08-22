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
