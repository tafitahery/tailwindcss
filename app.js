const humberger = document.querySelector('#humberger');
const menu = document.querySelector('#menu');

humberger.addEventListener('click', () => {
  menu.classList.toggle('hidden');
  humberger.classList.toggle('bg-white');
});
