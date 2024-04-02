const btnRed = document.querySelector('#btn-red');
const btnGreen = document.querySelector('#btn-green');
const btnBlue = document.querySelector('#btn-blue');
const btnYellow = document.querySelector('#btn-yellow');
const btnResetar = document.querySelector('#btn-resetar')
const body = document.querySelector('body');

btnRed.addEventListener('click', function() {
  body.style.backgroundColor = 'red';
});

btnGreen.addEventListener('click', function() {
  body.style.backgroundColor = 'green';
});

btnBlue.addEventListener('click', function() {
  body.style.backgroundColor = 'blue';
});

btnYellow.addEventListener('click', function() {
  body.style.backgroundColor = 'yellow';
});

btnResetar.addEventListener('click', function() {
  body.style.backgroundColor = 'pink';
});