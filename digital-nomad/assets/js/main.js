// SCSS imports
// --------------------------------------------------------

import '../scss/index.scss';

// JS imports
// --------------------------------------------------------
import { changeCommentsColorOnToggle, changeTwitterCardTheme, switchTheme } from './darkMode';
import { copyToClipboard } from './copyToClipboard';
import { initProgressBar } from './progressBar';
import { initHeader } from './header';
import { initHeaderCTA } from './headerCTA';
import { initScrollTop } from './scrollToTop';
import { initMobileMenu, initMobileMenuPosition } from './mobileMenu';
import { loadMore } from './loadMore';
import { togglePlan } from './membershipToggle';
import { initSubmenus } from './submenu';
import { parallaxInit } from './parallax';
import { changeSectionsAccent } from './changeSectionsAccent';

// Main Variables
// --------------------------------------------------------

const mobileMenuState = {
  isOpened: false
};

// Dark Mode Script
// --------------------------------------------------------
const switchThemeBtns = document.querySelectorAll('.switch-theme-btn');

if (switchThemeBtns) {
  switchThemeBtns.forEach((switchThemeBtn) => {
    switchThemeBtn.addEventListener('click', switchTheme);
  });
}

window.addEventListener('load', changeTwitterCardTheme);
window.addEventListener('load', changeCommentsColorOnToggle);

// Header script
// --------------------------------------------------------

initHeader();

// Header CTA script
// --------------------------------------------------------

initHeaderCTA();

// Mobile menu script
// --------------------------------------------------------

initMobileMenu();
initMobileMenuPosition();

// Script that changes --accent-bg-color for sections that has background-color that is the same as :root --accent-bg-color
// --------------------------------------------------------

changeSectionsAccent();

// Copy to clipboard button script
// --------------------------------------------------------

copyToClipboard();

// Scroll to top button script
// --------------------------------------------------------

initScrollTop();

// Progress Bar Script
// --------------------------------------------------------

initProgressBar(mobileMenuState);

// Load More button script
// --------------------------------------------------------

loadMore();

// Function that toggles yearly/monthly plan on membership page
// --------------------------------------------------------

togglePlan();

// Initialize submenu buttons
// --------------------------------------------------------

initSubmenus();

// Initialize parallaxEffect in hero section
// --------------------------------------------------------

parallaxInit();
