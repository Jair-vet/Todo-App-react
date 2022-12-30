import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'veterano2',
        email: 'veterano@gmail.com'
    })

    const { username, email } = formState;

    const onInputChanche = ({ target }) => {
        const { name, value } = target
        setFormState({ 
            ...formState,
            [ name ]: value
        })
    }


    useEffect( () => {
        // console.log('useEffect called! ');
    }, [])
    // un arreglo bacio se llama solo una unica vez
    
    useEffect( () => {
        // console.log('formState changed! ');
    }, [formState])
    
    useEffect( () => {
        // console.log('email changed! ');
    }, [email])

    

  return (
    <>
        <h1>Formulario Simple</h1>
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
            placeholder="correo@correo.com"
            name="email"
            value={ email }
            onChange={ onInputChanche }
        />

        {
            (username === 'veterano22') && <Message />
        }
 
    </>
  )
}
