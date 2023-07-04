
$(function () {

  const buttons = document.querySelectorAll('[data-modal-button]');
  const modal = document.querySelector('[data-modal]');
  const buttonClose = document.querySelector('[data-modal-close]');

  buttons.forEach(function (item) {
    item.addEventListener('click', function () {
      modal.classList.remove('hidden');
    });
  });
 
  buttonClose.addEventListener('click', function () {
    modal.classList.add('hidden');
  });

  modal.addEventListener('click', function ( ) {
    modal.classList.add('hidden');
  });


  modal.querySelector('.modal').addEventListener('click', function (e) {
    e.stopPropagation();
  });


});
