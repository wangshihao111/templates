
import Koa from 'koa';
import Router from '@koa/router';
import IndexController from './index.route';

export default function initRoutes(app: Koa) {
  const router = new Router()
  app
  .use(router.routes())
  .use(router.allowedMethods())

  new IndexController(router).init();
}