import TodoItem from "./TodoItem";

export default function TodoList({ items, onCheck }) {
  const Items = items.map((item) => (
    <TodoItem key={item.id} item={item} onCheck={onCheck} />
  ));
  const Placeholder = <p className="placeholder">No items to show</p>;

  return items.length > 0 ? (
    <ul className="tasks-list">{Items}</ul>
  ) : (
    Placeholder
  );
}
