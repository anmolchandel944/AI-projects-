// ai-script.js

// Fade-in animation when elements come into view
const fadeUps = document.querySelectorAll('.fade-up');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.1
});

fadeUps.forEach(el => observer.observe(el));
