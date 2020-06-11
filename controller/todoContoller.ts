export default {
  test: ({response}: {response: any}) => {
    response.status = 200;
    response.body = {
      message: "hello deno"
    }
  },
  getAllTodos: () => {

  },
  createTodo: () => {
    
  }
}