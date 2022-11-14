/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/styles/reset-styles.scss":
/*!*********************************************!*\
  !*** ./src/assets/styles/reset-styles.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/app.scss":
/*!*********************************!*\
  !*** ./src/components/app.scss ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/game-page/answer/info/info.scss":
/*!********************************************************!*\
  !*** ./src/components/game-page/answer/info/info.scss ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/game-page/answer/variants/variants.scss":
/*!****************************************************************!*\
  !*** ./src/components/game-page/answer/variants/variants.scss ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/game-page/game-page.scss":
/*!*************************************************!*\
  !*** ./src/components/game-page/game-page.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/game-page/question/question.scss":
/*!*********************************************************!*\
  !*** ./src/components/game-page/question/question.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/result-page/result-page.scss":
/*!*****************************************************!*\
  !*** ./src/components/result-page/result-page.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/shared/player/player.scss":
/*!**************************************************!*\
  !*** ./src/components/shared/player/player.scss ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/start-page/gallery/gallery.scss":
/*!********************************************************!*\
  !*** ./src/components/start-page/gallery/gallery.scss ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/start-page/header/header.scss":
/*!******************************************************!*\
  !*** ./src/components/start-page/header/header.scss ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/start-page/menu/menu.scss":
/*!**************************************************!*\
  !*** ./src/components/start-page/menu/menu.scss ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/start-page/start-page.scss":
/*!***************************************************!*\
  !*** ./src/components/start-page/start-page.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/game-page/answer/info/info.js":
/*!******************************************************!*\
  !*** ./src/components/game-page/answer/info/info.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setDefaultInfo": () => (/* binding */ setDefaultInfo),
/* harmony export */   "setItemInfo": () => (/* binding */ setItemInfo)
/* harmony export */ });
/* harmony import */ var _shared_player_player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/player/player */ "./src/components/shared/player/player.js");


function setDefaultInfo() {
  document.querySelector('.answer__instuction').style.display = 'block';
  document.querySelector('.answer__card-info').style.display = 'none';
}

function openInfo() {
  document.querySelector('.answer__instuction').style.display = 'none';
  document.querySelector('.answer__card-info').style.display = 'block';
}

function setItemInfo(data) {
  document.querySelector('.answer__img').src = data.image;
  document.querySelector('.answer__name').textContent = data.name;
  document.querySelector('.answer__name-latins').textContent = data.species;
  document.querySelector('.answer__description').textContent = data.description;

  (0,_shared_player_player__WEBPACK_IMPORTED_MODULE_0__["default"])(document.querySelector('.answer__player'), data.audio);
  openInfo();
}




/***/ }),

/***/ "./src/components/game-page/answer/variants/variants.js":
/*!**************************************************************!*\
  !*** ./src/components/game-page/answer/variants/variants.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setVariantEvents": () => (/* binding */ setVariantEvents)
/* harmony export */ });
/* harmony import */ var _game_gameEvents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../game/gameEvents */ "./src/components/game/gameEvents.js");
/* harmony import */ var _game_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../game-page */ "./src/components/game-page/game-page.js");



function playTrue() {
  const sound = new Audio('src/assets/audio/accept.mp3');
  sound.play();
}

function playFalse() {
  const sound = new Audio('src/assets/audio/denied.mp3');
  sound.play();
}

function blockBtns() {
  const defaultCheckers = document.querySelectorAll('.answer__check_default');
  defaultCheckers.forEach((item) => {
    item.classList.toggle('answer__check_default');
  });
}

function chooseVariant(e) {
  const target = e.currentTarget;
  const currentItemId = [...document.querySelectorAll('.answer__variant')].indexOf(target);

  (0,_game_gameEvents__WEBPACK_IMPORTED_MODULE_0__.setInfo)(currentItemId);

  if (!target.firstElementChild.classList.contains('answer__check_default')) return;

  target.firstElementChild.classList.toggle('answer__check_default');

  if ((0,_game_gameEvents__WEBPACK_IMPORTED_MODULE_0__.checkTroothVariant)(currentItemId)) {
    target.firstElementChild.classList.toggle('answer__check_accept');
    (0,_game_page__WEBPACK_IMPORTED_MODULE_1__.changeBtnStyle)();
    playTrue();
    blockBtns();
    return;
  }

  target.firstElementChild.classList.toggle('answer__check_denied');
  playFalse();
  (0,_game_page__WEBPACK_IMPORTED_MODULE_1__.accessDenied)(target.firstElementChild);
  (0,_game_page__WEBPACK_IMPORTED_MODULE_1__.accessDenied)(target.lastElementChild);
}

function setVariantEvents() {
  const variantBtns = document.querySelectorAll('.answer__variant');
  variantBtns.forEach((variant) => variant.addEventListener('click', chooseVariant));
}




/***/ }),

/***/ "./src/components/game-page/game-page.js":
/*!***********************************************!*\
  !*** ./src/components/game-page/game-page.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "accessDenied": () => (/* binding */ accessDenied),
/* harmony export */   "changeBtnStyle": () => (/* binding */ changeBtnStyle),
/* harmony export */   "setGamePageEvents": () => (/* binding */ setGamePageEvents)
/* harmony export */ });
/* harmony import */ var _game_gameEvents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../game/gameEvents */ "./src/components/game/gameEvents.js");
/* harmony import */ var _question_question__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./question/question */ "./src/components/game-page/question/question.js");
/* harmony import */ var _shared_pageState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/pageState */ "./src/components/shared/pageState.js");
/* harmony import */ var _answer_info_info__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./answer/info/info */ "./src/components/game-page/answer/info/info.js");
/* harmony import */ var _result_page_result_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../result-page/result-page */ "./src/components/result-page/result-page.js");
/* harmony import */ var _shared_player_player__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/player/player */ "./src/components/shared/player/player.js");







function accessDenied(btn) {
  btn.classList.toggle('access-denied');
  btn.disabled = true;

  setTimeout(() => {
    btn.classList.toggle('access-denied');
    btn.disabled = false;
  }, 500);
}

function changeBtnStyle() {
  const btn = document.querySelector('.next-level');
  btn.classList.toggle('next-level_disabled');
  btn.classList.toggle('next-level_active');
}

function clickNextLevel(e) {
  const state = (0,_game_gameEvents__WEBPACK_IMPORTED_MODULE_0__.checkComlete)();

  if (state === 'finish') {
    (0,_shared_pageState__WEBPACK_IMPORTED_MODULE_2__["default"])('gamePage', 'close');
    (0,_shared_pageState__WEBPACK_IMPORTED_MODULE_2__["default"])('resultPage', 'open');
    (0,_result_page_result_page__WEBPACK_IMPORTED_MODULE_4__.setMessage)();
    changeBtnStyle();
    (0,_question_question__WEBPACK_IMPORTED_MODULE_1__.setDefaultQuestion)();
    (0,_answer_info_info__WEBPACK_IMPORTED_MODULE_3__.setDefaultInfo)();
    (0,_game_gameEvents__WEBPACK_IMPORTED_MODULE_0__.resetScore)();
    return;
  }

  if (state === 'next') {
    (0,_game_gameEvents__WEBPACK_IMPORTED_MODULE_0__.changeToDefault)();
    changeBtnStyle();
    (0,_question_question__WEBPACK_IMPORTED_MODULE_1__.setDefaultQuestion)();
    (0,_answer_info_info__WEBPACK_IMPORTED_MODULE_3__.setDefaultInfo)();
    (0,_shared_player_player__WEBPACK_IMPORTED_MODULE_5__["default"])(document.querySelector('.question__player'), (0,_game_gameEvents__WEBPACK_IMPORTED_MODULE_0__.getCurrentSong)());
    return;
  }

  accessDenied(e.target);
}

function setGamePageEvents() {
  document.querySelector('.next-level').addEventListener('click', clickNextLevel);
}




/***/ }),

/***/ "./src/components/game-page/question/question.js":
/*!*******************************************************!*\
  !*** ./src/components/game-page/question/question.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "changeQuestion": () => (/* binding */ changeQuestion),
/* harmony export */   "setDefaultQuestion": () => (/* binding */ setDefaultQuestion)
/* harmony export */ });
function setDefaultQuestion() {
  document.querySelector('.question__img').src = './src/assets/images/unknown-bird.jpg';
  document.querySelector('.question__item-name').textContent = '******';
}

function changeQuestion(data) {
  document.querySelector('.question__img').src = data.image;
  document.querySelector('.question__item-name').textContent = data.name;
}




/***/ }),

/***/ "./src/components/game/game.js":
/*!*************************************!*\
  !*** ./src/components/game/game.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "game": () => (/* binding */ game)
/* harmony export */ });
/* harmony import */ var _shared_birdsData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/birdsData */ "./src/components/shared/birdsData.js");


class Game {
  setCurentAnimal() {
    this.currentAnimal = Math.floor(Math.random() * (5 - 0 + 1));
  }

  setCurrentSong() {
    this.currentSong = this.currentSectionData[this.currentAnimal].audio;
  }

  setVariants() {
    const variantsName = document.querySelectorAll('.answer__variant-name');

    variantsName.forEach((variant, i) => {
      variant.textContent = this.currentSectionData[i].name;
    });
  }

  setNextLevel() {
    this.curentLevel += 1;
    this.setCurentAnimal();
    this.currentSectionData = _shared_birdsData__WEBPACK_IMPORTED_MODULE_0__["default"][this.curentLevel];

    this.setCurrentSong();
    this.setVariants();
  }

  setDefault() {
    this.score = 0;
    this.curentLevel = 0;
    this.currentAnimal = 0;
    this.maxLevelScore = 5;
    this.data = _shared_birdsData__WEBPACK_IMPORTED_MODULE_0__["default"];
    this.currentSectionData = _shared_birdsData__WEBPACK_IMPORTED_MODULE_0__["default"][this.curentLevel];
    this.levelComplite = false;
  }
}

const game = new Game();




/***/ }),

/***/ "./src/components/game/gameEvents.js":
/*!*******************************************!*\
  !*** ./src/components/game/gameEvents.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "changeToDefault": () => (/* binding */ changeToDefault),
/* harmony export */   "checkComlete": () => (/* binding */ checkComlete),
/* harmony export */   "checkTroothVariant": () => (/* binding */ checkTroothVariant),
/* harmony export */   "getCurrentSong": () => (/* binding */ getCurrentSong),
/* harmony export */   "getScore": () => (/* binding */ getScore),
/* harmony export */   "resetScore": () => (/* binding */ resetScore),
/* harmony export */   "setInfo": () => (/* binding */ setInfo),
/* harmony export */   "startGame": () => (/* binding */ startGame)
/* harmony export */ });
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/components/game/game.js");
/* harmony import */ var _game_page_question_question__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../game-page/question/question */ "./src/components/game-page/question/question.js");
/* harmony import */ var _game_page_answer_info_info__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../game-page/answer/info/info */ "./src/components/game-page/answer/info/info.js");
/* harmony import */ var _shared_player_player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/player/player */ "./src/components/shared/player/player.js");





function setScore() {
  document.querySelector('.game-page__score-number').textContent = _game__WEBPACK_IMPORTED_MODULE_0__.game.score;
}

function resetScore() {
  _game__WEBPACK_IMPORTED_MODULE_0__.game.score = 0;
  setScore();
}

function updateScore() {
  _game__WEBPACK_IMPORTED_MODULE_0__.game.score += _game__WEBPACK_IMPORTED_MODULE_0__.game.maxLevelScore;
  setScore();
}

function getScore() {
  return _game__WEBPACK_IMPORTED_MODULE_0__.game.score;
}

function getCurrentSong() {
  return _game__WEBPACK_IMPORTED_MODULE_0__.game.currentSong;
}

function checkComlete() {
  if (_game__WEBPACK_IMPORTED_MODULE_0__.game.curentLevel === _game__WEBPACK_IMPORTED_MODULE_0__.game.data.length - 2) {
    document.querySelector('.next-level').textContent = 'Финишь';
  }

  if (_game__WEBPACK_IMPORTED_MODULE_0__.game.curentLevel === _game__WEBPACK_IMPORTED_MODULE_0__.game.data.length - 1) {
    document.querySelector('.next-level').textContent = 'Следующий уровень';
    return 'finish';
  }

  if (_game__WEBPACK_IMPORTED_MODULE_0__.game.levelComplite) {
    _game__WEBPACK_IMPORTED_MODULE_0__.game.setNextLevel();
    return 'next';
  }

  return false;
}

function setInfo(currentItemId) {
  (0,_game_page_answer_info_info__WEBPACK_IMPORTED_MODULE_2__.setItemInfo)(_game__WEBPACK_IMPORTED_MODULE_0__.game.currentSectionData[currentItemId]);
}

function checkTroothVariant(currentItemId) {
  if (currentItemId === _game__WEBPACK_IMPORTED_MODULE_0__.game.currentAnimal) {
    updateScore();
    (0,_game_page_question_question__WEBPACK_IMPORTED_MODULE_1__.changeQuestion)(_game__WEBPACK_IMPORTED_MODULE_0__.game.currentSectionData[_game__WEBPACK_IMPORTED_MODULE_0__.game.currentAnimal]);
    _game__WEBPACK_IMPORTED_MODULE_0__.game.levelComplite = true;
    _game__WEBPACK_IMPORTED_MODULE_0__.game.maxLevelScore = 5;
    return true;
  }

  _game__WEBPACK_IMPORTED_MODULE_0__.game.maxLevelScore -= 1;
  return false;
}

function getCurrentLevel() {
  return _game__WEBPACK_IMPORTED_MODULE_0__.game.curentLevel;
}

function setDefaultVariants() {
  const variantCheckers = document.querySelectorAll('.answer__check');

  variantCheckers.forEach((item) => {
    item.className = 'answer__check answer__check_default';
  });
}

function setCurrentProgress() {
  const progressItems = document.querySelectorAll('.game-page__progress-item');
  const activeItem = document.querySelector('.game-page__progress-item_active');
  const currentLevel = getCurrentLevel();
  activeItem.classList.toggle('game-page__progress-item_active');
  progressItems[currentLevel].classList.toggle('game-page__progress-item_active');
}

function changeToDefault() {
  setDefaultVariants();
  setCurrentProgress();
  _game__WEBPACK_IMPORTED_MODULE_0__.game.levelComplite = false;
}

function startGame() {
  _game__WEBPACK_IMPORTED_MODULE_0__.game.setDefault();
  _game__WEBPACK_IMPORTED_MODULE_0__.game.setCurentAnimal();

  changeToDefault();
  _game__WEBPACK_IMPORTED_MODULE_0__.game.setCurrentSong();
  _game__WEBPACK_IMPORTED_MODULE_0__.game.setVariants();
  (0,_shared_player_player__WEBPACK_IMPORTED_MODULE_3__["default"])(document.querySelector('.question__player'), _game__WEBPACK_IMPORTED_MODULE_0__.game.currentSong);
}




/***/ }),

/***/ "./src/components/result-page/result-page.js":
/*!***************************************************!*\
  !*** ./src/components/result-page/result-page.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "openConfirm": () => (/* binding */ openConfirm),
/* harmony export */   "openUnconfirm": () => (/* binding */ openUnconfirm),
/* harmony export */   "setMessage": () => (/* binding */ setMessage),
/* harmony export */   "setResultPageEvents": () => (/* binding */ setResultPageEvents)
/* harmony export */ });
/* harmony import */ var _shared_pageState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/pageState */ "./src/components/shared/pageState.js");
/* harmony import */ var _game_gameEvents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../game/gameEvents */ "./src/components/game/gameEvents.js");



function openConfirm() {
  document.querySelector('.result-page__unconfirm').style.display = 'none';
  document.querySelector('.result-page__confirm').style.display = 'block';
}

function openUnconfirm() {
  document.querySelector('.result-page__unconfirm').style.display = 'block';
  document.querySelector('.result-page__confirm').style.display = 'none';
}

function setMessage() {
  const score = (0,_game_gameEvents__WEBPACK_IMPORTED_MODULE_1__.getScore)();

  if (score === 30) {
    openConfirm();
    return;
  }

  document.querySelector('.result-page__score').textContent = score;
  document.querySelector('.result-page__unscore').textContent = 30 - score;
  openUnconfirm();
}

function startNewGame() {
  (0,_game_gameEvents__WEBPACK_IMPORTED_MODULE_1__.startGame)();
  (0,_shared_pageState__WEBPACK_IMPORTED_MODULE_0__["default"])('resultPage', 'close');
  (0,_shared_pageState__WEBPACK_IMPORTED_MODULE_0__["default"])('gamePage', 'open');
}

function openMenu() {
  (0,_shared_pageState__WEBPACK_IMPORTED_MODULE_0__["default"])('resultPage', 'close');
  (0,_shared_pageState__WEBPACK_IMPORTED_MODULE_0__["default"])('startPage', 'open');
}

function setResultPageEvents() {
  document.querySelector('.result-page__btn-new').addEventListener('click', startNewGame);
  document.querySelector('.result-page__btn-menu').addEventListener('click', openMenu);
}




/***/ }),

/***/ "./src/components/shared/birdsData.js":
/*!********************************************!*\
  !*** ./src/components/shared/birdsData.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const birdsData = [
  [
    {
      id: 0,
      name: 'Ворон',
      species: 'Corvus corax',
      description: 'Ворон – крупная птица. Длина тела достигает 70 сантиметров, размах крыльев – до полутора метров. Вороны населяют окрестности Тауэра. В Англии бытует поверье, что в день, когда черные вороны улетят от Тауэра, монархия рухнет.',
      image: 'https://live.staticflickr.com//65535//49298804222_474cfe8682.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/XIQVMQVUPP/XC518684-Grands%20corbeaux%2009012020%20Suzon.mp3',
    },
    {
      id: 1,
      name: 'Журавль',
      species: 'Grus grus',
      description: 'Звуки, издаваемые журавлем, похожи на звонкое «кур-лы – кур-лы». Журавли чаще всего поют дуэтом – одна птица начинает запев со слога «кур», а вторая подхватывает «лы». Если птица поёт одна, то она издает только звук «кур».',
      image: 'https://live.staticflickr.com/65535/49221158846_b0b69a58f1.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC512582-190604_1087_Grus_tok.mp3',
    },
    {
      id: 2,
      name: 'Ласточка',
      species: 'Delichon urbicum',
      description: 'Для ласточек характерно негромкое щебетание. Песни ласточек не смолкают на протяжении всего лета. Исследователи различают у птиц до 6 щебечущих звуков: «вит», «ви-вит», «чивит», «чиривит» и т.п. Ласточки любят петь дуэтом.',
      image: 'https://live.staticflickr.com//65535//48539007512_5029d2a9a0.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC489247-190724_09.10h_huiszwaluw_biesbosch_amaliahoeve_roep_100%2Bex_fouragerend_gezien_%20%282%29.mp3',
    },
    {
      id: 3,
      name: 'Козодой',
      species: 'Caprimulgus europaeus',
      description: 'Козодой – неприметная птица, известная благодаря своему голосу. Песня козодоя звучит как монотонная трель похожая на тарахтение мотоцикла. Такое дребезжание слышно от заката до рассвета, его тональность, частота и громкость изменяются. ',
      image: 'https://live.staticflickr.com/65535/48456345286_dbc8530027.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC486956-190623_22.37h_nachtzwaluw_rechte%20heide_zang_ad%20_2ex_gezien_.mp3',
    },
    {
      id: 4,
      name: 'Кукушка',
      species: 'Cuculus canorus',
      description: 'Кукушку назвали так из-за особенностей ее песен. Звонкое «ку-ку» не спутать ни с какой другой птицей. Кукушки не строят гнезда, их потомство выращивают другие виды пернатых, которым кукушки подбрасывают свои яйца.',
      image: 'https://live.staticflickr.com/65535/48377838151_e15f430ec1.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC501461-190616_08.13h_koekoek_brabantse%20biesbosch%20jantjesplaat_roep_1%20ex_ad%20m_ter%20plaatse%20zingend_gezien_.mp3',
    },
    {
      id: 5,
      name: 'Синица',
      species: 'Parus major',
      description: 'В щебетании синиц различают более 40 различных звуковых сочетаний. Поют они практически круглый год, немного затихая только зимой. Синицы настоящие санитары леса. Одна пара синиц в период гнездования оберегает от вредителей десятки деревьев.',
      image: 'https://live.staticflickr.com//65535//49366042493_c48c81d58d.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/RFGQDPLDEC/XC518417-Kj%C3%B8ttmeis%20XC%20Helg%C3%B8ya%20Elias%20A.%20Ryberg20200108133922_079.mp3',
    },
  ],
  [
    {
      id: 0,
      name: 'Воробей',
      species: 'Passer domesticus',
      description: 'Воробьи являются самыми известными и узнаваемыми пернатыми. Их легко узнать по пестрому оперению и задорному чириканью. Воробьи относятся к синатропному виду — они селятся поблизости к человеческому жилищу.',
      image: 'https://live.staticflickr.com//65535//49366595303_06cf65b07e.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/CXFHOPIVAS/XC503224-191020_0134.mp3',
    },
    {
      id: 1,
      name: 'Грач',
      species: 'Corvus frugilegus',
      description: 'Грачи очень умные и сообразительные птицы. С помощью клюва они создают и используют простейшие орудия. У грачей развит рефлекс на звуки трактора. Услышав «тарахтение», они летят на звук – трактор пашет землю, значит, в этом месте много корма.',
      image: 'https://live.staticflickr.com//65535//49347123322_291c86b016.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/RLRHCUIPIY/XC512540-gawron%20Suble%2019.12.19%20%2012.35.mp3',
    },
    {
      id: 2,
      name: 'Галка',
      species: 'Coloeus monedula',
      description: 'Слово «галка» произошло из старославянского языка и переводится как «чёрный». Этим словом часто называют воронов или других черных птиц. Латинское название галки «monedula» связывают со словами монета за любовь птицы к блестящим и ярким вещам.',
      image: 'https://live.staticflickr.com//65535//49237149586_993cf685c5.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC510498-Coloeus%20monedula_2019.11.13_11.55_01.mp3',
    },
    {
      id: 3,
      name: 'Певчий дрозд',
      species: 'Turdus philomelos',
      description: 'Дрозд — лучший певец из отряда воробьиных. Песня состоит только из красивых звучных свистов и коротких трелей. Чаще всего её можно услышать в утреннее и вечернее время. Поют дрозды в течении всего периода гнездования.',
      image: 'https://live.staticflickr.com/65535/48979125763_e2534f54bd.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC513326-190704_1146_TF-Glogow.mp3',
    },
    {
      id: 4,
      name: 'Сорока',
      species: 'Pica pica',
      description: 'Сорока очень трудолюбивая птица. Она строит до восьми гнёзд, а потом выбирает из них самое лучшее. Вход в гнездо сорок всегда обращен на юг, чтобы в жилище было теплее. Сороки являются единственными птицами, которые узнают себя в зеркале.',
      image: 'https://live.staticflickr.com//65535//49360363066_ff02bb6a73.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC500868-Pica%20pica2019.08.23_09.18_02.mp3',
    },
    {
      id: 5,
      name: 'Сойка',
      species: 'Garrulus glandarius',
      description: 'Когда сойка волнуется, хохолок на её голове взъерошивается. Птица старается создать устрашающее зрелище. Сойки умеют имитировать голоса других птиц, животных и звуки, которые создает человек. На зиму они делают большие запасы желудей и орехов.',
      image: 'https://live.staticflickr.com//65535//49369678956_9a7465c7f4.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/TFOGOENSTQ/XC501517-191008_1590%201300.%20Eichelh%C3%A4her%20D%2C%20NW%2C%20LEV.%20Stephan%20Risch.mp3',
    },
  ],
  [
    {
      id: 0,
      name: 'Зяблик',
      species: 'Fringilla coelebs',
      description: 'В дикой природе насчитывается 450 видов зябликов. Зимой зяблики ведут стайный образ жизни. Иногда в их семьях можно увидеть воробьев. Запевают зяблики весной, с наступлением брачного периода. Их пение – это заливистые многоминутные рулады.',
      image: 'https://live.staticflickr.com/65535/49143150817_2d3a2f6c1e.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC512407-150622_03%20zi%C4%99ba%20%282%29.mp3',
    },
    {
      id: 1,
      name: 'Клёст',
      species: 'Loxia curvirostra',
      description: 'Клестов называют «рождественскими» птицами. В естественных условиях они дают потомство зимой – в январе. Эти птицы утепляют свои гнезда мхом и шерстью животных, потому птенцам не холодно. В поисках шишек клесты могут улетать за 3500 км от гнезда.',
      image: 'https://live.staticflickr.com//65535//49365470123_f2de66bb35.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/OTVUCEGYZN/XC495381-Kruisbek%20roep%20NHD%20290619.mp3',
    },
    {
      id: 2,
      name: 'Горлица',
      species: 'Streptopelia turtur',
      description: 'Горлица обитает в смешанных и широколиственных лесах, а также в городских парках и поселках. Птицы часто выбирают места жизни рядом с человеком и легко привыкают к людям. Благодаря мелодичному приятному пению горлиц часто разводят в домашних условиях.',
      image: 'https://live.staticflickr.com/65535/48063004977_84252f9ceb.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC324106-Turkawka_Streptopelia_turtur_Poland_Jarek_Matusiak_2011625_07.mp3',
    },
    {
      id: 3,
      name: 'Дятел',
      species: 'Dendrocopos major',
      description: 'Дятел – заметная и шумная птица, часто живет рядом с человеком. С середины января до конца июня можно услышать «барабанную дробь» дятлов – трель от вибрации веток под быстрыми ударами клюва птицы. В хорошую погоду дробь слышна в радиусе 1,5 км.',
      image: 'https://live.staticflickr.com/65535/49339376578_e933426455.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC518928-AB-017%20dzi%C4%99cio%C5%82%20du%C5%BCy%20agresja%20%282%29.mp3',
    },
    {
      id: 4,
      name: 'Удод',
      species: 'Upupa epops',
      description: 'Удоды предпочитают жить на открытых ландшафтах с отдельными деревьями или рощами. Наиболее удобными для птицы являются лесостепь и саванна. Удод может выбирать места жительства рядом с человеком: пастбища, виноградники, фруктовые сады.',
      image: 'https://live.staticflickr.com//65535//49226383598_6f8be86a06.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC477326-dudek%20%282%29.mp3',
    },
    {
      id: 5,
      name: 'Стриж',
      species: 'Apus apus',
      description: 'Стрижа можно увидеть практически в каждом уголке планеты. Они обитают как в лесных зонах, так и на открытых местностях. Живут стрижи крупными стаями. Большие колонии этих птиц можно увидеть в городах или на прибрежных скалах.',
      image: 'https://live.staticflickr.com//65535//48386150031_7b749df74b.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/TMUAWSDHDJ/XC511871-G.mp3',
    },
  ],
  [
    {
      id: 0,
      name: 'Жаворонок',
      species: 'Alauda arvensis',
      description: 'Жаворонки — перелетные птицы. С начала сентября они отлетают на юг. Возвращаются они в начале марта, независимо от того, сошел снег или нет. По прилету жаворонков определяли наступление весны и пору, когда пора пахать землю.',
      image: 'https://live.staticflickr.com/65535/47105096764_f751fba568.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC462158-Skowronek_Alauda_arvensis_Poland_Jarek_Matusiak_%20-006%20skowronek%20%282%29.mp3',
    },
    {
      id: 1,
      name: 'Соловей',
      species: 'Luscinia luscinia',
      description: 'Соловьи поют с начала мая и до конца лета. Каждая песня соловья состоит из 12 повторяющихся элементов, которые еще называют коленами. Кроме собственных трелей, соловьи легко и хорошо перенимают пение других птиц.',
      image: 'https://live.staticflickr.com/7605/27669397735_f3c21758f2.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/HILVWSADVL/XC513809-R07_0052%20Thrush%20Nightingale%20Snipe.mp3',
    },
    {
      id: 2,
      name: 'Скворец',
      species: 'Sturnus vulgaris',
      description: 'Скворцы - перелётные птицы. Синхронный перелет больших стай скворцов называется мурмурацией. Это красивое и завораживающее явление – множество птиц будто танцуют в воздухе, образуя замысловатые фигуры, которые уменьшаются и увеличиваются в небе.',
      image: 'https://live.staticflickr.com/65535/49357593971_9509fe1d7c.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC515519-2020.01.01_17.24_01.MP3',
    },
    {
      id: 3,
      name: 'Иволга',
      species: 'Oriolus oriolus',
      description: 'Мелодичность голоса иволги сравнивают со звучанием флейты. Человеку сложно разглядеть иволгу, так как она обитает высоко на деревьях. Иволга не только очень красивая, но и  полезная птица. Она уничтожает ядовитых гусениц, которых не поедают другие птицы.',
      image: 'https://live.staticflickr.com/65535/47102184004_58a93380b9.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC491801-2019.07.07_06.28_01.mp3',
    },
    {
      id: 4,
      name: 'Свиристель',
      species: 'Bombycilla garrulus',
      description: 'У свиристели очень цепкие коготки, что помогает птице удерживаться на ветках и склевывать ягоды, которые труднее всего достать. В период ухаживаний самец предлагает самке ягоду или другое угощение. Если самка его принимает, то птицы создают пару.',
      image: 'https://live.staticflickr.com//65535//49367433842_1b06da0e6b.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC517421-AB-004%20%282%29%20jemio%C5%82uszka.mp3',
    },
    {
      id: 5,
      name: 'Щегол',
      species: 'Carduelis carduelis',
      description: 'Щеглы поют красиво и мелодично. И в природе, и в неволе они щебечут почти круглый год. В пении щегла различают более 20 переливчатых трелей. Щеглы привыкают к людям, и даже могут возвратиться к хозяину после того, как их выпустили на волю',
      image: 'https://live.staticflickr.com//65535//49366257253_db3ce48b9a.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC489265-190724_07.58h_putter_biesbosch_%20boompjes%20langs%20open%20water_zang_1ex_ad_niet%20gezien_.mp3',
    },
  ],
  [
    {
      id: 0,
      name: 'Орёл',
      species: 'Aquila nipalensis',
      description: 'В древние времена орел был символом солнца. Орлы часто парят над землей, при этом скорость их перемещения может достигать 240 км/ч. Иллюзия медленного движения происходит из-за высоты полета – более 700 метров',
      image: 'https://live.staticflickr.com//4835//43867392960_7105d71e19.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/KTBTZAHSXF/10_Aquila_nipalensis_al02D85.mp3',
    },
    {
      id: 1,
      name: 'Коршун',
      species: 'Milvus migrans',
      description: 'Коршуны – крупные хищники, в высоту они достигают около полуметра, а вес взрослых особей достигает 1 кг. Крылья узкие и длинные, их размах составляет 1,5 м. Коршуны часто гнездятся большими стаями и даже образуют крупные колонии.',
      image: 'https://live.staticflickr.com//65535//48701190276_ee2a9ed594.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/SDPCHKOHRH/XC485740-2019-06-22%20Selenga%20Milan%20brun%20cris%20de%20quemandage%203.mp3',
    },
    {
      id: 2,
      name: 'Лунь',
      species: 'Circus cyaneus',
      description: 'Лунь – это небольшой сокол. Питается в основном мышевидными грызунами, основа его рациона – полёвки, хомяки, мыши. Оперение луня может быть пепельно-серым. С такой птицей связано сравнение «седой, как лунь».',
      image: 'https://live.staticflickr.com/4480/37240531151_b74619c99d.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC513498-190709_1175_Cir.cyan-f.mp3',
    },
    {
      id: 3,
      name: 'Сокол',
      species: 'Falco peregrinus',
      description: 'Латинское название сокола Falco произошло от слова «серп» из-за серповидной формы крыльев. Длинные и широкие крылья позволяют соколу высоко подниматься в небо и свободно парить. Скорость полёта сокола достигает 280-320 километров в час.',
      image: 'https://live.staticflickr.com//65535//49310710607_92a3a145a9.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/MMEJYLOPDO/XC496049-Pilgrimsfalk_06.mp3',
    },
    {
      id: 4,
      name: 'Ястреб',
      species: 'Accipiter gentilis',
      description: 'Для всех ястребов характерны широкие и короткие крылья. Ещё один отличительный признак - белые «брови» над глазами. Славянские дружинники размещали изображение ястреба на своих знаменах, как символ отваги, мощи и безжалостности к врагам.',
      image: 'https://live.staticflickr.com//65535//49024617331_b9d0d2c9b3.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/MMEJYLOPDO/XC512740-Duvh%C3%B6k_09.mp3',
    },
    {
      id: 5,
      name: 'Филин',
      species: 'Bubo bubo',
      description: 'Полет филина бесшумный, зрение очень острое. Эти особенности делают птицу непревзойденным ночным охотником. У филина нет естественных врагов, ни один зверь не охотится на взрослых птиц. А вот на птенцов нападают лисы и волки.',
      image: 'https://live.staticflickr.com/65535/48137123012_393653c2e4.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/WNLIDKJKXT/XC518386-sense%20t%C3%ADtol.mp3',
    },
  ],
  [
    {
      id: 0,
      name: 'Альбатрос',
      species: 'Diomedea exulans',
      description: 'Альбатрос - самая крупная летающая птица в мире. Размах крыльев достигает три с половиной, вес - десять килограммов. Большую часть жизни альбатросы проводят в воздухе, покрывая над океанскими просторами огромные расстояния',
      image: 'https://live.staticflickr.com/7557/16260253965_8e9430cb66.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/WOEAFQRMUD/XC293087-Diomedea%20exulans151120_T254.mp3',
    },
    {
      id: 1,
      name: 'Олуша',
      species: 'Sula nebouxii',
      description: 'Особенностью голубоногой олуши является не только насыщенный ярко-синий цвет лапок, но еще и тот факт, что они очень теплые. В то время как другие виды птиц греют кладки своим телом, голубоногая олуша делает это с помощью лапок',
      image: 'https://live.staticflickr.com/800/40645471394_4422e69ed8.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/YHKQPPJDVP/XC411507-171217_1491%20BF%20Booby%205ft%20IDLP%201230%20mp3%20amp.mp3',
    },
    {
      id: 2,
      name: 'Буревестник',
      species: 'Puffinus griseus',
      description: 'Размеры буревестниковых разные. Самые маленькие из них в длину составляют до 25 см, самые большие - до 1 м, при размахе крыльев около 2 м. Существует поверье, что появление буревестника в воздухе предвещает бурю, о чем говорит само название птицы.',
      image: 'https://live.staticflickr.com//607//22136056020_935cb113f9.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/XQEVNREHJY/SHEARWATER%20Christmas%20Island_04_Motu_Isla%20de%20Pascua-Easter%20Island_CH_4MAR03_Alvaro%20Jaramillo.mp3',
    },
    {
      id: 3,
      name: 'Пеликан',
      species: 'Pelecanus',
      description: 'Пеликаны — обитатели морей и рек. Ходят они неуклюже, но хорошо летают и плавают. Питаются в основном рыбой, устраивают коллективные охоты — выстроившись полукругом хлопают по воде крыльями и клювами и вытесняют напуганную рыбу на мелководье.',
      image: 'https://live.staticflickr.com/65535/49159147156_dcbbb5c12a.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/XAMHIHFTZG/XC331138-call1.mp3',
    },
    {
      id: 4,
      name: 'Пингвин',
      species: 'Aptenodytes forsteri',
      description: 'Самец императорского пингвина достигает роста 130 см, его масса может приближаться к 50 кг. Из всех современных пингвинов этот вид – самый крупный. Питание пингвина состоит из рыбы, кальмаров и криля. Охотятся птицы в океане большими группами.',
      image: 'https://live.staticflickr.com/5202/5252413926_8e013a3efd.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/OOECIWCSWV/XC449827-LS100829%20King%20Penguin%20call%20A.mp3',
    },
    {
      id: 5,
      name: 'Чайка',
      species: 'Larus argentatus',
      description: 'Чайки населяют берега морей, озёр, рек, водохранилищ, болот, часто гнездятся на островах. С конца прошлого века чайки стали появляться в крупных городах, где устраивает гнёзда на крышах зданий. Все чайки ведут колониальный образ жизни.',
      image: 'https://live.staticflickr.com/65535/48577115317_7034201dde.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC501190-190801_06.50h_zilvermeeuw_duinen%20van%20goeree_roep_2ex_overvliegend_gezien_.mp3',
    },
  ],
];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (birdsData);


/***/ }),

/***/ "./src/components/shared/pageState.js":
/*!********************************************!*\
  !*** ./src/components/shared/pageState.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ changePageState)
/* harmony export */ });
const pageNames = {
  gamePage: {
    class: '.game-page',
    open: 'block',
    close: 'none',
  },

  resultPage: {
    class: '.result-page',
    open: 'block',
    close: 'none',
  },

  startPage: {
    class: '.start-page',
    open: 'block',
    close: 'none',
  },

  gallery: {
    class: '.gallery',
    open: 'flex',
    close: 'none',
  },

  menu: {
    class: '.menu',
    open: 'flex',
    close: 'none',
  },
};

function changePageState(page, state) {
  document.querySelector(pageNames[page].class).style.display = pageNames[page][state];
}


/***/ }),

/***/ "./src/components/shared/player/createPlayer.js":
/*!******************************************************!*\
  !*** ./src/components/shared/player/createPlayer.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createPlayer)
/* harmony export */ });
function createItem(item, itemsData) {
  let tag = '';

  if (item.tag === 'svg' || item.tag === 'path') {
    tag = document.createElementNS('http://www.w3.org/2000/svg', item.tag);
  } else {
    tag = document.createElement(item.tag);
  }

  for (let key in item.attributes) {
    tag.setAttribute(key, item.attributes[key]);
  }

  if (Object.keys(itemsData).includes(tag.classList[0])) {
    tag.textContent = itemsData[tag.classList[0]];
  }

  return tag;
}

function createPlayer(data) {
  let HTMLelements = [];

  data.items.forEach((element) => {
    const item = createItem(element, data.itemsData);

    if (element.parent !== undefined) HTMLelements[element.parent].append(item);

    HTMLelements.push(item);
  });

  return HTMLelements[0];
}


/***/ }),

/***/ "./src/components/shared/player/player.data.js":
/*!*****************************************************!*\
  !*** ./src/components/shared/player/player.data.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "items": () => (/* binding */ items),
/* harmony export */   "itemsData": () => (/* binding */ itemsData)
/* harmony export */ });
const itemsData = {
  player__time: '00:00',
};

const items = [
  {
    tag: 'div',
    attributes: {
      class: 'player__container',
    },
  },
  {
    tag: 'div',
    attributes: {
      class: 'player__control-btn',
    },
    parent: 0,
  },
  {
    tag: 'svg',
    attributes: {
      class: 'player__btn-icon play-icon',
      viewBox: '-200 0 1200 1000',
    },
    parent: 1,
  },
  {
    tag: 'path',
    attributes: {
      fill: '#00bc8c',
      d: 'M96.51 11.97c-31.23 8.05-53.26 32.76-63.42 71.27-3.45 12.84-3.64 29.7-3.64 416.71s.19 403.87 3.64 416.71c16.09 60.74 61.69 86.03 120.9 67.25 9-2.87 53.65-25.1 116.49-58.24 56.14-29.51 221.29-116.3 367.28-192.93 145.99-76.64 271.29-143.31 278.38-148.1 39.28-25.68 59.59-63.04 53.26-97.52-4.79-26.63-24.33-53.07-52.88-71.65C892 399.37 172.58 22.32 154.95 16.38c-18.97-6.33-43.3-8.24-58.44-4.41z',
    },
    parent: 2,
  },
  {
    tag: 'svg',
    attributes: {
      class: 'player__btn-icon pause-icon',
      viewBox: '0 0 47.607 47.607',
    },
    parent: 1,
  },
  {
    tag: 'path',
    attributes: {
      fill: '#00bc8c',
      d: 'M17.991 40.976a6.631 6.631 0 01-13.262 0V6.631a6.631 6.631 0 0113.262 0v34.345zM42.877 40.976a6.631 6.631 0 01-13.262 0V6.631a6.631 6.631 0 0113.262 0v34.345z',
    },
    parent: 4,
  },
  {
    tag: 'div',
    attributes: {
      class: 'player__bar-container',
    },
    parent: 0,
  },
  {
    tag: 'div',
    attributes: {
      class: 'player__bar',
    },
    parent: 6,
  },
  {
    tag: 'div',
    attributes: {
      class: 'player__bar-circle',
    },
    parent: 6,
  },
  {
    tag: 'div',
    attributes: {
      class: 'player__time-container',
    },
    parent: 6,
  },
  {
    tag: 'div',
    attributes: {
      class: 'player__time',
    },
    parent: 9,
  },
  {
    tag: 'div',
    attributes: {
      class: 'player__time',
    },
    parent: 9,
  },
  {
    tag: 'input',
    attributes: {
      class: 'player__volume',
      type: 'range',
      min: 0,
      max: 10,
      step: 0.5,
    },
    parent: 0,
  },
];




/***/ }),

/***/ "./src/components/shared/player/player.js":
/*!************************************************!*\
  !*** ./src/components/shared/player/player.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addPlayer)
/* harmony export */ });
/* harmony import */ var _player_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player.data */ "./src/components/shared/player/player.data.js");
/* harmony import */ var _createPlayer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createPlayer */ "./src/components/shared/player/createPlayer.js");



class Player {
  constructor(parent, audio, area = document) {
    this.parent = area.querySelector(`.${parent}`);
    this.audio = new Audio(audio);
  }

  formatTime(notFormatedTime) {
    const time = Math.round(notFormatedTime);
    if (time > 60) {
      const minutes = `${Math.floor(time / 60)}`.padStart(2, '0');
      const seconds = `${Math.floor(time - Math.floor(time / 60) * 60)}`.padStart(2, '0');
      return `${minutes}:${seconds}`;
    }

    const seconds = `${time}`.padStart(2, '0');
    return `00:${seconds}`;
  }

  setData() {
    const time = this.formatTime(this.audio.duration);
    this.bar.lastElementChild.children[1].textContent = time;
  }

  clickPlay(remove) {
    if (this.audio.paused && !remove) {
      this.onPlay();
      return;
    }

    this.onPause();
  }

  onPlay() {
    this.btn.firstElementChild.style.display = 'none';
    this.btn.lastElementChild.style.display = 'block';
    this.audio.play();
  }

  onPause() {
    this.btn.firstElementChild.style.display = 'block';
    this.btn.lastElementChild.style.display = 'none';
    this.audio.pause();
  }

  updateProgress() {
    const { currentTime, duration } = this.audio;
    const progressWidth = (currentTime / duration) * 100;

    if (!this.drag) {
      this.bar.querySelector('.player__bar-circle').style.left = `${progressWidth}%`;
    }

    this.bar.querySelector('.player__bar').style.background = `linear-gradient(to right, rgb(0, 188, 140) 0%, rgb(61, 133, 140) ${progressWidth}%, rgb(115, 115, 115) ${progressWidth}%, rgb(115, 115, 115) 100%)`;
    this.bar.querySelectorAll('.player__time')[0].textContent = this.formatTime(currentTime);
  }

  getCircle(e) {
    this.drag = true;
    const circlePos = this.bar.querySelector('.player__bar-circle').offsetLeft;
    const downPos = e.clientX;

    window.onmousemove = (event) => this.moveCircle(event, downPos, circlePos);
    window.onmouseup = (event) => this.setCircle(event);

    return false;
  }

  moveCircle(e, downPos, circlePos) {
    const currentPos = e.clientX - downPos;
    const progressWidth = (this.audio.currentTime / this.audio.duration) * 100;
    this.movePos = circlePos + currentPos;

    if (this.movePos < 0) this.movePos = 0;
    if (this.movePos > this.bar.offsetWidth) this.movePos = this.bar.offsetWidth;

    this.bar.querySelector('.player__bar').style.background = `linear-gradient(to right, rgb(0, 188, 140) 0%, rgb(61, 133, 140) ${progressWidth}%, rgb(115, 115, 115) ${progressWidth}%, rgb(115, 115, 115) 100%)`;
    this.audio.currentTime = (this.audio.duration * this.movePos) / this.bar.clientWidth;
    this.bar.querySelector('.player__bar-circle').style.left = `${this.movePos}px`;
    return false;
  }

  setCircle() {
    this.drag = false;
    window.onmousemove = false;
    return false;
  }

  changePlayers() {
    this.parent.firstElementChild.dispatchEvent(new CustomEvent('removeAudio'));
    this.parent.removeChild(this.parent.firstElementChild);
    this.parent.append(this.playerContainer);
  }

  setDefault() {
    this.playerContainer = (0,_createPlayer__WEBPACK_IMPORTED_MODULE_1__["default"])(_player_data__WEBPACK_IMPORTED_MODULE_0__);
    [this.btn, this.bar, this.volume] = this.playerContainer.children;
    this.drag = false;
    this.volume.value = localStorage.songBird_volume ? localStorage.songBird_volume * 10 : 10;
    this.audio.volume = localStorage.songBird_volume ? localStorage.songBird_volume : 1;
  }

  setVolume(volume) {
    localStorage.songBird_volume = volume.value / 10;
    this.audio.volume = localStorage.songBird_volume;
  }

  setEvents() {
    this.setDefault();
    this.changePlayers();

    this.btn.addEventListener('click', () => this.clickPlay());
    this.audio.addEventListener('canplaythrough', this.setData.bind(this));
    this.audio.addEventListener('timeupdate', () => this.updateProgress());
    this.audio.addEventListener('ended', () => this.onPause());
    this.bar.querySelector('.player__bar-circle').addEventListener('mousedown', (e) => this.getCircle(e));
    this.playerContainer.addEventListener('removeAudio', () => this.onPause());
    this.volume.addEventListener('input', (e) => this.setVolume(e.target));
  }
}

function addPlayer(container, song, area) {
  const playerContainer = container;
  const player = new Player(playerContainer.classList[1], song, area);
  player.setEvents();
}


/***/ }),

/***/ "./src/components/start-page/gallery/createGallery.js":
/*!************************************************************!*\
  !*** ./src/components/start-page/gallery/createGallery.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createGallery)
/* harmony export */ });
/* harmony import */ var _gallary_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gallary.data */ "./src/components/start-page/gallery/gallary.data.js");


function createItem(item) {
  let tag = '';
  tag = document.createElement(item.tag);

  for (let key in item.attributes) {
    tag.setAttribute(key, item.attributes[key]);
  }

  return tag;
}

function createGallery() {
  let HTMLelements = [];

  _gallary_data__WEBPACK_IMPORTED_MODULE_0__.items.forEach((element) => {
    const item = createItem(element);

    if (element.parent !== undefined) HTMLelements[element.parent].append(item);

    HTMLelements.push(item);
  });

  return HTMLelements[0];
}


/***/ }),

/***/ "./src/components/start-page/gallery/gallary.data.js":
/*!***********************************************************!*\
  !*** ./src/components/start-page/gallery/gallary.data.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "items": () => (/* binding */ items),
/* harmony export */   "itemsData": () => (/* binding */ itemsData)
/* harmony export */ });
const itemsData = {};

const items = [
  {
    tag: 'div',
    attributes: {
      class: 'gallary__card',
    },
  },
  {
    tag: 'div',
    attributes: {
      class: 'gallary__title',
    },
    parent: 0,
  },
  {
    tag: 'div',
    attributes: {
      class: 'gallary__description',
    },
    parent: 0,
  },
  {
    tag: 'img',
    attributes: {
      class: 'gallary__card-img',
      src: '',
      alt: '',
    },
    parent: 1,
  },
  {
    tag: 'div',
    attributes: {
      class: 'gallary__title-info',
    },
    parent: 1,
  },
  {
    tag: 'p',
    attributes: {
      class: 'gallary__name',
    },
    parent: 4,
  },
  {
    tag: 'p',
    attributes: {
      class: 'gallary__name-latins',
    },
    parent: 4,
  },
  {
    tag: 'div',
    attributes: {
      class: 'player gallary__player',
    },
    parent: 4,
  },
  {
    tag: 'div',
    attributes: {
      class: 'player__container',
    },
    parent: 7,
  },
];




/***/ }),

/***/ "./src/components/start-page/gallery/gallery.js":
/*!******************************************************!*\
  !*** ./src/components/start-page/gallery/gallery.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setGallery": () => (/* binding */ setGallery),
/* harmony export */   "setGalleryEvents": () => (/* binding */ setGalleryEvents)
/* harmony export */ });
/* harmony import */ var _createGallery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createGallery */ "./src/components/start-page/gallery/createGallery.js");
/* harmony import */ var _shared_player_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/player/player */ "./src/components/shared/player/player.js");
/* harmony import */ var _shared_birdsData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/birdsData */ "./src/components/shared/birdsData.js");




function setGallery(id = 0) {
  _shared_birdsData__WEBPACK_IMPORTED_MODULE_2__["default"][id + 1].forEach((bird) => {
    const card = (0,_createGallery__WEBPACK_IMPORTED_MODULE_0__["default"])();
    card.querySelector('.gallary__card-img').src = bird.image;
    card.querySelector('.gallary__card-img').alt = bird.name;
    card.querySelector('.gallary__name').textContent = bird.name;
    card.querySelector('.gallary__name-latins').textContent = bird.species;
    card.querySelector('.gallary__description').textContent = bird.description;
    (0,_shared_player_player__WEBPACK_IMPORTED_MODULE_1__["default"])(card.querySelector('.gallary__player'), bird.audio, card);

    document.querySelector('.gallery__list').append(card);
  });
}

function checkType(target) {
  const id = [...document.querySelectorAll('.gallery__progress-item')].indexOf(target);
  document.querySelector('.gallery__list').replaceChildren();
  setGallery(id);
}

function clickType(e) {
  checkType(e.target);
  document.querySelector('.gallery__progress-item_active').classList.toggle('gallery__progress-item_active');
  e.target.classList.toggle('gallery__progress-item_active');
}

function setGalleryEvents() {
  document.querySelector('.gallery__types-container').addEventListener('click', clickType);
}




/***/ }),

/***/ "./src/components/start-page/header/header.js":
/*!****************************************************!*\
  !*** ./src/components/start-page/header/header.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ setStartPageHeaderEvents)
/* harmony export */ });
/* harmony import */ var _shared_pageState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/pageState */ "./src/components/shared/pageState.js");
/* harmony import */ var _menu_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../menu/menu */ "./src/components/start-page/menu/menu.js");



function clickBurgerMenu() {
  const burgerMenu = document.querySelector('.start-page__menu-bar');
  burgerMenu.classList.toggle('start-page__menu-bar_active');
  const menu = document.querySelector('.start-page__nav');
  menu.style.transform = burgerMenu.classList.contains('start-page__menu-bar_active') ? 'translateX(0vw)' : 'translateX(100vw)';
}

function setStartPageHeaderEvents() {
  document.querySelector('.start-page__menu-bar').addEventListener('click', clickBurgerMenu);
  document.querySelector('#link-quiz').addEventListener('click', () => {
    if (document.documentElement.scrollWidth < 577) {
      clickBurgerMenu();
    }

    (0,_menu_menu__WEBPACK_IMPORTED_MODULE_1__.startNewGame)();
  });
  document.querySelector('#link-menu').addEventListener('click', (e) => {
    if (document.documentElement.scrollWidth < 577) {
      clickBurgerMenu();
    }
    e.target.classList.toggle('start-page__link_active');
    (0,_shared_pageState__WEBPACK_IMPORTED_MODULE_0__["default"])('menu', 'open');
    (0,_shared_pageState__WEBPACK_IMPORTED_MODULE_0__["default"])('gallery', 'close');
  });
}


/***/ }),

/***/ "./src/components/start-page/menu/menu.js":
/*!************************************************!*\
  !*** ./src/components/start-page/menu/menu.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setStartPageEvents": () => (/* binding */ setStartPageEvents),
/* harmony export */   "startNewGame": () => (/* binding */ startNewGame)
/* harmony export */ });
/* harmony import */ var _shared_pageState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/pageState */ "./src/components/shared/pageState.js");
/* harmony import */ var _game_gameEvents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../game/gameEvents */ "./src/components/game/gameEvents.js");
/* harmony import */ var _gallery_gallery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../gallery/gallery */ "./src/components/start-page/gallery/gallery.js");




function startNewGame() {
  (0,_game_gameEvents__WEBPACK_IMPORTED_MODULE_1__.startGame)();

  (0,_shared_pageState__WEBPACK_IMPORTED_MODULE_0__["default"])('startPage', 'close');
  (0,_shared_pageState__WEBPACK_IMPORTED_MODULE_0__["default"])('gamePage', 'open');
}

function removeName(e) {
  e.target.textContent = '';
}

function saveName(name) {
  localStorage.songBird_name = name;
}

function setName() {
  document.querySelector('.menu__name').textContent = localStorage.songBird_name || '[ваше имя]';
}

function checkName(e) {
  if (e.target.textContent === '') {
    e.target.textContent = localStorage.songBird_name || '[ваше имя]';
    return;
  }

  saveName(e.target.textContent);
}

function openGallery() {
  document.querySelector('#link-menu').classList.toggle('start-page__link_active');
  (0,_shared_pageState__WEBPACK_IMPORTED_MODULE_0__["default"])('menu', 'close');
  (0,_shared_pageState__WEBPACK_IMPORTED_MODULE_0__["default"])('gallery', 'open');
  (0,_gallery_gallery__WEBPACK_IMPORTED_MODULE_2__.setGallery)();
}

function setStartPageEvents() {
  setName();

  document.querySelector('.menu__btn-start').addEventListener('click', startNewGame);
  document.querySelector('.menu__btn-gallery').addEventListener('click', openGallery);
  document.querySelector('.menu__name').addEventListener('click', removeName);
  document.querySelector('.menu__name').addEventListener('blur', checkName);
}




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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*******************************!*\
  !*** ./src/components/app.js ***!
  \*******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_styles_reset_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/styles/reset-styles.scss */ "./src/assets/styles/reset-styles.scss");
/* harmony import */ var _app_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.scss */ "./src/components/app.scss");
/* harmony import */ var _start_page_start_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./start-page/start-page.scss */ "./src/components/start-page/start-page.scss");
/* harmony import */ var _start_page_header_header_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./start-page/header/header.scss */ "./src/components/start-page/header/header.scss");
/* harmony import */ var _start_page_menu_menu_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./start-page/menu/menu.scss */ "./src/components/start-page/menu/menu.scss");
/* harmony import */ var _start_page_gallery_gallery_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./start-page/gallery/gallery.scss */ "./src/components/start-page/gallery/gallery.scss");
/* harmony import */ var _game_page_game_page_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./game-page/game-page.scss */ "./src/components/game-page/game-page.scss");
/* harmony import */ var _game_page_question_question_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./game-page/question/question.scss */ "./src/components/game-page/question/question.scss");
/* harmony import */ var _game_page_answer_info_info_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./game-page/answer/info/info.scss */ "./src/components/game-page/answer/info/info.scss");
/* harmony import */ var _game_page_answer_variants_variants_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./game-page/answer/variants/variants.scss */ "./src/components/game-page/answer/variants/variants.scss");
/* harmony import */ var _shared_player_player_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/player/player.scss */ "./src/components/shared/player/player.scss");
/* harmony import */ var _result_page_result_page_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./result-page/result-page.scss */ "./src/components/result-page/result-page.scss");
/* harmony import */ var _game_game__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./game/game */ "./src/components/game/game.js");
/* harmony import */ var _result_page_result_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./result-page/result-page */ "./src/components/result-page/result-page.js");
/* harmony import */ var _start_page_menu_menu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./start-page/menu/menu */ "./src/components/start-page/menu/menu.js");
/* harmony import */ var _game_page_answer_variants_variants__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./game-page/answer/variants/variants */ "./src/components/game-page/answer/variants/variants.js");
/* harmony import */ var _game_page_game_page__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./game-page/game-page */ "./src/components/game-page/game-page.js");
/* harmony import */ var _start_page_gallery_gallery__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./start-page/gallery/gallery */ "./src/components/start-page/gallery/gallery.js");
/* harmony import */ var _start_page_header_header__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./start-page/header/header */ "./src/components/start-page/header/header.js");

























(0,_start_page_menu_menu__WEBPACK_IMPORTED_MODULE_14__.setStartPageEvents)();
(0,_start_page_gallery_gallery__WEBPACK_IMPORTED_MODULE_17__.setGalleryEvents)();
(0,_game_page_answer_variants_variants__WEBPACK_IMPORTED_MODULE_15__.setVariantEvents)();
(0,_result_page_result_page__WEBPACK_IMPORTED_MODULE_13__.setResultPageEvents)();
(0,_game_page_game_page__WEBPACK_IMPORTED_MODULE_16__.setGamePageEvents)();
(0,_start_page_header_header__WEBPACK_IMPORTED_MODULE_18__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map