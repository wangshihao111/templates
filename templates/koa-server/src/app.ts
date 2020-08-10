import Koa from "koa";
import cors from "@koa/cors";
import { createRootContainer } from "what-di";
import initRouter from "./routes";
import DBUtils from "./utils/db.utils";
import compress from 'koa-compress'

createRootContainer({
  providers: [{ provide: "db", useValue: new DBUtils() }],
});

const app = new Koa();

app.use(cors());
app.use(compress());

initRouter(app);

app.listen(3030, () => {
  console.log("app is running at: http://localhost:3030");
});
