import { useState } from "react"
import { UserContext } from "./UserContex"

// const user = {
//     id: 123,
//     name: 'Jair Aceves Garcia',
//     email: 'correo@google.com'
// }


export const UserProvider = ({ children }) => {

    const [user, setUser] = useState(); 

    return (
        // <UserContext.Provider value={{ hola: 'Mundo', user: user }}>
        <UserContext.Provider value={{ user, setUser }}>
            { children }
        </UserContext.Provider>
    )
}