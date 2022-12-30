import { useForm } from "../hooks/useForm";


export const TodoAdd = ({ onNewTodo }) => {

    // const { description, onInputChange, onResetForm } = useForm({
    //     description: ''
    // });
    const { description, onInputChange, onResetForm } = useForm({
        description: '',
    })

    const onFormSubmit = ( event ) => {
        event.preventDefault();
        if ( description.length <= 1 ) return;

        const newTodo = {
            id: new Date().getTime(),
            done: false,
            description,
        }

        onNewTodo(newTodo);
        onResetForm();
    }


    return (
        <form onSubmit={ onFormSubmit }>
            <input 
                type="text" 
                placeholder="¿Qué hay que hacer?"
                className="form-control"
                name="description"
                value={ description }
                onChange={ onInputChange }
            />
            <div className="d-flex justify-content-center">
                <button 
                    type="submit"
                    className="btn btn-outline-primary mt-2 w-75"
                >
                    Agregar
                </button>
            </div>
        </form>
    )
}