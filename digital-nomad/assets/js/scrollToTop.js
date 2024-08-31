const initScrollTop = () => {
  const scrollTopBtn = document.querySelector('.scroll-top-button');

  if (!scrollTopBtn) {
    return;
  }

  const scrollToTop = () => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  };

  scrollTopBtn.addEventListener('click', scrollToTop);
};

export {initScrollTop};
