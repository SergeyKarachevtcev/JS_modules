'use strict';

function tabs() {
  const tabBtn = document.querySelectorAll('.tablink');

  tabBtn.forEach((btn) => {
    btn.addEventListener('click', function () {
      let tabName = this.dataset.tab;
      let tabContent = document.getElementById(tabName);
      let allTabContent = document.querySelectorAll('.tabcontent');
      let allTabButtons = document.querySelectorAll('.tablink');

      allTabContent.forEach((content) => {
        content.style.display = 'none';
      });

      allTabButtons.forEach((button) => {
        button.classList.remove('active');
      });

      tabContent.style.display = 'block';
      this.classList.add('active');
    });
  });
}
export default tabs;
