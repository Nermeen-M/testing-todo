export default function TodoItem({ item, onCheck }) {
  const { id, name, price, isCompleted } = item;

  return (
    <li>
      <label className="checkbox-container">
        <div className="item-info">
          <span className="item-name">{name}</span>
          <span className="item-price">{price}</span>
        </div>
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={() => onCheck(id)}
        />
        <span className="checkmark"></span>
      </label>
    </li>
  );
}
