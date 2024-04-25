'use strict';

import { addAbortListener } from 'events';
import forEach from 'for-each';

const accordion = () => {
  let accordionItems = document.querySelectorAll('.accordion-item');
  accordionItems.forEach((item) => {
    let accordionTitles = item.querySelectorAll('.accordion-title');
    accordionTitles.forEach((title) => {
      title.addEventListener('click', () => {
        accordionItems.forEach((accItem) => {
          if (accItem !== item) {
            accItem.classList.remove('active');
          } else {
            item.classList.toggle('active');
          }
        });
      });
    });
  });
};

export default accordion;
