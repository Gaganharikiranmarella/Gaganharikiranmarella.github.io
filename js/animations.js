// animations.js
export function applyFloatingAnimations() {
  document.querySelectorAll('.img-fluid, .card, .btn').forEach(el => {
    el.classList.add('floating');
  });
}
