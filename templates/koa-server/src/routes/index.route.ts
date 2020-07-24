import { RouteController } from '../core/RouteController'
import { Context, Next } from 'koa';
import Router from '@koa/router';

export default class IndexController extends RouteController {
  constructor(router: Router) {
    super(router)
  }
  public init(): void {
    this.router.get('/', this.index.bind(this));
  }
  private index(ctx: Context, next: Next) {
    console.log(this.db)
    ctx.body = 'hello, koajs.'
  }
}