function TodoAddButton({ icon }) {
  return (
    <button className="center">
      <img src={icon} alt="Add task" className="icon"/>
    </button>
  )
}

export { TodoAddButton }