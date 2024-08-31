const initProgressBar = (mobileMenuState) => {
  const progressBar = document.querySelector('.progress-bar');

  if (!progressBar) {
    return;
  }

  const readingProgress = document.querySelector('.reading-progress');
  let lastProgress = 0; // in px;
  const showPos = 200; // in px;

  const updateProgress = () => {
    const position = window.scrollY;
    const postContentHeight = document.querySelector('.post-main').clientHeight;

    const progress = (position / postContentHeight) * 100;
    if (mobileMenuState.isOpened) {
      readingProgress.setAttribute('value', lastProgress);
    } else {
      lastProgress = progress;
      readingProgress.setAttribute('value', progress);
    }

    requestAnimationFrame(updateProgress);
  };

  if (readingProgress) updateProgress();

  const animateProgressBar = () => {
    const postContentHeight = document.querySelector('.post-main').clientHeight;

    if (window.scrollY > showPos && window.scrollY < postContentHeight) {
      progressBar.classList.add('show');
    } else {
      progressBar.classList.remove('show');
    }
  };

  animateProgressBar();

  window.addEventListener('scroll', animateProgressBar);
};

export {initProgressBar};
