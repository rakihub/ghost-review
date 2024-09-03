import Swiper from 'swiper';
import { Navigation, Pagination, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

export const initImgSlider = () => {
  const slider = document.querySelector('.swiper.img-slider')

  new Swiper(slider, {
    modules: [Navigation, Pagination],
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    parallax: true,
    speed: 1000,
    effect: "fade",
    allowTouchMove: true,
    watchOverflow: true,
    breakpoints: {
      1100: {
        allowTouchMove: false
      }
    },
    pagination: {
      el: '.slider-pagination',
      clickable: true,
      bulletClass: 'slider-pagination-bullet',
      bulletActiveClass: 'active',
      renderBullet: function (_, className) {
        return `<div class="${className}"><span></span></div>`;
      }
    },
    navigation: {
      prevEl: '.slider-button-prev',
      nextEl: '.slider-button-next'
    }
  })
}

export const initContentSlider = () => {
  const slider = document.querySelector('.swiper.content-slider')

  new Swiper(slider, {
    modules: [Navigation, Pagination, EffectFade],
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    spaceBetween: 24,
    parallax: true,
    speed: 1000,
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    allowTouchMove: true,
    watchOverflow: true,
    breakpoints: {
      1100: {
        allowTouchMove: false
      }
    },
    pagination: {
      el: '.slider-pagination',
      clickable: true,
      bulletClass: 'slider-pagination-bullet',
      bulletActiveClass: 'active',
      renderBullet: function (_, className) {
        return `<div class="${className}"><span></span></div>`;
      }
    },
    navigation: {
      prevEl: '.slider-button-prev',
      nextEl: '.slider-button-next'
    }
  })
}
