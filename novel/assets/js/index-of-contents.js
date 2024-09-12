function initIndexOfContents() {
  const canvas = document.querySelector('.gh-content.gh-canvas');
  const indexControl = document.querySelector('.index-of-contents-control-container');
  const indexContainer = document.querySelector('.index-of-contents-container.float');
  if (!canvas || !indexControl || !indexContainer) return;

  function setMarginBottom() {
    const previousSibling = indexControl.previousElementSibling;
    if (!previousSibling) return;

    const widthBetween = canvas.getBoundingClientRect().bottom - previousSibling.getBoundingClientRect().bottom;

    indexControl.style.marginBottom = `${widthBetween}px`;
  }

  function setWidth() {
    const canvasGrid = window.getComputedStyle(canvas).gridTemplateColumns;
    const contentWidth=  parseFloat(canvasGrid.match(/[\d.]+px/g)[2]);
    indexContainer.style.width = `${contentWidth}px`;
  }

  setMarginBottom();
  setWidth();

  window.addEventListener('resize', function () {
    setTimeout(() => {
      setMarginBottom();
      setWidth();
    }, 250)
  });
}

function handleScroll() {
  const mediaQuery = window.matchMedia('(max-width: 991px)');
  if (!mediaQuery.matches) return;

  const canvas = document.querySelector('.gh-content.gh-canvas');
  const indexControl = document.querySelector('.index-of-contents-control-container');
  if (!canvas || !indexControl) return;

  let lastScrollPosition = 0;
  window.addEventListener('scroll', function() {
    let currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScrollPosition < lastScrollPosition) {
      indexControl.classList.remove("invisible");
    } else {
      indexControl.classList.add("invisible");
    }

    lastScrollPosition = currentScrollPosition;
  });
}

export {initIndexOfContents, handleScroll};
