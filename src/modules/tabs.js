'use strict';

function tabs() {
  const tabBtn = document.querySelectorAll('.tablink');

  for (let i = 0; i < tabBtn.length; i++) {
    tabBtn[i].addEventListener('click', function () {
      let tabName = this.dataset.tab;
      let tabContent = document.getElementById(tabName);
      let allTabContent = document.querySelectorAll('.tabcontent');
      let allTabButtons = document.querySelectorAll('.tablink');

      for (let j = 0; j < allTabContent.length; j++) {
        allTabContent[j].style.display = 'none';
      }

      for (let k = 0; k < allTabContent.length; k++) {
        allTabButtons[k].classList.remove('active');
      }

      tabContent.style.display = 'block';
      this.classList.add('active');
    });
  }
}
export default tabs;
