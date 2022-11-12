import '../assets/styles/reset-styles.scss';
import './app.scss';

import './start-page/start-page.scss';
import './start-page/header/header.scss';
import './start-page/menu/menu.scss';

import './game-page/game-page.scss';
import './game-page/header/header.scss';
import './game-page/question/question.scss';
import './game-page/answer/answer.scss';
import './game-page/answer/info/info.scss';
import './game-page/answer/variants/variants.scss';
import './shared/player/player.scss';

import './result-page/result-page.scss';

import './game/game';

import { setResultPageEvents } from './result-page/result-page';
import { setStartPageEvents } from './start-page/menu/menu';

setStartPageEvents();
setResultPageEvents();
