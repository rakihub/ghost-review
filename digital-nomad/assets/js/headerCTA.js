const initHeaderCTA = () => {
  const openCTAButton = document.querySelector('.open-header-CTA-btn');
  const headerCTA = document.querySelector('.header-CTA');

  if (!openCTAButton) {
    return;
  }

  const handleCTAOpen = () => {
    if (headerCTA.classList.contains('active')) {
      headerCTA.classList.remove('active');
      openCTAButton.classList.remove('active');
    } else {
      headerCTA.classList.add('active');
      openCTAButton.classList.add('active');
    }
  };

  const handleOutsideClick = (e) => {
    if (
      !e.target.closest('.open-header-CTA-btn') &&
      !e.target.closest('.header-CTA')
    ) {
      headerCTA.classList.remove('active');
      openCTAButton.classList.remove('active');
    }
  };

  document.addEventListener('click', handleOutsideClick);
  openCTAButton.addEventListener('click', handleCTAOpen);
};

export {initHeaderCTA};
