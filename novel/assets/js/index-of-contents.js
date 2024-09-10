export default function initIndexOfContents() {
  const canvas = document.querySelector('.gh-canvas');
  const indexContainer = document.querySelector('.index-of-contents-container');
  if (!canvas || !indexContainer) return;

  function setWidth() {
    const canvasGrid = window.getComputedStyle(canvas).gridTemplateColumns;
    const contentWidth=  parseFloat(canvasGrid.match(/[\d.]+px/g)[2]);
    indexContainer.style.width = `${contentWidth}px`;
  }
  setWidth();

  window.addEventListener('resize', function () {
    setTimeout(() => {
      setWidth();
    }, 250)
  });
}
