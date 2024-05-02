'use strict';

function stickyHeader() {
  const stickyHeader = document.getElementById('stickyHeader'); /* нашли блок */
  const stickyTop = stickyHeader.offsetTop; /* определили позицию в координатах у блока */

  window.addEventListener('scroll', () => {
    if (window.scrollY > stickyTop) {
      /* если координаты на сайте ниже чем блок , добавляем ему класс который меняет его позицию */
      stickyHeader.classList.add('sticky');
    } else {
      /* если координаты экрана выше чем блок , то отнимаем у него класс , лишаем поции фиксет */
      stickyHeader.classList.remove('sticky');
    }
  });
}

export default stickyHeader;
