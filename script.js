// This script handles dynamic glassmorphism and theme transitions based on user hover
const body = document.body;
const projectCard = document.querySelector('.project-card');
const assignmentCard = document.querySelector('.assignment-card');

// Reset function
function resetTheme() {
  body.style.background = '';
  body.style.backdropFilter = 'blur(12px)';
  body.style.webkitBackdropFilter = 'blur(12px)';
}

// Handle hover over project
projectCard.addEventListener('mouseenter', () => {
  body.style.background = 'linear-gradient(to left, rgba(0,140,255,0.2), rgba(255,255,255,0.05))';
});

// Handle hover over assignment
assignmentCard.addEventListener('mouseenter', () => {
  body.style.background = 'linear-gradient(to right, rgba(255,0,0,0.2), rgba(255,255,255,0.05))';
});

// Revert on mouse leave
[projectCard, assignmentCard].forEach(card => {
  card.addEventListener('mouseleave', resetTheme);
});
