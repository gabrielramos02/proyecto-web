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
                Gestion de Usuario
            </h1>
            <div className="lg:flex lg:justify-center mt-3">
                <Outlet/>
            </div>
            <Link
                to="./crearusuario"
                className="bg-sky-600 hover:bg-sky-700 w-full p-3 text-white uppercase font-bold block mt-5 text-center rounded-md"
            >
                Inicio
            </Link>
        </div>
    )
}
export default GestionUsuarios
