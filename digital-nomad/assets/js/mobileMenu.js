const initMobileMenu = () => {
  const header = document.querySelector('.header');
  const searchButton = header.querySelector('.search-btn');
  const burgerBtn = document.querySelector('.burger-btn');
  const mobMenuOverflow = document.querySelector('.mobile-menu-overflow');
  const submenuElements = document.querySelectorAll('.nav-list__item--mobile-submenu');
  const bodyWithTransparentHeader = document.querySelector('body.withFullScreenFirstSection');
  const mobileMenuLoginBtn = header.querySelector('.mobile-menu-login-button');

  const openMobileMenu = () => {
    document.documentElement.classList.add('lock-scroll');
    header.classList.add('mob-menu-open');
    burgerBtn.classList.add('open');

    if (bodyWithTransparentHeader) {
      bodyWithTransparentHeader.classList.remove('withTransparentHeader');
    }
  };

  const closeMobileMenu = () => {
    header.classList.add('mob-menu-hide-anim');
    burgerBtn.classList.remove('open');

    submenuElements.forEach((submenu) => {
      const submenuList = submenu.querySelector('.mobile-submenu');

      submenu.classList.remove('active');
      submenuList.style.height = '';
    });

    setTimeout(() => {
      header.classList.remove('mob-menu-open');
      header.classList.remove('mob-menu-hide-anim');
      document.documentElement.classList.remove('lock-scroll');

      if (bodyWithTransparentHeader) {
        bodyWithTransparentHeader.classList.add('withTransparentHeader');
      }
    }, 250);
  };

  const clickHandler = () => {
    if (header.classList.contains('mob-menu-open')) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  };

  burgerBtn.addEventListener('click', clickHandler);
  mobMenuOverflow.addEventListener('click', clickHandler);
  searchButton.addEventListener('click', closeMobileMenu);

  if (mobileMenuLoginBtn) {
    mobileMenuLoginBtn.addEventListener('click', closeMobileMenu);
  }

  const submenuClickHandler = (submenu, submenuList, submenuElements) => {
    if (submenu.classList.contains('active')) {
      submenu.classList.remove('active');
      submenuList.style.height = '';
    } else {
      submenu.classList.add('active');

      const submenuHeight = Array.from(submenuElements).reduce(
        (accumulator, currentValue) => accumulator + currentValue.offsetHeight,
        0
      );

      submenuList.style.height = `${submenuHeight}px`;
    }
  };

  submenuElements.forEach((submenu) => {
    const submenuLink = submenu.querySelector('.nav-list__item-link--mobile-submenu');
    const submenuList = submenu.querySelector('.mobile-submenu');
    const submenuElements = submenu.querySelectorAll('.mobile-submenu__item-link');

    submenuLink.addEventListener('click', () =>
      submenuClickHandler(submenu, submenuList, submenuElements)
    );
  });
};

const initMobileMenuPosition = () => {
  let announcmentBarHeight = null;
  const mobileMenu = document.querySelector('.mobile-menu-container');
  const mobileMenuOverflow = document.querySelector('.mobile-menu-overflow');
  const headerHeight = document.querySelector('.header').offsetHeight;
  let scrollY = window.scrollY;

  const mutationObserverOptions = {
    attributes: true,
    characterData: true,
    childList: true,
    subtree: true,
    attributeOldValue: true,
    characterDataOldValue: true
  };

  const setHeaderHeight = (headerHeight, announcmentBarHeight = 0) => {
    let totalHeight = announcmentBarHeight + headerHeight;
    mobileMenu.style.setProperty('--totalHeaderHeight', `${totalHeight}px`);
    mobileMenuOverflow.style.setProperty('--totalHeaderHeight', `${totalHeight}px`);
  };

  const addAnnouncmentBarClass = () => {
    mobileMenu.classList.add('mobile-menu--with-announcment-bar');
    mobileMenuOverflow.classList.add('mobile-menu--with-announcment-bar');
  };

  const removeAnnouncmentBarClass = () => {
    mobileMenu.classList.remove('mobile-menu--with-announcment-bar');
    mobileMenuOverflow.classList.remove('mobile-menu--with-announcment-bar');
  };

  const addClickHandlerOnAnnouncmentBarCloseBtn = () => {
    const announcementBarCloseBtn = document.querySelector('#announcement-bar-root button');

    announcementBarCloseBtn.addEventListener('click', () => {
      removeAnnouncmentBarClass();
      setHeaderHeight(headerHeight);
    });
  };

  const addScrollHandlerOnAnnouncementBar = () => {
    window.addEventListener('scroll', () => {
      scrollY = window.scrollY;
      if (scrollY >= announcmentBarHeight) {
        setHeaderHeight(headerHeight);
        removeAnnouncmentBarClass();
      } else {
        setHeaderHeight(headerHeight, announcmentBarHeight - scrollY);
        addAnnouncmentBarClass();
      }
    });
  };

  const announcmentBarRenderObserver = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.target.id == 'announcement-bar-root') {
        announcmentBarHeight = document.querySelector('#announcement-bar-root').offsetHeight;

        setHeaderHeight(headerHeight, announcmentBarHeight);
        addClickHandlerOnAnnouncmentBarCloseBtn();
        addScrollHandlerOnAnnouncementBar();

        announcmentBarRenderObserver.disconnect();
      }
    });
  });

  setHeaderHeight(headerHeight);
  announcmentBarRenderObserver.observe(document.body, mutationObserverOptions);
};

export { initMobileMenu, initMobileMenuPosition };
