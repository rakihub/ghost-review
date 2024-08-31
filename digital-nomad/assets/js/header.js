const initHeader = () => {
  const header = document.querySelector('.header');
  const bodyWithTransparentHeader = document.querySelector('body.withFullScreenFirstSection');

  if (!header) {
    return;
  }

  const hidePos = 200; // in px;
  let prevScrollYPos = 0; // in px;

  const headerScrollHandler = () => {
    if (bodyWithTransparentHeader) {
      if (window.scrollY >= 48) {
        bodyWithTransparentHeader.classList.remove('withTransparentHeader');
      } else {
        bodyWithTransparentHeader.classList.add('withTransparentHeader');
      }
    }

    if (window.scrollY === 0) {
      header.classList.remove('hide');
    } else if (window.scrollY > hidePos) {
      if (window.scrollY < prevScrollYPos) {
        header.classList.remove('hide');
      } else {
        header.classList.add('hide');
      }
    }

    prevScrollYPos = window.scrollY;
  };

  headerScrollHandler();
  window.addEventListener('scroll', headerScrollHandler);
};

export { initHeader };
