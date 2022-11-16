import '../assets/styles/reset-styles.scss';
import './app.scss';

import './start-page/start-page.scss';
import './start-page/header/header.scss';
import './start-page/menu/menu.scss';
import './start-page/gallery/gallery.scss';
import './translator/translator.scss';

import './game-page/game-page.scss';
import './game-page/question/question.scss';
import './game-page/answer/info/info.scss';
import './game-page/answer/variants/variants.scss';
import './shared/player/player.scss';

import './result-page/result-page.scss';

import './game/game';

import setStartPageHeaderEvents from './start-page/header/header';
import { setStartPageEvents } from './start-page/menu/menu';
import { setGalleryEvents } from './start-page/gallery/gallery';
import { setGamePageEvents } from './game-page/game-page';
import { setVariantEvents } from './game-page/answer/variants/variants';
import { setResultPageEvents } from './result-page/result-page';
import setTranslatorEvents from './translator/translator';

setStartPageEvents();
setGalleryEvents();
setVariantEvents();
setResultPageEvents();
setGamePageEvents();
setStartPageHeaderEvents();
setTranslatorEvents();
