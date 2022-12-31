import { Navigate, Route, Routes } from "react-router-dom"
import { AbaoutPage } from "./AboutPage"
import { UserProvider } from "./context/UserProvider"
import { HomePage } from "./HomePage"
import { LoginPage } from "./LoginPage"
import { Navbar } from "./Navbar"


export const MainApp = () => {

    return (
        <UserProvider>
            <Navbar />
            <h1>MainApp</h1>

            <Routes>
                <Route path="/" element={ <HomePage /> }/>
                <Route path="login" element={ <LoginPage /> }/>
                <Route path="about" element={ <AbaoutPage /> }/>

                {/* <Route path="/*" element={ <LoginPage /> } */}
                <Route path="/*" element={ <Navigate to="/about" /> }/>

            </Routes>
        </UserProvider>
    )
}
