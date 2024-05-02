'use strict';

function scrollToUp() {
  const scrollBtn = document.getElementById('scroll-to-top');

  /* прокрутна ниже на 300px делает кнопку видимой */
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      scrollBtn.style.visibility = 'visible';
    } else {
      scrollBtn.style.visibility = 'hidden';
    }
  });

  /* клик по кнопку прокручивает экран на верх сайта  */
  scrollBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

export default scrollToUp;
