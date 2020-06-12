import { Router } from "https://deno.land/x/oak/mod.ts";

import todoController from "../controller/todoContoller.ts";
import helloMiddleeware from "../middleware/helloMiddleware.ts";
import todoContoller from "../controller/todoContoller.ts";

const router = new Router();

router
  .get("/", helloMiddleeware, todoController.test)
  .get("/todos", todoContoller.getAllTodos);

export default router;



