// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoItem} = props
  const {title, id} = todoItem
  const {onDelete} = props

  const deleteItem = () => {
    onDelete(id)
  }
  return (
    <li className="todo">
      <p className="title">{title}</p>
      <button className="button" onClick={deleteItem} type="button">
        Delete
      </button>
    </li>
  )
}

export default TodoItem
