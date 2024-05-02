'use strict';

function sideMenu() {
  const menuBtn = document.getElementById('menu-toggle');
  const menuList = document.getElementById('menu-list');

  menuBtn.addEventListener('click', () => {
    menuList.classList.toggle('active');
  });
}

export default sideMenu;
