const initSubmenus = () => {
  const submenuItems = document.querySelectorAll('.nav-list__item--submenu');

  if (!submenuItems.length) {
    return;
  }

  const submenuBtns = document.querySelectorAll(
    '.nav-list__item-submenu-button'
  );

  const clickHandler = (btn) => {
    const submenuParentElem = btn.closest('.nav-list__item--submenu');

    if (submenuParentElem.classList.contains('active')) {
      submenuParentElem.classList.remove('active');
      return;
    }

    submenuItems.forEach((item) => {
      item.classList.remove('active');
    });

    submenuParentElem.classList.add('active');
  };

  const outsideClickHandler = (e) => {
    if (!e.target.closest('.nav-list__item--submenu')) {
      submenuItems.forEach((item) => {
        item.classList.remove('active');
      });
    }
  };

  submenuBtns.forEach((btn) => {
    btn.addEventListener('click', () => clickHandler(btn));
  });

  document.addEventListener('click', outsideClickHandler);
};

export {initSubmenus};
