const copyToClipboard = () => {
  const shareLinkBtns = document.querySelectorAll('.copyToClipboardBtn');

  const toCopy = (clickedBtn) => {
    const url = window.location.href;

    const handleCopy = (btn, success) => {
      if (success) {
        btn.classList.add('copied');
        setTimeout(() => {
          btn.classList.remove('copied');
        }, 800);
      } else {
        btn.classList.add('notCopied');
        setTimeout(() => {
          btn.classList.remove('notCopied');
        }, 800);
      }
    };

    navigator.clipboard.writeText(url).then(
      () => {
        handleCopy(clickedBtn, true);
      },
      () => {
        handleCopy(clickedBtn, false);
      }
    );
  };

  if (shareLinkBtns) {
    Array.from(shareLinkBtns).forEach((btn) => {
      btn.addEventListener('click', () => toCopy(btn));
    });
  }
};

export {copyToClipboard};
