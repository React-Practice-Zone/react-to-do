import { ListItem } from "./list-item.component";

export function List({ todos, toggleTodo, deleteTodo }) {
  return (
    <ul className="list">
      {todos.length === 0 && (
        <div className="list-item">No items in your todo list</div>
      )}
      {todos.map((todo: Todo) => {
        return (
          <ListItem
            {...todo}
            key={todo.id}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </ul>
  );
}
