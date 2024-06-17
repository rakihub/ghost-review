(function navigation() {
  window.addEventListener('scroll', function() {
    const cover = document.querySelector('.has-cover .site-header-content');
    const head = document.querySelector('.gh-head');
    if (cover == null || head == null) {
      return;
    }

    const rect = cover.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;

    // Check if the element is out of view due to vertical scroll
    const vertOutView = rect.top >= windowHeight || rect.bottom <= 0;

    if (vertOutView) {
      head.classList.add('sticky');
    } else {
      head.classList.remove('sticky');
    }
  });
})();
