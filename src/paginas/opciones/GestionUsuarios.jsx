import CrearUsuario from "../../components/CrearUsuario"
import ModificarUsuario from "../../components/ModificarUsuario"
const GestionUsuarios = () => {
    return (
        <div>
            <h1 className="font-black text-3xl text-center">
                Gestion de Usuario
            </h1>
            <div className="md:flex mt-3 md:justify-center">
                <CrearUsuario />
                <ModificarUsuario />
            </div>
        </div>
    )
}
export default GestionUsuarios
