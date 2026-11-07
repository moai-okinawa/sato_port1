document.getElementById('year').textContent = new Date().getFullYear();

const flightToggle = document.querySelector('.flight-toggle');
const flightStage = document.getElementById('pliers-stage');
// Keep playback available even when the device requests reduced motion.
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  flightStage.classList.add('flight-paused');
  flightToggle.setAttribute('aria-pressed', 'true');
  flightToggle.textContent = 'アニメーションを再生';
}
flightToggle.addEventListener('click', () => {
  const paused = flightStage.classList.toggle('flight-paused');
  flightToggle.setAttribute('aria-pressed', String(paused));
  flightToggle.textContent = paused ? 'アニメーションを再開' : 'アニメーションを停止';
});
