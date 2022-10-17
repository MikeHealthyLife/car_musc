var ul = document.querySelector('.gallery__list');
document.querySelector('.btn_next').addEventListener('click', function() {
  ul.insertBefore(ul.lastElementChild, ul.firstElementChild);
});
document.querySelector('.btn_prev').addEventListener('click', function() {
  ul.appendChild(ul.firstElementChild);
});