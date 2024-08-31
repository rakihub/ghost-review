export const changeTwitterCardTheme = () => {
  const tweets = document.querySelectorAll('[data-tweet-id]');

  const changeTweetsTheme = () => {
    const storedTheme =
      localStorage.getItem('data-theme') ||
      (window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light');
    const targetTheme = storedTheme === 'dark' ? 'light' : 'dark';

    const switchTweetTheme = (currentTheme, targetTheme) => {
      tweets.forEach((tweet) => {
        const src = tweet.getAttribute('src');
        tweet.setAttribute(
          'src',
          src.replace('theme=' + currentTheme, 'theme=' + targetTheme)
        );
      });
    };

    switchTweetTheme(targetTheme, storedTheme);
  };

  if (tweets) {
    changeTweetsTheme();
  }
};

export const changeCommentsColorOnToggle = () => {
  const rootElem = document.querySelector('html[data-theme]');
  const theme = rootElem.getAttribute('data-theme');

  const commentsSection = document.querySelector('#ghost-comments-root');

  if (commentsSection) {
    const commentsScript = document.querySelector('script[data-color-scheme]');
    commentsScript.setAttribute('data-color-scheme', theme);
  }
};

export const switchTheme = () => {
  const rootElem = document.querySelector('html[data-theme]');
  const currentTheme = rootElem.getAttribute('data-theme');

  rootElem.setAttribute(
    'data-theme',
    currentTheme === 'light' ? 'dark' : 'light'
  );
  localStorage.setItem(
    'data-theme',
    currentTheme === 'light' ? 'dark' : 'light'
  );
  changeCommentsColorOnToggle();
  changeTwitterCardTheme();
};
