import CrearUsuario from "../../components/CrearUsuario"
import ModificarUsuario from "../../components/ModificarUsuario"
import EliminarUsuario from "../../components/EliminarUsuario"
import { useState } from "react"
const GestionUsuarios = () => {
    const[cargar,SetCargar]=useState(false)
    return (
        <div>
            <h1 className="font-black text-3xl text-center">
                Gestion de Usuario
            </h1>
            <div className="lg:flex lg:justify-center mt-3">
                <CrearUsuario value={[cargar,SetCargar]}/>
                <ModificarUsuario value={[cargar,SetCargar]}/>
            </div>
        </div>
    )
}
export default GestionUsuarios
