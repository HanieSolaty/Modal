'use strict';

const btnShowModal = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const btnCloseModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

const hideFunc = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const unhideFunc = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < btnShowModal.length; i++) {
  btnShowModal[i].addEventListener('click', unhideFunc);
}

btnCloseModal.addEventListener('click', hideFunc);
overlay.addEventListener('click', hideFunc);
document.addEventListener('keydown', function (event) {
  if (event.key == 'Escape' && !modal.classList.contains('hidden')) {
    hideFunc();
  }
});
