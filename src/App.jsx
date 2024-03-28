import { BrowserRouter, Route, Routes } from "react-router-dom"

import AuthLayout from "./layouts/AuthLayout"
import RutaProtegida from "./layouts/RutaProtegida"

import Login from "./paginas/Login"
import User from "./paginas/User"
import ConsultarEstado from "./paginas/opciones/ConsultarEstado"
import GestionPaciente from "./paginas/opciones/GestionPaciente"
import GestionUsuarios from "./paginas/opciones/GestionUsuarios"
import SolicitudOperaciones from "./paginas/opciones/SolicitudOperaciones"
import Urgencias from "./paginas/opciones/Urgencias"
import Me from "./paginas/Me"
import OperacionRealizada from "./paginas/opciones/OperacionRealizada"

import { AuthProvider } from "./context/AuthProvider"

import ModificarUsuario from "./components/ListaUsuarios"
import CrearUsuario from "./components/CrearUsuario"
import EditarUsuario from "./components/EditarUsuario"
import ListaPacientes from "./components/ListaPacientes"

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
                                    path="gestionusuarios"
                                    element={<GestionUsuarios />}
                                >
                                    <Route
                                        index
                                        path=""
                                        element={<ModificarUsuario />}
                                    />
                                    <Route
                                        path="crearusuario"
                                        element={<CrearUsuario />}
                                    />
                                    <Route
                                        path="editarusuario/:id"
                                        element={<EditarUsuario />}
                                    />
                                </Route>
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
                                >
                                    <Route
                                        path=""
                                        element={<ListaPacientes />}
                                    />
                                    <Route
                                        path="solicitudoperacion/:id"
                                        element={<SolicitudOperaciones />}
                                    />
                                </Route>
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
