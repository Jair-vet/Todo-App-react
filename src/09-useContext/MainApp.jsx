import { Navigate, Route, Routes } from "react-router-dom"
import { AbaoutPage } from "./AboutPage"
import { HomePage } from "./HomePage"
import { LoginPage } from "./LoginPage"


export const MainApp = () => {

    

    return (
        <>
            <h1>MainApp</h1>
            <hr />

            <Routes>
                <Route path="/" element={ <HomePage /> }/>
                <Route path="login" element={ <LoginPage /> }/>
                <Route path="about" element={ <AbaoutPage /> }/>

                {/* <Route path="/*" element={ <LoginPage /> } */}
                <Route path="/*" element={ <Navigate to="/about" /> }/>

            </Routes>
        </>
    )
}
