import CrearUsuario from "../../components/CrearUsuario"
import ModificarUsuario from "../../components/ModificarUsuario"
import EliminarUsuario from "../../components/EliminarUsuario"
const GestionUsuarios = () => {
    return (
        <div>
            <h1 className="font-black text-3xl text-center">
                Gestion de Usuario
            </h1>
            <div className="lg:flex lg:justify-center mt-3">
                <CrearUsuario />
                <ModificarUsuario />
            </div>
        </div>
    )
}
export default GestionUsuarios
