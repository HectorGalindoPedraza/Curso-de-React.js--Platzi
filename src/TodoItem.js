function TodoItem(props) {
  return (
    <li>
      <span className="center">
        <img src={props.uncompleteIcon} className="icon" />
      </span>
      <p>{props.text}</p>
      <span className="center">
        <img src={props.trashIcon} className="icon" />
      </span>
    </li>
  );
}

export { TodoItem }