import { useTodos } from "../hooks/useTodos"
import { TodoAdd } from "./TodoAdd"
import { TodoList } from "./TodoList"

export const TodoApp = () => {

    const { todos, todosCount, pendingTodosCount, handleDeleteTodo, handleToggleTodo, handleNewTodo } = useTodos();


    return (
        <>
            <h1>TodoApp: { todosCount } <small>pendientes: { pendingTodosCount }</small> </h1>
            <hr />

            <div className="order-list">
                <div className="col-7 mt-4 contenido1">
                <h4 className="text-center">List</h4>
                    <TodoList 
                        todos={ todos } 
                        onDeleteTodo={ handleDeleteTodo } 
                        onToggleTodo={ handleToggleTodo }
                    />

                </div>

                <div className="col-5 text-center mt-4 contenido2">
                    <h4>Agregar</h4>
                    <hr />
                   
                    <TodoAdd onNewTodo={ handleNewTodo } />

                </div>

            </div>

        </>
    )
}
