import changePageState from '../../shared/pageState';
import { startNewGame } from '../menu/menu';

export default function setStartPageHeaderEvents() {
  document.querySelector('#link-quiz').addEventListener('click', startNewGame);
  document.querySelector('#link-menu').addEventListener('click', (e) => {
    e.target.classList.toggle('start-page__link_active');
    changePageState('menu', 'open');
    changePageState('gallery', 'close');
  });
}
