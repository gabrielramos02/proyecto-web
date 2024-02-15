import { Link } from "react-router-dom"
import useAuth from "../hooks/useAuth"

const SideBar = () => {
    const { auth } = useAuth()
    return (
        <aside className="md:w-80 lg:w-96 px-5 py-10">
            <p className="text-xl font-bold">Hola: {auth.username} </p>

            <Link
                to="./me"
                className="bg-sky-600 hover:bg-sky-700 w-full p-3 text-white uppercase font-bold block mt-5 text-center rounded-md"
            >
                Inicio
            </Link>
            {auth.role === "director" && (
                <Link
                    to="./gestionusuarios"
                    className="bg-sky-600 hover:bg-sky-700 w-full p-3 text-white uppercase font-bold block mt-5 text-center rounded-md"
                >
                    Gestion de Usuario
                </Link>
            )}
            {auth.role === "medico" && (
                <Link
                    to="./solicitudoperaciones"
                    className="bg-sky-600 hover:bg-sky-700 w-full p-3 text-white uppercase font-bold block mt-5 text-center rounded-md"
                >
                    Solicitud Operacion
                </Link>
            )}

            {auth.role !== "recepcionista" && (
                <Link
                    to="./gestionpaciente"
                    className="bg-sky-600 hover:bg-sky-700 w-full p-3 text-white uppercase font-bold block mt-5 text-center rounded-md"
                >
                    Baja Paciente
                </Link>
            )}

            {auth.role === "director" && (
                <Link
                    to="./consultarestado"
                    className="bg-sky-600 hover:bg-sky-700 w-full p-3 text-white uppercase font-bold block mt-5 text-center rounded-md"
                >
                    Consultar Estado
                </Link>
            )}
        </aside>
    )
}
export default SideBar
