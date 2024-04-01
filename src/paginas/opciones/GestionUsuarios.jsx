import CrearUsuario from "../../components/CrearUsuario"
import ModificarUsuario from "../../components/ListaUsuarios"
import EliminarUsuario from "../../components/EliminarUsuario"
import { useState } from "react"
import { Link, Outlet } from "react-router-dom"

const GestionUsuarios = () => {
    const[cargar,SetCargar]=useState(false)
    return (
        <div>
            <h1 className="font-black text-3xl text-center">
                Gestión de usuarios.
            </h1>
            <div className="lg:flex lg:justify-center mt-3">
                <Outlet/>
            </div>
            
        </div>
    )
}
export default GestionUsuarios
