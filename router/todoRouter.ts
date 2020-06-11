import { Router } from "https://deno.land/x/oak/mod.ts";

import todoController from "../controller/todoContoller.ts";
import helloMiddleeware from "../middleware/helloMiddleware.ts";

const router = new Router();

router.get("/", helloMiddleeware, todoController.test);

export default router;



