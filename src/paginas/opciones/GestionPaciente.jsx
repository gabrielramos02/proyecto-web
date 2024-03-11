import { Outlet } from "react-router-dom"

const GestionPaciente = () => {
    return (
        <div className="container md:flex md:justify-center min-w-screen">
            <div className="w-full md:flex md:justify-center md:flex-col">
                <h1 className="text-4xl font-black text-center">
                    Gestion Paciente
                </h1>

                <Outlet />
            </div>
        </div>
    )
}
export default GestionPaciente
