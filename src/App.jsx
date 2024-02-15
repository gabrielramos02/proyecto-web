import { BrowserRouter, Route, Routes } from "react-router-dom"

import AuthLayout from "./layouts/AuthLayout"

import Login from "./paginas/Login"
import User from "./paginas/User"
import ConsultarEstado from "./paginas/opciones/ConsultarEstado"
import GestionPaciente from "./paginas/opciones/GestionPaciente"
import GestionUsuarios from "./paginas/opciones/GestionUsuarios"
import SolicitudOperaciones from "./paginas/opciones/SolicitudOperaciones"
import Urgencias from "./paginas/opciones/Urgencias"
import Me from "./paginas/Me"

import { AuthProvider } from "./context/AuthProvider"
import RutaProtegida from "./layouts/RutaProtegida"
import OperacionRealizada from "./paginas/opciones/OperacionRealizada"

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <AuthProvider>
                    <Routes>
                        <Route path="/" element={<AuthLayout />}>
                            <Route index element={<Login />} />
                        </Route>

                        <Route path="/user" element={<RutaProtegida />}>
                            <Route element={<User />}>
                                <Route path="me" index element={<Me />} />
                                <Route
                                    path="solicitudoperaciones"
                                    element={<SolicitudOperaciones />}
                                />
                                <Route
                                    path="gestionusuarios"
                                    element={<GestionUsuarios />}
                                />
                                <Route
                                    path="urgencias"
                                    element={<Urgencias />}
                                />
                                <Route
                                    path="consultarestado"
                                    element={<ConsultarEstado />}
                                />
                                <Route
                                    path="gestionpaciente"
                                    element={<GestionPaciente />}
                                />
                                <Route
                                    path="operacionrealizada"
                                    element={<OperacionRealizada />}
                                />
                            </Route>
                        </Route>
                    </Routes>
                </AuthProvider>
            </BrowserRouter>
        </div>
    )
}

export default App
