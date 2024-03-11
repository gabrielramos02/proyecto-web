import { Link } from "react-router-dom"
import useAuth from "../hooks/useAuth"

const SideBar = ({ value }) => {
    const { auth } = useAuth()
    const [isOpen, setIsOpen] = value
    return (
        <aside
            className={`min-w-72 w-1/2 md:w-80 lg:w-96 px-5 py-10 ${
                isOpen ? "" : "hidden"
            }  `}
        >
            <p className="text-xl font-bold">Hola: {auth.username} </p>

            <Link
                to="./me"
                className="bg-sky-600 hover:bg-sky-700 w-full p-3 text-white uppercase font-bold block mt-5 text-center rounded-md"
                onClick={()=>setIsOpen(false)}
            >
                Inicio
            </Link>
            {auth.role === "director" && (
                <Link
                    to="./gestionusuarios"
                    className="bg-sky-600 hover:bg-sky-700 w-full p-3 text-white uppercase font-bold block mt-5 text-center rounded-md"
                    onClick={()=>setIsOpen(false)}
                >
                    Gestion de Usuario
                </Link>
            )}
            
            {auth.role === "medico" && (
                <Link
                    to="./operacionrealizada"
                    className="bg-sky-600 hover:bg-sky-700 w-full p-3 text-white uppercase font-bold block mt-5 text-center rounded-md"
                    onClick={()=>setIsOpen(false)}
                >
                    Gestion de Operacion
                </Link>
            )}

            {auth.role !== "recepcionista" && (
                <Link
                    to="./gestionpaciente"
                    className="bg-sky-600 hover:bg-sky-700 w-full p-3 text-white uppercase font-bold block mt-5 text-center rounded-md"
                    onClick={()=>setIsOpen(false)}
                >
                    Gestion Paciente
                </Link>
            )}

            {auth.role === "director" && (
                <Link
                    to="./consultarestado"
                    className="bg-sky-600 hover:bg-sky-700 w-full p-3 text-white uppercase font-bold block mt-5 text-center rounded-md"
                    onClick={()=>setIsOpen(false)}
                >
                    Consultar Estado
                </Link>
            )}
            {auth.role === "medico" && (
                <Link
                    to="./urgencias"
                    className="bg-sky-600 hover:bg-sky-700 w-full p-3 text-white uppercase font-bold block mt-5 text-center rounded-md"
                    onClick={()=>setIsOpen(false)}
                >
                    Urgencias
                </Link>
            )}
        </aside>
    )
}
export default SideBar
