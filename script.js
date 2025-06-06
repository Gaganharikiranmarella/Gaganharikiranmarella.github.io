document.addEventListener('DOMContentLoaded', () => {
  const projectsSection = document.getElementById('projects-section');
  const assignmentsSection = document.getElementById('assignments-section');
  const body = document.body;

  projectsSection.addEventListener('mouseenter', () => {
    body.classList.add('projects-hovered');
    body.classList.remove('assignments-hovered');
  });
  projectsSection.addEventListener('mouseleave', () => {
    body.classList.remove('projects-hovered');
  });

  assignmentsSection.addEventListener('mouseenter', () => {
    body.classList.add('assignments-hovered');
    body.classList.remove('projects-hovered');
  });
  assignmentsSection.addEventListener('mouseleave', () => {
    body.classList.remove('assignments-hovered');
  });
});
