import './styles.scss';
import Game from './pages/Game';
import Rules from './pages/Rules';
import Error404 from './pages/Error404';
import Utils from './utils/Utils';
import PageInterface from './pages/page_interface';
import Menu from './pages/Menu'

const routes = new Map<string, PageInterface>();
routes.set('/game', Game);
routes.set('/', Menu);
routes.set('/rules', Rules);

const router = async () => {
  const content = null || document.getElementById('body');
  const request = Utils.parseRequestURL();
  const parsedURL = (request.resource ? `/${request.resource}` : '/') + (request.id ? '/:id' : '') + (request.verb ? `/${request.verb}` : '');
  let page = routes.get(parsedURL);
  if (page === undefined) {
    page = Error404;
  }
  const pageContent = await page.render();
  if (pageContent && content) {
    content.innerHTML = pageContent;
  }
  await page.after_render();
};
window.addEventListener('hashchange', router);
window.addEventListener('load', router);
