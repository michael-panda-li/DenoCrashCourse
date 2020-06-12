import todos from "../data/todos.ts";

export default {
  test: ({response}: {response: any}) => {
    response.status = 200;
    response.body = {
      message: "hello deno"
    }
  },
  getAllTodos: ({response}: {response: any}) => {
    response.status = 200;
    response.body = {
      data: todos,
    }
  },
  createTodo: () => {
    
  }
}