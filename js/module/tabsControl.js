'use strict';

const tabBtns = document.querySelectorAll('.reviews__btn');
const tabItems = document.querySelectorAll('.reviews__tabs-item');

export const tabsControl = () => {
  const onTabClick = (tab) => {
    tab.addEventListener('click', () => {
      const currentBtn = tab;
      const tabId = currentBtn.getAttribute('data-tab');
      const currentTab = document.querySelector(tabId);

      if (!currentBtn.classList.contains('active')) {
        tabBtns.forEach((item) => {
          item.classList.remove('active');
        });

        tabItems.forEach((item) => {
          item.classList.remove('active');
        });

        currentBtn.classList.add('active');
        currentTab.classList.add('active');
      }
    });
  };

  tabBtns.forEach(onTabClick);
};
