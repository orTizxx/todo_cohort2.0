export function Todos({ todos }) {
  return (
    <div>
      {todos.map((todo) => {
        // const id = todo._id;
        return (
          <div>
            <h1>{todo.title}</h1>
            <h3>{todo.description} </h3>
            <button
              onClick={() => {
                fetch(`http://localhost:3000/completed`, {
                  method: "PUT",
                  body: JSON.stringify({ id: todo._id, completed: true }),
                  headers: {
                    "Content-type": "application/json",
                  },
                });
              }}
            >
              {todo.completed == true ? "Completed" : "Mark as completed"}
            </button>
          </div>
        );
      })}
    </div>
  );
}
