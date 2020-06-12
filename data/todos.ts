import { v4 } from "https://deno.land/std/uuid/mod.ts";

import Todo from "../interface/Todo.ts"

let todos: Todo[] = [
  { 
    id: v4.generate(),
    todo: 'walk dog',
    isCompleted: true,
   },
  {
    id: v4.generate(),
    todo: 'eat food',
    isCompleted: false,
  }
]

export default todos;