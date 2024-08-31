const changeSectionsAccent = () => {
  const sections = document.querySelectorAll('main.home-page section');

  if (!sections.length) {
    return;
  }

  const root = document.documentElement;
  const rootStyle = getComputedStyle(root);
  const accentBgColor = rootStyle.getPropertyValue('--accent-bg-color');

  const rgbToHex = (rgbColor) => {
    const [r, g, b] = rgbColor
      .replace(/rgba?\(/, '')
      .replace(/\)/, '')
      .replace(/ /g, '')
      .split(',');

    return (
      '#' +
      (
        (1 << 24) +
        (parseInt(r, 10) << 16) +
        (parseInt(g, 10) << 8) +
        parseInt(b, 10)
      )
        .toString(16)
        .slice(1)
    );
  };

  sections.forEach((section) => {
    const sectionStyle = getComputedStyle(section);
    const sectionBGColor = sectionStyle.getPropertyValue('background-color');
    const sectionBGColorHex = rgbToHex(sectionBGColor);

    if (sectionBGColorHex === accentBgColor.toLowerCase()) {
      section.classList.add('whiteAccentBGColor');
    }
  });
};

export {changeSectionsAccent};
