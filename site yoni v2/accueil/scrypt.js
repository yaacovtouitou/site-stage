document.addEventListener("DOMContentLoaded", () => {

  /* ===== Logo et Navbar ===== */
  const logo = document.querySelector('.logo');
  const nav = document.querySelector('nav');

  logo.style.opacity = 0;
  logo.style.transform = 'translateY(-50px)';
  nav.style.opacity = 0;

  setTimeout(() => {
    logo.style.transition = 'transform 0.8s ease-out, opacity 0.8s ease-out';
    logo.style.opacity = 1;
    logo.style.transform = 'translateY(0)';
  }, 200);

  setTimeout(() => {
    nav.style.transition = 'opacity 1s ease-out';
    nav.style.opacity = 1;
  }, 600);

  /* ===== Bannière ===== */
  const banniere = document.querySelector('.banniere');
  banniere.style.opacity = 0;
  banniere.style.transform = 'translateX(100%)';
  setTimeout(() => {
    banniere.style.transition = 'transform 1s ease-out, opacity 1s ease-out';
    banniere.style.opacity = 1;
    banniere.style.transform = 'translateX(0)';
  }, 1000);

  /* ===== Texte bannière ===== */
  const texteBanniere = document.querySelectorAll('.texte-sur-banniere p');
  texteBanniere.forEach((p, i) => {
    p.style.opacity = 0;
    p.style.transform = 'rotate(-15deg) translateY(50px)';
    setTimeout(() => {
      p.style.transition = 'transform 1s ease-out, opacity 1s ease-out';
      p.style.opacity = 1;
      p.style.transform = 'rotate(0deg) translateY(0)';
    }, 1300 + i * 300);
  });

  /* ===== Cartes avec LazyLoad ===== */
  const cartes = document.querySelectorAll('.carte');
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        const carte = entry.target;
        carte.style.opacity = 0;
        carte.style.transform = 'translateX(100%)';
        setTimeout(() => {
          carte.style.transition = 'transform 0.8s ease-out, opacity 0.8s ease-out';
          carte.style.opacity = 1;
          carte.style.transform = 'translateX(0)';
        }, 100);
        obs.unobserve(carte);
      }
    });
  }, { rootMargin: '100px 0px 100px 0px' });

  cartes.forEach(carte => observer.observe(carte));

  /* ===== Particles simple ===== */
  const particleCanvas = document.createElement('canvas');
  document.body.appendChild(particleCanvas);
  particleCanvas.style.position = 'absolute';
  particleCanvas.style.top = '0';
  particleCanvas.style.left = '0';
  particleCanvas.style.width = '100%';
  particleCanvas.style.height = '100%';
  particleCanvas.style.zIndex = '-1';

  const ctx = particleCanvas.getContext('2d');
  particleCanvas.width = window.innerWidth;
  particleCanvas.height = window.innerHeight;

  class Particle {
    constructor(){
      this.x = Math.random()*particleCanvas.width;
      this.y = Math.random()*particleCanvas.height;
      this.vx = Math.random()*1.5 - 0.75;
      this.vy = Math.random()*1.5 - 0.75;
      this.size = Math.random()*3+1;
    }
    update(){
      this.x += this.vx; this.y += this.vy;
      if(this.x<0||this.x>particleCanvas.width) this.vx*=-1;
      if(this.y<0||this.y>particleCanvas.height) this.vy*=-1;
    }
    draw(){
      ctx.fillStyle='rgba(255,255,255,0.7)';
      ctx.beginPath();
      ctx.arc(this.x,this.y,this.size,0,Math.PI*2);
      ctx.fill();
    }
  }

  const particles = Array.from({length:100},()=>new Particle());
  function animateParticles(){
    ctx.clearRect(0,0,particleCanvas.width,particleCanvas.height);
    particles.forEach(p=>{p.update();p.draw();});
    requestAnimationFrame(animateParticles);
  }
  animateParticles();

  /* ===== Modal Popup test ===== */
  window.openModal = (content) => {
    const modal = document.createElement('div');
    modal.style.position='fixed';
    modal.style.top='0';
    modal.style.left='0';
    modal.style.width='100vw';
    modal.style.height='100vh';
    modal.style.background='rgba(0,0,0,0.7)';
    modal.style.display='flex';
    modal.style.justifyContent='center';
    modal.style.alignItems='center';
    modal.style.zIndex='9999';
    modal.innerHTML=`<div style="background:#fff;padding:2rem;border-radius:10px;max-width:500px;">${content}<button id="closeModal">Fermer</button></div>`;
    document.body.appendChild(modal);
    modal.querySelector('#closeModal').addEventListener('click',()=>modal.remove());
  };
});
