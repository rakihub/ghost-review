const parallaxInit = () => {
  const parallaxItems = document.querySelectorAll('.js-parallax');

  const scrollAnimate = () => {
    parallaxItems.forEach((item) => {
      const rect = item.getBoundingClientRect();
      const scrollPosition = window.scrollY;

      if (rect.bottom > 0) {
        const translateY = Math.round(
          ((scrollPosition - rect.top) / rect.height) * 25
        );

        item.style.transform = `translateY(${translateY}px)`;
      }
    });
  };

  scrollAnimate();
  window.addEventListener('scroll', scrollAnimate);
};

export {parallaxInit};
