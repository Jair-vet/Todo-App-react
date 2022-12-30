import { useEffect } from "react"
import { useForm } from '../hooks/useForm'

export const FormWithCustomHook = () => {

    const { formState, onInputChanche, username, password, email, onResetForm } = useForm({
        username: '',
        email: '',
        password: '',
    });
    

    return (
        <>
            <h1>Formulario Con Custom Hook</h1>
            <hr />

            <input 
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={ username }
                onChange={ onInputChanche }
            />
            <input 
                type="email"
                className="form-control mt-2"
                placeholder="correo@coreo.com"
                name="email"
                value={ email }
                onChange={ onInputChanche }
            />
            <input 
                type="password"
                className="form-control mt-2"
                placeholder="contraseña"
                name="password"
                value={ password }
                onChange={ onInputChanche }
            />

            <button 
                onClick={ onResetForm }
                className="btn btn-primary mt-2">
                Borrar
            </button>
    
        </>
    )
}
