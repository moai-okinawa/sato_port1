document.getElementById('year').textContent = new Date().getFullYear();

const flightToggle = document.querySelector('.flight-toggle');
const flightStage = document.getElementById('pliers-stage');
flightToggle.addEventListener('click', () => {
  const paused = flightStage.classList.toggle('flight-paused');
  flightToggle.setAttribute('aria-pressed', String(paused));
  flightToggle.textContent = paused ? 'アニメーションを再開' : 'アニメーションを停止';
});
