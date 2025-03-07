/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _timer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timer.js */ \"./src/timer.js\");\n/* harmony import */ var _ui_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui.js */ \"./src/ui.js\");\n/* harmony import */ var _settings_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings.js */ \"./src/settings.js\");\n/* harmony import */ var _notifications_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notifications.js */ \"./src/notifications.js\");\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './style.css'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\r\n\r\n\r\n\r\n // استيراد ملف CSS حتى يتعامل معه Webpack\r\n\r\n\r\n// إنشاء كائنات للفئات الأساسية\r\nconst settings = new _settings_js__WEBPACK_IMPORTED_MODULE_2__.Settings();\r\nsettings.loadSettings();\r\n\r\nconst timer = new _timer_js__WEBPACK_IMPORTED_MODULE_0__.Timer(settings.workDuration, settings.breakDuration);\r\nconst ui = new _ui_js__WEBPACK_IMPORTED_MODULE_1__.UI(timer);\r\n\r\n// تشغيل الإشعارات عند انتهاء المؤقت\r\ntimer.start((remainingTime) => {\r\n    ui.updateDisplay(remainingTime);\r\n    if (remainingTime === 0) {\r\n        _notifications_js__WEBPACK_IMPORTED_MODULE_3__.Notifications.playSound();\r\n    }\r\n});\r\n\n\n//# sourceURL=webpack://implement-a-pomodoro-timer-app/./src/index.js?");

/***/ }),

/***/ "./src/notifications.js":
/*!******************************!*\
  !*** ./src/notifications.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Notifications: () => (/* binding */ Notifications)\n/* harmony export */ });\nclass Notifications {\r\n    static playSound() {\r\n        const audio = new Audio('notification.mp3');\r\n        audio.play();\r\n    }\r\n}\n\n//# sourceURL=webpack://implement-a-pomodoro-timer-app/./src/notifications.js?");

/***/ }),

/***/ "./src/settings.js":
/*!*************************!*\
  !*** ./src/settings.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Settings: () => (/* binding */ Settings)\n/* harmony export */ });\nclass Settings {\r\n    constructor() {\r\n        this.workDuration = 25;\r\n        this.breakDuration = 5;\r\n    }\r\n\r\n    saveSettings(work, breakTime) {\r\n        this.workDuration = work;\r\n        this.breakDuration = breakTime;\r\n        localStorage.setItem('workDuration', work);\r\n        localStorage.setItem('breakDuration', breakTime);\r\n    }\r\n\r\n    loadSettings() {\r\n        const work = localStorage.getItem('workDuration');\r\n        const breakTime = localStorage.getItem('breakDuration');\r\n        if (work && breakTime) {\r\n            this.workDuration = parseInt(work);\r\n            this.breakDuration = parseInt(breakTime);\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack://implement-a-pomodoro-timer-app/./src/settings.js?");

/***/ }),

/***/ "./src/timer.js":
/*!**********************!*\
  !*** ./src/timer.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Timer: () => (/* binding */ Timer)\n/* harmony export */ });\nclass Timer {\r\n    constructor(workDuration = 25, breakDuration = 5) {\r\n        this.workDuration = workDuration * 60;\r\n        this.breakDuration = breakDuration * 60;\r\n        this.longBreakDuration = 15 * 60;\r\n        this.currentTime = this.workDuration;\r\n        this.isRunning = false;\r\n        this.isWorkSession = true;\r\n        this.interval = null;\r\n        this.workSessionsCompleted = 0;\r\n    }\r\n\r\n    start(callback) {\r\n        if (!this.isRunning) {\r\n            this.isRunning = true;\r\n            this.interval = setInterval(() => {\r\n                if (this.currentTime > 0) {\r\n                    this.currentTime--;\r\n                    callback(this.currentTime);\r\n                } else {\r\n                    this.switchMode();\r\n                    callback(this.currentTime);\r\n                }\r\n            }, 1000);\r\n        }\r\n    }\r\n\r\n    pause() {\r\n        this.isRunning = false;\r\n        clearInterval(this.interval);\r\n    }\r\n\r\n    reset(callback) {\r\n        this.isRunning = false;\r\n        clearInterval(this.interval);\r\n        this.currentTime = this.isWorkSession ? this.workDuration : this.breakDuration;\r\n        callback(this.currentTime);\r\n    }\r\n\r\n    switchMode() {\r\n        if (this.isWorkSession) {\r\n            this.workSessionsCompleted++;\r\n            this.currentTime = (this.workSessionsCompleted % 4 === 0) ? this.longBreakDuration : this.breakDuration;\r\n        } else {\r\n            this.currentTime = this.workDuration;\r\n        }\r\n        this.isWorkSession = !this.isWorkSession;\r\n    }\r\n}\n\n//# sourceURL=webpack://implement-a-pomodoro-timer-app/./src/timer.js?");

/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   UI: () => (/* binding */ UI)\n/* harmony export */ });\nclass UI {\r\n    constructor(timer) {\r\n        this.timer = timer;\r\n        this.display = document.getElementById('timer-display');\r\n        this.startBtn = document.getElementById('start-btn');\r\n        this.pauseBtn = document.getElementById('pause-btn');\r\n        this.resetBtn = document.getElementById('reset-btn');\r\n        this.workInput = document.getElementById('work-duration');\r\n        this.breakInput = document.getElementById('break-duration');\r\n\r\n        this.startBtn.addEventListener('click', () => {\r\n            this.timer.start(this.updateDisplay.bind(this));\r\n        });\r\n        \r\n        this.pauseBtn.addEventListener('click', () => {\r\n            this.timer.pause();\r\n        });\r\n        \r\n        this.resetBtn.addEventListener('click', () => {\r\n            this.timer.reset(this.updateDisplay.bind(this));\r\n        });\r\n\r\n        this.workInput.addEventListener('change', () => this.updateSettings());\r\n        this.breakInput.addEventListener('change', () => this.updateSettings());\r\n\r\n        this.updateDisplay(this.timer.currentTime);\r\n    }\r\n\r\n    updateDisplay(time) {\r\n        const minutes = Math.floor(time / 60);\r\n        const seconds = time % 60;\r\n        this.display.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;\r\n    }\r\n\r\n    updateSettings() {\r\n        const workTime = parseInt(this.workInput.value, 10) || 25;\r\n        const breakTime = parseInt(this.breakInput.value, 10) || 5;\r\n        this.timer.workDuration = workTime * 60;\r\n        this.timer.breakDuration = breakTime * 60;\r\n        this.timer.reset(this.updateDisplay.bind(this));\r\n    }\r\n}\n\n//# sourceURL=webpack://implement-a-pomodoro-timer-app/./src/ui.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;