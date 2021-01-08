/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/bullet.js":
/*!***********************!*\
  !*** ./src/bullet.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ Bullet\n/* harmony export */ });\nclass Bullet {\n    constructor() {\n\n        this.radius = 2;\n        this.speed = [0, 0]; \n        this.position = [280, 770]\n\n    }\n\n\n    moveBullet(x, y) {\n\n            if (x) {\n                // debugger\n                this.speed[0] = (x - this.position[0]);\n                this.speed[1] = (y - this.position[1]);\n            } else {\n                this.position[0] += (this.speed[0] / 20);\n                this.position[1] += (this.speed[1] / 20);\n            }\n\n\n    }\n\n    drawBullet(ctx) {\n\n            \n            let newbullet = new Image();\n            newbullet.src = \"./images/bullet.png\";\n            ctx.drawImage(newbullet, this.position[0], this.position[1], 100, 100)\n            let that = this;\n            newbullet.onload = function () {\n                ctx.drawImage(newbullet, that.position[0], that.position[1], 100, 100) \n            }\n\n    }\n\n\n\n    animate(ctx) { \n        this.drawBullet(ctx);\n        this.moveBullet();\n    }\n\n}\n\n//# sourceURL=webpack:///./src/bullet.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ GhostBlasters\n/* harmony export */ });\n/* harmony import */ var _level__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./level */ \"./src/level.js\");\n/* harmony import */ var _shooter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shooter */ \"./src/shooter.js\");\n/* harmony import */ var _bullet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bullet */ \"./src/bullet.js\");\n/* harmony import */ var _ghost__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ghost */ \"./src/ghost.js\");\n\n\n\n\n\nclass GhostBlasters {\n    constructor(canvas) {\n        this.ctx = canvas.getContext(\"2d\");\n        this.canvas = canvas;\n        this.dimensions = { width: canvas.width, height: canvas.height };\n        this.interval = 2000;\n        this.bullets = [];\n        this.ghosts = [];\n        this.score = 0;\n        this.creepster = new FontFace(\n            \"Creepster\",\n            \"url(images/Creepster-Regular.ttf)\"\n        )\n        this.registerEvents();\n        this.restart();\n    }\n    \n    registerEvents() {\n        this.boundClickHandler = this.click.bind(this);\n        document.addEventListener(\"keydown\", this.boundClickHandler);\n        this.boundShootHandler = this.shoot.bind(this);\n        this.canvas.addEventListener(\"mousedown\", this.boundShootHandler);\n    }\n\n    restart() {\n        this.running = false;\n        this.level = new _level__WEBPACK_IMPORTED_MODULE_0__.default(this.dimensions);\n        this.shooter = new _shooter__WEBPACK_IMPORTED_MODULE_1__.default (this.dimensions);\n        this.bullet = new _bullet__WEBPACK_IMPORTED_MODULE_2__.default(this.dimensions);\n        // this.ghost = new Ghost(this.dimensions);\n \n        this.animate(); \n    }\n\n    play() {\n       this.running = true;\n       this.animate(); \n    }\n\n    click(e) {\n        if (!this.running) {\n            this.play();\n        }\n\n        this.level.moveHouse();\n        this.ghostInterval();\n         \n    }\n\n    shoot(e) {\n        if (!this.running) {\n            this.play();\n        }\n        console.log(this.bullets.length);\n        if (this.bullets.length > 15) {\n            this.bullets.shift();\n        }\n        \n        const bullet = new _bullet__WEBPACK_IMPORTED_MODULE_2__.default();\n        this.bullets.push(bullet);\n\n \n        const x = e.clientX - this.canvas.offsetLeft;\n        const y = e.clientY - this.canvas.offsetTop;\n        debugger\n        bullet.moveBullet(x, y); \n    }\n\n    ghostInterval() {\n        if (this.ghosts.length % 10 === 0) {\n            this.ghosts.shift();\n            this.interval -= 500;\n        }\n\n        setInterval(this.addGhost.bind(this), this.interval)\n        \n\n\n    }\n\n    addGhost(count) {\n        for (let ghost = 0; ghost < count; ghost++) {\n            const ghost = new _ghost__WEBPACK_IMPORTED_MODULE_3__.default(this.dimensions)\n            this.ghosts.push(ghost)\n            \n        }\n        const ghost = new _ghost__WEBPACK_IMPORTED_MODULE_3__.default(this.dimensions) \n        this.ghosts.push(ghost);\n        ghost.animate(this.ctx);\n        console.log(this.ghosts);\n        \n    }\n\n\n    drawSparkles(ctx) {\n        var sparkles = new Image();\n        sparkles.src = './images/stars.png';\n        ctx.drawImage(sparkles, 180, 725  , 100, 100)\n        sparkles.onload = function () {\n\n            ctx.drawImage(sparkles, 180, 725, 100, 100)\n        }\n    }\n \n    animate() {\n        this.ctx.clearRect(0, 0, this.dimensions.width, this.dimensions.height);\n        this.level.animate(this.ctx);\n        this.shooter.animate(this.ctx);\n        // this.ghost.animate(this.ctx);\n        \n        \n        if (!this.running) {\n            this.howToPlay();\n            this.instructions();\n            this.highScore();\n            this.lose();\n            this.startGame();\n        }\n        if (this.running) {\n            // this.ghostInterval();\n            this.drawScore();\n            this.bullets.forEach(bullet => bullet.animate(this.ctx));\n            this.ghosts.forEach(ghost => ghost.animate(this.ctx));\n            this.hitGhost(this.ctx);\n            requestAnimationFrame(this.animate.bind(this));\n            this.drawSparkles(this.ctx);\n            this.gameOver();\n            \n        }\n    }\n\n    hitGhost(ctx) {\n        this.ghosts.forEach((ghost, i) => {\n            if (this.collidesWith(ghost)) {\n                this.score += 1;\n                ghost.velocity = 0;\n                // ghost.deadGhost(ctx);\n                ghost.dead = true;\n                setTimeout(() => this.ghosts.splice(i, 1), 1000)\n;\n            }\n        })\n    }\n\n    collidesWith(ghost) {\n \n        const _overlap = (bullet, ghost) => {\n            if (ghost.dead) {\n                return false;\n            }\n            if (bullet.position[0] > ghost.x + 63 || bullet.position[0]+ 100 < ghost.x) {\n                return false;\n            }\n            if (bullet.position[1] > ghost.y + 70 || bullet.position[1] + 100 < ghost.y) {\n                return false;\n            }\n            return true;\n        };\n        let collision = false;\n        this.bullets.forEach((bullet, j) => {\n            if (\n\n                _overlap(bullet, ghost)\n            ) { collision = true; \n                bullet.speed = [0, 0];\n                this.bullets.splice(j, j+1)\n            }\n        });\n        return collision;\n    }\n\n    startGame() {\n        this.creepster.load().then((font) => {\n\n            this.ctx.font = \"20pt Creepster\";\n            this.ctx.fillStyle = \"#b30000\";\n            this.ctx.fillText(\"Press any key to start\", 365, 400);\n        })\n    }\n\n    instructions() {\n        this.creepster.load().then((font) => {\n            this.ctx.font = \"20pt Creepster\";\n            this.ctx.fillStyle = \"#b30000\";\n            this.ctx.fillText(\"Click on ghosts to shoot them.\", 315, 250);\n        })\n    }\n\n    highScore() {\n        this.creepster.load().then((font) => {\n\n            this.ctx.font = \"20pt Creepster\";\n            this.ctx.fillStyle = \"#b30000\";\n            this.ctx.fillText(\"Shoot as many ghosts as you can\", 305, 300);\n        })\n    }\n    lose() {\n        this.creepster.load().then((font) => {\n\n            this.ctx.font = \"20pt Creepster\";\n            this.ctx.fillStyle = \"#b30000\";\n            this.ctx.fillText(\"If a ghost makes it across the screen, you lose\", 245, 350);\n        })\n    }\n\n    howToPlay() {\n        this.creepster.load().then((font) => {\n\n            this.ctx.font = \"30pt Creepster\";\n            this.ctx.fillStyle = \"#b30000\";\n            this.ctx.fillText(\"How to play:\", 395, 200);\n        })\n    }\n\n    drawScore() {\n        this.ctx.font = \"30pt Creepster\";\n        this.ctx.fillStyle = \"#b30000\";\n        this.ctx.fillText(this.score, 10, 790);\n    }\n\n    gameOver() {\n        this.ghosts.forEach(ghost => {\n            if (ghost.x + 63 <= 0) {\n                alert(`game over, score: ${this.score}` );\n                this.restart();\n            }\n        })\n    }\n}\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/ghost.js":
/*!**********************!*\
  !*** ./src/ghost.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ Ghost\n/* harmony export */ });\n\nclass Ghost {\n\n    constructor(dimensions) {\n        this.velocity = 4;\n        this.dimensions = dimensions;\n        this.dead = false;\n        this.y = Math.floor(Math.random() * 551) + 10;\n        this.x = Math.floor(Math.random() * 1601) + 1200;\n    }\n\n\n    newGhost(ctx) {\n\n        var unshotGhost = new Image();\n        unshotGhost.src = '../images/unshot_ghost.png';\n        ctx.drawImage(unshotGhost, this.x, this.y, 63, 70)\n\n        let that = this;\n        unshotGhost.onload = function() {\n\n            ctx.drawImage(unshotGhost, that.x, that.y, 63, 70)\n        }\n\n        if (this.dead) {\n            ctx.clearRect(this.x, this.y, 63, 70);\n            this.shotGhost(ctx);\n            this.deadGhost(ctx);\n            // let that = this;\n            // setTimeout(this.deadGhost(ctx), 1000);\n        }\n    }\n\n    shotGhost(ctx, pos) {\n\n        var shotGhost = new Image();\n        shotGhost.src = '../images/shot_ghost.png';\n        ctx.drawImage(shotGhost, this.x, this.y, 63, 70)\n        let that = this;\n        shotGhost.onload = function () {\n\n            ctx.drawImage(shotGhost, that.x, that.y, 63, 70);\n            // setTimeout(that.deadGhost(ctx), 1000);\n        }\n    }\n\n    deadGhost(ctx) {\n        var deadGhost = new Image();\n        deadGhost.src = '../images/deadghost.png';\n        ctx.drawImage(deadGhost, this.x , this.y , 70, 70)\n        let that = this;\n        deadGhost.onload = function () {\n\n            ctx.drawImage(deadGhost, that.x , that.y , 70, 70)\n        } \n     }\n\n\n    moveGhost(ctx) {\n        this.x -= this.velocity;\n    }\n\n    animate(ctx) {\n        this.newGhost(ctx);\n        this.moveGhost(ctx);\n\n    }\n\n\n}\n\n//# sourceURL=webpack:///./src/ghost.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n// import '../stylesheets/application.css';\n\n// console.log(\"webpack is working\")\n\ndocument.addEventListener('DOMContentLoaded', () => {\n    const canvas = document.getElementById('game-canvas');\n    new _game__WEBPACK_IMPORTED_MODULE_0__.default(canvas);\n \n\n\n    const sound = document.getElementById('sound');\n    const soundOn = document.getElementById('sound-on')\n    const soundOff = document.getElementById('sound-off')\n\n\n    soundOn.addEventListener(\"click\", () => {\n        sound.play();\n    })\n\n    soundOff.addEventListener('click', () => {\n        sound.pause();\n    })\n\n\n\n})\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/level.js":
/*!**********************!*\
  !*** ./src/level.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ Level\n/* harmony export */ });\nconst CONSTANTS = {\n    GHOST_WIDTH: 63,\n    GHOST_HEIGHT: 70,\n    EDGE_BUFFER: 50,\n    WARM_UP_SECONDS: 1\n};\n\n\nclass Level {\n   constructor(dimensions) {\n       this.dimensions = dimensions;\n       this.house_x = 80;\n       this.house_y = 550;\n       this.ghost_x = 635; \n       this.velocity = 5;\n    //    this.ghost_count = 0;\n       this.ghosts = [\n        //    this.randomGhost()\n       ]\n   } \n\n\n   moveHouse(ctx) {\n        this.house_x -= this.velocity;\n        let that = this;\n        if (this.house_x < -200) {\n            this.house_x = 950;\n            this.drawHouse(ctx);\n        }\n   }\n\n   randomGhost() {\n       let that = this;\n       const height = Math.floor(Math.random() * 551) + 10; \n       const ghost = \n       {\n           \n           left: 1200,\n           right: CONSTANTS.GHOST_WIDTH + 1200,\n           top: height, \n           bottom: CONSTANTS.GHOST_HEIGHT + height,\n           shot: false\n        }\n        \n\n        return ghost;\n    }\n\n    generateGhosts() {\n        setTimeout(this.randomGhost(), 5000)\n    }\n\n    drawGhosts(ctx) {\n        this.eachGhost(function(ghost) {\n\n            let unshotGhost = new Image();\n            unshotGhost.src = './images/unshot_ghost.png';\n            ctx.drawImage(unshotGhost, ghost.left, ghost.top, CONSTANTS.GHOST_WIDTH, CONSTANTS.GHOST_HEIGHT)\n\n            unshotGhost.onload = function () {\n\n                ctx.drawImage(unshotGhost, ghost.left, ghost.top, CONSTANTS.GHOST_WIDTH, CONSTANTS.GHOST_HEIGHT)\n            }\n        }\n        )\n    }\n\n\n    shotGhost(ctx) {\n\n        var shotGhost = new Image();\n        shotGhost.src = './images/deadghost.png';\n        ctx.drawImage(shotGhost, 50, 35, 120, 120)\n        shotGhost.onload = function () {\n\n            ctx.drawImage(shotGhost, 50, 35, 120, 120)\n        }\n    }\n\n    moveGhosts() {\n        // this.generateGhosts();\n        this.eachGhost(function(ghost) {\n           ghost.left -= 2 ;\n           ghost.right -= 2 ; \n        })\n\n    }\n\n    eachGhost(callback) {\n        this.ghosts.forEach(callback.bind(this));\n    }\n\n    drawHouse(ctx) {\n        var house = new Image();\n        house.src = './images/haunted_house.png';\n        let that = this;\n        ctx.drawImage(house, that.house_x, that.house_y, 250, 250)\n        house.onload = function () {\n\n            ctx.drawImage(house, that.house_x, that.house_y, 250, 250)\n        }\n    }\n    animate(ctx) {\n    \n        this.drawHouse(ctx);\n        this.moveHouse(ctx);\n        this.moveGhosts();\n        this.drawGhosts(ctx);\n        // this.shotGhost(ctx);\n        // this.ghosts.push(this.drawGhosts(ctx));\n        // console.log(this.ghosts)\n    }\n }\n\n// webpack --mode=development --watch\n\n//# sourceURL=webpack:///./src/level.js?");

/***/ }),

/***/ "./src/shooter.js":
/*!************************!*\
  !*** ./src/shooter.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ Shooter\n/* harmony export */ });\n\nclass Shooter {\n\n    constructor(dimensions) {\n        this.dimensions = dimensions;\n        this.velocity = 5;\n        // this.x = 300;\n        // this.y = 685;\n    }\n\n    drawShooter(ctx) {\n        var shooter = new Image();\n        shooter.src = './images/squirtle.png';\n        let that = this;\n        ctx.drawImage(shooter, 300, 673, 115, 115)\n        shooter.onload = function () {\n            // console.log(this)\n            ctx.drawImage(shooter, 300, 673, 115, 115)\n        }\n    }\n\n    drawSkateboard(ctx) {\n        var skateboard = new Image();\n        skateboard.src = './images/2d_skateboard.png';\n        let that = this;\n        ctx.drawImage(skateboard, 280, 770, 130, 30)\n        skateboard.onload = function () {\n            // console.log(this)\n            ctx.drawImage(skateboard, 280, 770, 130, 30)\n        } \n    }\n\n    animate(ctx) {\n        this.drawSkateboard(ctx)\n        this.drawShooter(ctx);\n\n\n    }\n}\n\n//# sourceURL=webpack:///./src/shooter.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;