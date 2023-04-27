/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Navigation, Pagination, Parallax, Autoplay, Thumbs } from 'swiper';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

// Добавление классов слайдерам
// swiper главному блоку, swiper-wrapper оболочке, swiper-slide для слайдов
function bildSliders() {
   //BildSlider
   let sliders = document.querySelectorAll('[class*="__swiper"]:not(.swiper-wrapper)');
   if (sliders) {
      sliders.forEach(slider => {
         slider.parentElement.classList.add('swiper');
         slider.classList.add('swiper-wrapper');
         for (const slide of slider.children) {
            slide.classList.add('swiper-slide');
         }
      });
   }
}
// Инициализация слайдеров
function initSliders() {
   // Добавление классов слайдера
   // при необходимости отключить
   bildSliders();

   // Перечень слайдеров слайд главного блока ===========================
   if (document.querySelector('.main-block__slider')) {
      new Swiper('.main-block__slider', {
         // Подключаем модули слайдера
         // для конкретного случая
         modules: [Navigation, Pagination, Parallax, Autoplay],

         //effect: 'fade',
         autoplay: {
            delay: 3000,
            disableOnInteraction: false,
         },

         observer: true,
         observeParents: true,
         slidesPerView: 1,
         spaceBetween: 50,
         // вкл паралакс эфекта и для его работы надо добавить внутрь html data-swiper-parallax="-150"
         parallax: true,
         //autoHeight: true,
         speed: 800,
         //touchRatio: 0,
         //simulateTouch: false,
         // вкл зацикливания
         loop: true,
         //preloadImages: false,
         //lazy: true,
         // Dotts
         pagination: {
            el: '.controll-main-block__dotts',
            clickable: true,
         },
         /*
         breakpoints: {
            320: {
               slidesPerView: 1,
               spaceBetween: 0,
               autoHeight: true,
            },
            768: {
               slidesPerView: 2,
               spaceBetween: 20,
            },
            992: {
               slidesPerView: 3,
               spaceBetween: 20,
            },
            1268: {
               slidesPerView: 4,
               spaceBetween: 30,
            },
         },
         */
         on: {
            // работа с фракцией получение числа слайдов и вывод
            init: function (swiper) {
               const allSlides = document.querySelector('.fraction-controll__all');
               // получение слайдов и не учитывать дубликаты которых добовляет слайдер для круга
               const allSlidesItem = document.querySelectorAll('.slide-main-block:not(.swiper-slide-duplicate)');
               // проверяем длину слайдов и вывод числа длины если меньше 10 добавляется 0
               allSlides.innerHTML = allSlidesItem.length < 10 ? `0${allSlidesItem.length}` : allSlidesItem.length;

            },
            slideChange: function (swiper) {
               const currentSlides = document.querySelector('.fraction-controll__current');
               // проверяем длину слайдов и вывод числа длины если меньше 10 добавляется 0
               currentSlides.innerHTML = swiper.realIndex + 1 < 10 ? `0${swiper.realIndex + 1}` : swiper.realIndex + 1;
            }
         }
      });
   }
   //  слайд карточек продуктов блока ===========================
   if (document.querySelector('.products-slider')) {
      new Swiper('.products-slider__slider', {
         // Подключаем модули слайдера
         // для конкретного случая
         modules: [Navigation, Pagination, Autoplay],

         //effect: 'fade',
         autoplay: {
            delay: 3000,
            disableOnInteraction: false,
         },
         observer: true,
         watchOverflow: true,
         observeParents: true,
         slidesPerView: 4,
         spaceBetween: 30,
         // вкл паралакс эфекта и для его работы надо добавить внутрь html data-swiper-parallax="-150"
         parallax: true,
         //autoHeight: true,
         speed: 800,
         //touchRatio: 0,
         //simulateTouch: false,
         // вкл зацикливания
         //loop: true,
         //preloadImages: false,
         //lazy: true,
         // Dotts
         pagination: {
            el: '.products-slider__dotts',
            clickable: true,
            dynamicBullets: true
         },

         breakpoints: {
            320: {
               slidesPerView: 1,
               spaceBetween: 10,
            },
            768: {
               slidesPerView: 2,
               spaceBetween: 20,
            },
            992: {
               slidesPerView: 3,
               spaceBetween: 20,
            },
            1370: {
               slidesPerView: 4,
               spaceBetween: 30,
            },
         },

         on: {
            init: function (swiper) {

            }
         }
      });
   }
   //  слайд карточек новинок блока ===========================
   if (document.querySelector('.new-products')) {
      new Swiper('.new-products__slider', {
         // Подключаем модули слайдера
         // для конкретного случая
         modules: [Navigation, Pagination, Autoplay],

         //effect: 'fade',
         autoplay: {
            delay: 3000,
            disableOnInteraction: false,
         },
         observer: true,
         watchOverflow: true,
         observeParents: true,
         slidesPerView: 3,
         spaceBetween: 30,
         // вкл паралакс эфекта и для его работы надо добавить внутрь html data-swiper-parallax="-150"
         parallax: true,
         //autoHeight: true,
         speed: 800,
         //touchRatio: 0,
         //simulateTouch: false,
         // вкл зацикливания
         //loop: true,
         //preloadImages: false,
         //lazy: true,
         // Dotts
         pagination: {
            el: '.new-products__dotts',
            clickable: true,
            dynamicBullets: true
         },

         breakpoints: {
            320: {
               slidesPerView: 1,
               spaceBetween: 10,
            },
            768: {
               slidesPerView: 1,
               spaceBetween: 20,
            },
            992: {
               slidesPerView: 2,
               spaceBetween: 20,
            },
            1370: {
               slidesPerView: 3,
               spaceBetween: 30,
            },
         },

         on: {
            init: function (swiper) {

            }
         }
      });
   }
   //  слайд product блока ===========================
   if (document.querySelector('.thumbs-images')) {
      const thumbsSwiper = new Swiper('.thumbs-images', {
         // Подключаем модули слайдера
         // для конкретного случая
         modules: [Navigation, Pagination, Autoplay, Thumbs],

         //effect: 'fade',
         observer: true,
         watchOverflow: true,
         observeParents: true,
         slidesPerView: 3,
         spaceBetween: 16,
         // вкл паралакс эфекта и для его работы надо добавить внутрь html data-swiper-parallax="-150"
         parallax: true,
         //autoHeight: true,
         speed: 800,
         //touchRatio: 0,
         //simulateTouch: false,
         // вкл зацикливания
         //loop: true,
         //preloadImages: false,
         //lazy: true,
         // Dotts

         breakpoints: {
            992: {
               slidesPerView: 3,
               spaceBetween: 5,
            },
            1370: {
               slidesPerView: 4,
               spaceBetween: 16,
            },
         },

         on: {
            init: function (swiper) {

            }
         }
      });
      new Swiper('.images-product__slider', {
         // Подключаем модули слайдера
         // для конкретного случая
         modules: [Navigation, Pagination, Autoplay, Thumbs],

         //effect: 'fade',
         autoplay: {
            delay: 3000,
            disableOnInteraction: false,
         },
         thumbs: {
            swiper: thumbsSwiper
         },
         observer: true,
         watchOverflow: true,
         observeParents: true,
         slidesPerView: 1,
         spaceBetween: 16,
         // вкл паралакс эфекта и для его работы надо добавить внутрь html data-swiper-parallax="-150"
         //autoHeight: true,
         speed: 800,
         //touchRatio: 0,
         //simulateTouch: false,
         // вкл зацикливания
         //loop: true,
         //preloadImages: false,
         //lazy: true,
         on: {
            init: function (swiper) {

            }
         }
      });
   }
}
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
   // Добавление классов слайдера
   // при необходимости отключить
   bildSliders();

   let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
   if (sliderScrollItems.length > 0) {
      for (let index = 0; index < sliderScrollItems.length; index++) {
         const sliderScrollItem = sliderScrollItems[index];
         const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
         const sliderScroll = new Swiper(sliderScrollItem, {
            observer: true,
            observeParents: true,
            direction: 'vertical',
            slidesPerView: 'auto',
            freeMode: {
               enabled: true,
            },
            scrollbar: {
               el: sliderScrollBar,
               draggable: true,
               snapOnRelease: false
            },
            mousewheel: {
               releaseOnEdges: true,
            },
         });
         sliderScroll.scrollbar.updateSize();
      }
   }
}

window.addEventListener("load", function (e) {
   // Запуск инициализации слайдеров
   initSliders();
   // Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
   //initSlidersScroll();
});