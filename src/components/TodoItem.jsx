export default function TodoItem({ item, onCheck }) {
  const { id, name, price, isCompleted } = item;

  return (
    <li>
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={() => onCheck(id)}
      />
      <span className="name">{name}</span>
      <span className="price">{price}</span>
    </li>
  );
}
