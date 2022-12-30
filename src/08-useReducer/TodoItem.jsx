
export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }) => {
    return (
        <li className="list-group-item d-flex justify-content-between">
            <span 
                className={`align-self-center p-2 md:w-auto user-select-none w-75 item ${ (todo.done) ? 'badge bg-primary text-wrap p-2 md:w-auto w-50 user-select-none' : '' }`}
                onDoubleClick={ () => onToggleTodo( todo.id ) }
                >
                { todo.description }
            </span>

            <button 
                className="btn btn-outline-danger"
                onClick={ () => onDeleteTodo( todo.id ) }
            >Borrar</button>
        </li>
    )
  }