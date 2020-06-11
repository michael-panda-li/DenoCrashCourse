// 1. import lib
import { Application } from "https://deno.land/x/oak/mod.ts";

import todoRouter from "./router/todoRouter.ts";

const app = new Application();
const port: number = 8080;

app.use(todoRouter.routes());
app.use(todoRouter.allowedMethods());

console.log('running on port ', port);
await app.listen({ port });