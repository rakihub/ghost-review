import Alpine from 'alpinejs';
import dropdown from './dropdown';
import customPagination from './pagination-custom.js';
import lightbox from './lightbox';
import reframe from 'reframe.js';
import {initSliders} from './slider';
import {makeFooterNavi} from './navigation.js';
import {initToc, adjustTocPosition} from './table-of-contents.js';
import {initIndexOfContents, handleScroll, stopScroll} from './index-of-contents.js';

import '../css/app.css';

window.initSliders = initSliders;
window.initIndexOfContents = initIndexOfContents;
window.handleScroll = handleScroll;
window.stopScroll = stopScroll;

/* Init Alpine */
window.Alpine = Alpine;
Alpine.start();

/* Mobile menu burger toggle */
(function () {
    const navigation = document.querySelector('.gh-navigation');
    const burger = navigation.querySelector('.gh-burger');
    if (!burger) return;

    burger.addEventListener('click', function () {
        if (!navigation.classList.contains('is-open')) {
            navigation.classList.add('is-open');
            document.documentElement.style.overflowY = 'hidden';
        } else {
            navigation.classList.remove('is-open');
            document.documentElement.style.overflowY = null;
        }
    });
})();

/* Add lightbox to gallery images */
(function () {
    lightbox(
        '.kg-image-card > .kg-image[width][height], .kg-gallery-image > img'
    );
})();

/* Responsive video in post content */
(function () {
    const sources = [
        '.gh-content iframe[src*="youtube.com"]',
        '.gh-content iframe[src*="youtube-nocookie.com"]',
        '.gh-content iframe[src*="player.vimeo.com"]',
        '.gh-content iframe[src*="kickstarter.com"][src*="video.html"]',
        '.gh-content object',
        '.gh-content embed',
    ];
    reframe(document.querySelectorAll(sources.join(',')));
})();

/* Turn the main nav into dropdown menu when there are more than 5 menu items */
(function () {
    dropdown();
})();

/* Turn the footer nav into menu with sub menu items */
(function () {
    makeFooterNavi();
})();

/* Infinite scroll pagination */
(function () {
    if (!document.body.classList.contains('post-template')) {
        customPagination(false);
    }
})();

/* Init toc, adjust Table of contents container position */
(function () {
    adjustTocPosition();
    initToc();
})();

/* Responsive HTML table */
(function () {
    const tables = document.querySelectorAll('.gh-content > table:not(.gist table)');

    tables.forEach(function (table) {
        const wrapper = document.createElement('div');
        wrapper.className = 'gh-table';
        table.parentNode.insertBefore(wrapper, table);
        wrapper.appendChild(table);
    });
})();
