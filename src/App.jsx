import { BrowserRouter, Route, Routes } from "react-router-dom"


import AuthLayout from "./layouts/AuthLayout"

import Login from "./paginas/Login"
import User from "./paginas/User"

import { AuthProvider } from "./context/AuthProvider"
import RutaProtegida from "./layouts/RutaProtegida"

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <AuthProvider>
                    <Routes>
                        <Route path="/" element={<AuthLayout />}>
                            <Route index element={<Login />} />
                        </Route>

                        <Route path="/user" element={<RutaProtegida/>}>
                            <Route index element={<User/>}/>
                        </Route>
                    </Routes>
                </AuthProvider>
            </BrowserRouter>
        </div>
    )
}

export default App
