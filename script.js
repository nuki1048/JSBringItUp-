/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_slider_slider_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/slider/slider-main */ "./src/js/modules/slider/slider-main.js");
/* harmony import */ var _modules_showBlock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/showBlock */ "./src/js/modules/showBlock.js");
/* harmony import */ var _modules_playVideo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/playVideo */ "./src/js/modules/playVideo.js");
/* harmony import */ var _modules_slider_slider_mini__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/slider/slider-mini */ "./src/js/modules/slider/slider-mini.js");
/* harmony import */ var _modules_difference__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/difference */ "./src/js/modules/difference.js");
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/forms */ "./src/js/modules/forms.js");
/* harmony import */ var _modules_accordion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/accordion */ "./src/js/modules/accordion.js");
/* harmony import */ var _modules_dowload__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/dowload */ "./src/js/modules/dowload.js");
// eslint-disable-next-line import/no-named-as-default








window.addEventListener('DOMContentLoaded', () => {
  new _modules_slider_slider_main__WEBPACK_IMPORTED_MODULE_0__["default"]({
    btns: '.next',
    container: '.page'
  }).render();
  const mainForm = new _modules_forms__WEBPACK_IMPORTED_MODULE_5__["default"]('.form', 'input');
  new _modules_dowload__WEBPACK_IMPORTED_MODULE_7__["default"]('.module__info-book').init();
  new _modules_showBlock__WEBPACK_IMPORTED_MODULE_1__["default"]('.hanson', '.modules').render();
  new _modules_playVideo__WEBPACK_IMPORTED_MODULE_2__["default"]('.showup .play', '.overlay').init();
  new _modules_playVideo__WEBPACK_IMPORTED_MODULE_2__["default"]('.module__video-item .play ', '.overlay').init();
  new _modules_accordion__WEBPACK_IMPORTED_MODULE_6__["default"]('.plus__content').init();
  const oldDifferenceBlock = new _modules_difference__WEBPACK_IMPORTED_MODULE_4__["default"]('.officerold', '.officer__card-item');
  const newDifferenceBlock = new _modules_difference__WEBPACK_IMPORTED_MODULE_4__["default"]('.officernew', '.officer__card-item');
  const modulesPageSlider = new _modules_slider_slider_main__WEBPACK_IMPORTED_MODULE_0__["default"]({
    container: '.moduleapp',
    btns: '.next',
    prevBtnModule: '.prevmodule',
    nextBtnModule: '.nextmodule'
  });
  const showUpSlider = new _modules_slider_slider_mini__WEBPACK_IMPORTED_MODULE_3__["default"]({
    container: '.showup__content-slider',
    next: '.showup__next',
    prev: '.showup__prev',
    animate: true,
    activeClass: 'card-active'
  });
  const modulesSlider = new _modules_slider_slider_mini__WEBPACK_IMPORTED_MODULE_3__["default"]({
    container: '.modules__content-slider',
    next: '.modules__info-btns .slick-next',
    prev: '.modules__info-btns .slick-prev',
    activeClass: 'card-active',
    animate: true,
    autoPlay: true
  });
  const feedSlider = new _modules_slider_slider_mini__WEBPACK_IMPORTED_MODULE_3__["default"]({
    container: '.feed__slider',
    next: '.feed__slider .slick-next',
    prev: '.feed__slider .slick-prev',
    activeClass: 'feed__item-active'
  });
  showUpSlider.init();
  modulesSlider.init();
  feedSlider.init();
  oldDifferenceBlock.init();
  newDifferenceBlock.init();
  mainForm.init();
  modulesPageSlider.render();
  //   new Accordion('.module__info_show','.module__info-book').in
});

/***/ }),

/***/ "./src/js/modules/accordion.js":
/*!*************************************!*\
  !*** ./src/js/modules/accordion.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Accordion; });
class Accordion {
  constructor(trigger) {
    this.btn = document.querySelectorAll(trigger);
  }
  init() {
    this.btn.forEach(item => {
      item.addEventListener('click', () => {
        const element = item.closest('.module__info-show').nextElementSibling;
        if (element.style.display !== 'block' || !element.style.display) {
          element.style.display = 'block';
          element.classList.add('animated', 'fadeInDown');
        } else {
          element.style.display = 'none';
          element.classList.remove('animated', 'fadeInDown');
        }
      });
    });
  }
}

/***/ }),

/***/ "./src/js/modules/difference.js":
/*!**************************************!*\
  !*** ./src/js/modules/difference.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Difference; });
class Difference {
  constructor(officer, items) {
    try {
      this.officer = document.querySelector(officer);
      this.officerCards = this.officer.querySelectorAll(items);
      this.items = items;
      this.counter = 0;
    } catch (error) {/* empty */}
  }
  bindTriggers() {
    this.officer.querySelector('.plus').addEventListener('click', () => {
      if (this.counter !== this.officerCards.length - 2) {
        this.officerCards[this.counter].classList.add('animated', 'fadeInDown');
        this.officerCards[this.counter].style.display = 'flex';
        // eslint-disable-next-line no-plusplus
        this.counter++;
      } else {
        this.officerCards[this.counter].style.display = 'flex';
        this.officerCards[this.counter].classList.add('animated', 'fadeInDown');
        this.officerCards[this.officerCards.length - 1].style.display = 'none';
      }
    });
  }
  hideItems() {
    this.officerCards.forEach((item, i, arr) => {
      if (i === arr.length - 1) {
        item.style.display = 'flex';
      } else {
        item.style.display = 'none';
      }
    });
  }
  init() {
    try {
      this.hideItems();
      this.bindTriggers();
    } catch (error) {/* empty */}
  }
}

/***/ }),

/***/ "./src/js/modules/dowload.js":
/*!***********************************!*\
  !*** ./src/js/modules/dowload.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Download; });
class Download {
  constructor(trigger) {
    this.btns = document.querySelectorAll(trigger);
    this.path = 'assets/img/mainbg.jpg';
  }

  // eslint-disable-next-line class-methods-use-this
  dowloadItem(path) {
    const element = document.createElement('a');
    element.setAttribute('href', path);
    element.setAttribute('download', 'nice_picture');
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }
  init() {
    this.btns.forEach(item => {
      item.addEventListener('click', e => {
        e.stopPropagation();
        this.dowloadItem(this.path);
      });
    });
  }
}

/***/ }),

/***/ "./src/js/modules/forms.js":
/*!*********************************!*\
  !*** ./src/js/modules/forms.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Forms; });
class Forms {
  constructor(formsSelector, inputs) {
    this.formsSelector = document.querySelectorAll(formsSelector);
    this.inputs = document.querySelectorAll(inputs);
    this.message = {
      ok: 'assets/img/ok.png',
      fail: 'assets/img/fail.png',
      loading: 'Loading...',
      sucsess: 'Thanks you, we will contact you soon!',
      failure: 'Oops, something went wrong'
    };
  }
  clearInputs() {
    this.inputs.forEach(input => {
      input.value = '';
    });
  }

  // eslint-disable-next-line class-methods-use-this
  checkMailInput() {
    const textInputs = document.querySelectorAll('[name="email"]');
    textInputs.forEach(input => {
      input.addEventListener('keypress', e => {
        if (e.key.match(/[а-яё]/)) {
          e.preventDefault();
        }
        input.addEventListener('input', () => {
          input.value = input.value.replace(/[а-яё]/, '');
        });
      });
    });
  }

  // eslint-disable-next-line class-methods-use-this
  initMask(selector) {
    const setCursorPosition = (pos, elem) => {
      elem.focus();
      if (elem.setSelectionRange) {
        elem.setSelectionRange(pos, pos);
      } else if (elem.createTextRange) {
        const range = elem.createTextRange();
        range.collapse(true);
        range.moveEnd('character', pos);
        range.moveStart('character', pos);
        range.select();
      }
    };
    function createMask(event) {
      const matrix = '+1 (___) ___ __ __';
      let i = 0;
      const def = matrix.replace(/\D/g, '');
      let val = this.value.replace(/\D/g, '');
      if (def.length >= val.length) {
        val = def;
      }
      // eslint-disable-next-line no-plusplus, no-nested-ternary
      this.value = matrix.replace(/./g, a => /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a);
      if (event.type === 'blur') {
        if (this.value.length === 2) {
          this.value = '';
        }
      } else {
        setCursorPosition(this.value.length, this);
      }
    }
    const inputs = document.querySelectorAll(selector);
    inputs.forEach(input => {
      input.addEventListener('input', createMask);
      input.addEventListener('focus', createMask);
      input.addEventListener('blur', createMask);
      input.focus();
      // eslint-disable-next-line no-param-reassign
      input.selectionStart = input.value.length;
    });
  }

  // eslint-disable-next-line class-methods-use-this, consistent-return
  async postData(url, data) {
    try {
      const res = await fetch(url, {
        method: 'POST',
        body: data
      });
      return await res.text();
    } catch (error) {/* empty */}
  }
  init() {
    this.checkMailInput();
    this.initMask('[name="phone"]');
    this.formsSelector.forEach(item => {
      item.addEventListener('submit', e => {
        e.preventDefault();
        const statusMessage = document.createElement('div');
        statusMessage.classList.add('status');
        item.parentNode.appendChild(statusMessage);
        item.classList.add('animated', 'fadeOut');
        setTimeout(() => {
          item.style.display = 'none';
        }, 400);
        const statusImg = document.createElement('img');
        statusImg.setAttribute('src', this.message.ok);
        statusImg.classList.add('animated', 'fadeInUp');
        statusMessage.appendChild(statusImg);
        const textMessage = document.createElement('div');
        textMessage.textContent = this.message.loading;
        statusMessage.appendChild(textMessage);
        const formData = new FormData(item);
        this.postData('assets/question.php', formData).then(() => {
          statusImg.setAttribute('src', this.message.ok);
          textMessage.textContent = this.message.sucsess;
        }).catch(() => {
          statusImg.setAttribute('src', this.message.fail);
          textMessage.textContent = this.message.failure;
        }).finally(() => {
          this.clearInputs();
          setTimeout(() => {
            statusMessage.remove();
            item.style.display = 'block';
            item.classList.remove('fadeOut');
            item.classList.add('fadeInUp');
          }, 5000);
        });
      });
    });
  }
}

/***/ }),

/***/ "./src/js/modules/playVideo.js":
/*!*************************************!*\
  !*** ./src/js/modules/playVideo.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return VideoPlayer; });
/* eslint-disable no-undef */
/* eslint-disable quote-props */
class VideoPlayer {
  constructor(triggers, overlay) {
    this.btns = document.querySelectorAll(triggers);
    this.overlay = document.querySelector(overlay);
    this.close = this.overlay.querySelector('.close');
    this.onPlayerStateChange = this.onPlayerStateChange.bind(this);
  }
  createPlayer(url) {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    this.player = new YT.Player('frame', {
      height: '100%',
      width: '100%',
      videoId: `${url}`,
      playerVars: {
        'autoplay': 1,
        'controls': 1
      },
      events: {
        'onStateChange': this.onPlayerStateChange
      }
    });
    this.overlay.style.display = 'flex';
  }
  onPlayerStateChange(state) {
    try {
      const blockedElem = this.activeBtn.closest('.module__video-item').nextElementSibling;
      const playBtn = this.activeBtn.querySelector('svg').cloneNode(true);
      if (state.data === 0) {
        if (blockedElem.querySelector('.play__circle').classList.contains('closed')) {
          blockedElem.querySelector('.play__circle').classList.remove('closed');
          blockedElem.querySelector('svg').remove();
          blockedElem.querySelector('.play__circle').appendChild(playBtn);
          blockedElem.querySelector('.play__text').classList.remove('attention');
          blockedElem.querySelector('.play__text').textContent = 'play video';
          blockedElem.style.cssText = `
          opacity: 1;
          filter: none;
          `;
          blockedElem.setAttribute('data-disabled', 'false');
        }
      }
    } catch (error) {/* empty */}
  }
  bindTriggers() {
    this.btns.forEach((btn, i) => {
      try {
        const blockedElem = btn.closest('.module__video-item').nextElementSibling;
        if (i % 2 === 0) {
          blockedElem.setAttribute('data-disabled', 'true');
        }
      } catch (error) {/* empty */}
      btn.addEventListener('click', () => {
        if (!btn.closest('.module__video-item') || btn.closest('.module__video-item').getAttribute('data-disabled') !== 'true') {
          this.activeBtn = btn;
          const path = btn.getAttribute('data-url');
          this.createPlayer(path);
        }
      });
    });
  }
  bindClose() {
    this.close.addEventListener('click', () => {
      this.overlay.style.display = 'none';
      this.player.stopVideo();
      this.player.destroy();
    });
  }
  init() {
    this.bindTriggers();
    this.bindClose();
  }
}

/***/ }),

/***/ "./src/js/modules/showBlock.js":
/*!*************************************!*\
  !*** ./src/js/modules/showBlock.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ShowBlock; });
class ShowBlock {
  constructor(block, page) {
    this.block = document.querySelector(block);
    this.page = document.querySelector(page);
  }
  render() {
    try {
      this.block.classList.add('animated');
      if (this.page.style.display) {
        this.block.classList.remove('fadeOutDown');
        setTimeout(() => {
          this.block.classList.add('fadeInUp');
        }, 3000);
      } else {
        this.block.classList.remove('fadeInUp');
        this.block.classList.add('fadeOutDown');
      }
    } catch (error) {/* empty */}
  }
}

/***/ }),

/***/ "./src/js/modules/slider/slider-main.js":
/*!**********************************************!*\
  !*** ./src/js/modules/slider/slider-main.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainSlider; });
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider */ "./src/js/modules/slider/slider.js");

class MainSlider extends _slider__WEBPACK_IMPORTED_MODULE_0__["default"] {
  // eslint-disable-next-line no-useless-constructor
  constructor(btns, nextModule, prevModule) {
    super(btns, nextModule, prevModule);
  }
  showSlides(n) {
    if (n > this.slides.length) {
      this.slideIndex = 1;
    }
    if (n < 1) {
      this.slideIndex = this.slides.length;
    }
    Array.from(this.slides).forEach(slide => {
      slide.style.display = 'none';
    });
    this.slides[this.slideIndex - 1].style.display = 'block';
  }
  pluseSlides(n) {
    this.showSlides(this.slideIndex += n);
  }
  bindTriggers() {
    this.btns.forEach(item => {
      item.addEventListener('click', () => {
        this.pluseSlides(1);
      });
      item.parentNode.previousElementSibling.addEventListener('click', e => {
        e.preventDefault();
        if (e.path[1].tagName === 'A') {
          this.slideIndex = 1;
          this.showSlides(this.slideIndex);
        }
      });
    });
    try {
      this.prevModule.forEach(item => {
        item.addEventListener('click', e => {
          e.stopPropagation();
          e.preventDefault();
          this.pluseSlides(-1);
        });
      });
      this.nextModule.forEach(item => {
        item.addEventListener('click', e => {
          e.stopPropagation();
          e.preventDefault();
          this.pluseSlides(1);
        });
      });
    } catch (error) {/* empty */}
  }
  render() {
    if (this.container) {
      this.showSlides(this.slideIndex);
      this.bindTriggers();
    }
  }
}

/***/ }),

/***/ "./src/js/modules/slider/slider-mini.js":
/*!**********************************************!*\
  !*** ./src/js/modules/slider/slider-mini.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MiniSlider; });
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider */ "./src/js/modules/slider/slider.js");

class MiniSlider extends _slider__WEBPACK_IMPORTED_MODULE_0__["default"] {
  // eslint-disable-next-line no-useless-constructor
  constructor(container, next, prev, activeClass, animate, autoPlay, element) {
    super(container, next, prev, activeClass, animate, autoPlay, element);
  }
  nextSlide() {
    this.container.appendChild(this.slides[0]);
    this.decorizeSlides();
    this.moveButtons();
  }
  bindTriggers() {
    this.next.addEventListener('click', () => {
      this.nextSlide();
    });
    this.prev.addEventListener('click', () => {
      const active = this.slides[this.slides.length - 1];
      this.container.insertBefore(active, this.slides[0]);
      this.decorizeSlides();
      this.moveButtons();
    });
  }
  moveButtons() {
    Array.from(this.slides).forEach((item, i) => {
      if (item.tagName === 'BUTTON') {
        this.container.appendChild(this.slides[i]);
      }
    });
    //  This is not my decision, I don't know how to do it differently
  }

  animationSlides() {
    let anim = setInterval(() => {
      this.nextSlide();
    }, 5000);
    this.container.addEventListener('mouseenter', () => {
      clearInterval(anim);
    });
    this.container.addEventListener('mouseleave', () => {
      anim = setInterval(() => {
        this.nextSlide();
      }, 5000);
    });
  }
  decorizeSlides() {
    Array.from(this.slides).forEach(item => {
      item.classList.remove(this.activeClass);
      if (this.animate) {
        item.querySelector('.card__title').style.opacity = '0.4';
        item.querySelector('.card__controls-arrow').style.opacity = '0';
      }
    });
    this.slides[0].classList.add(this.activeClass);
    if (this.animate) {
      this.slides[0].querySelector('.card__title').style.opacity = '1';
      this.slides[0].querySelector('.card__controls-arrow').style.opacity = '1';
    }
  }
  init() {
    try {
      this.container.style.cssText = `
      display: flex;
      flex-wrap: wrap;
      overflow: hidden;
      align-items: flex-start;
   `;
      this.bindTriggers();
      this.decorizeSlides();
      if (this.autoPlay) {
        this.animationSlides();
      }
    } catch (error) {/* empty */}
  }
}

/***/ }),

/***/ "./src/js/modules/slider/slider.js":
/*!*****************************************!*\
  !*** ./src/js/modules/slider/slider.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Slider; });
class Slider {
  constructor() {
    let {
      container = null,
      btns = null,
      next = null,
      prev = null,
      activeClass = '',
      animate,
      autoPlay,
      nextBtnModule = null,
      prevBtnModule = null
    } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    this.container = document.querySelector(container);
    try {
      this.slides = this.container.children;
    } catch (error) {/* empty */}
    try {
      this.nextModule = document.querySelectorAll(nextBtnModule);
      this.prevModule = document.querySelectorAll(prevBtnModule);
    } catch (e) {/* empty */}
    this.btns = document.querySelectorAll(btns);
    this.slideIndex = 1;
    this.prev = document.querySelector(prev);
    this.next = document.querySelector(next);
    this.activeClass = activeClass;
    this.animate = animate;
    this.autoPlay = autoPlay;
  }
}

/***/ })

/******/ });
//# sourceMappingURL=script.js.map