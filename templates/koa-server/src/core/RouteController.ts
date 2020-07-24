import Router from "@koa/router";
import DbUtil from "../utils/db.utils";
import { inject } from "what-di";

export abstract class RouteController {
  protected db: DbUtil;

  constructor(protected router: Router) {
    this.db = inject("db");
  }

  public abstract init(): void;
}
