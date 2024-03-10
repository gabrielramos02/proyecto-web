import { Link, useNavigate } from "react-router-dom"
import Alert from "./Alert"
import { useEffect, useState } from "react"
import clienteAxios from "../config/clienteAxios"

const ListaPacientes = () => {
    const [cargar, SetCargar] = useState(true)

    const [pacientes, setPacientes] = useState([])

    const [alert, setAlert] = useState({})

    const navigate = useNavigate()

    useEffect(() => {
        const getPacientes = async () => {
            const access_token = localStorage.getItem("access_token")
            try {
                const { data } = await clienteAxios("/paciente/all", {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${access_token}`,
                    },
                })
                setPacientes(data)
            } catch (error) {
                console.log(error)
                setAlert({
                    msg: error.response.data.detail,
                    error: true,
                })
            }
        }
        getPacientes()
    }, [cargar])

    const solicitudOperacion = async (historia_clinica) => {
        navigate(`./solicitudoperacion/${historia_clinica}`)
    }

    const eliminar = async (historia_clinica) => {
        const access_token = localStorage.getItem("access_token")
        try {
            const { data } = await clienteAxios.put(
                `/paciente/busqueda/${historia_clinica}`,
                {},
                {
                    headers: {
                        accept: "application/json",
                        Authorization: `Bearer ${access_token}`,
                    },
                }
            )
            setAlert({ msg: "Paciente Eliminado", error: false })
            SetCargar(!cargar)
        } catch (error) {
            setAlert({
                msg: error.response.data.detail,
                error: true,
            })
        }
    }

    const { msg } = alert
    return (
        <div className="min-w-96 px-10 w-full">
            <h2 className="text-3xl font-black text-center">
                {" "}
                Lista Pacientes
            </h2>
            <div className="block w-full">{msg && <Alert alert={alert} />}</div>

            <div className="min-w-96 mt-3">
                <div className="container p-2 mx-auto sm:p-4 text-gray-100 md:flex md:justify-center">
                    <div className="overflow-x-auto rounded-lg shadow-lg w-full">
                        <table className="w-full">
                            <thead className="bg-sky-600">
                                <tr className="text-left">
                                    <th className="p-3">Nro Cama</th>
                                    <th className="p-3">Nombre</th>
                                    <th className="p-3">Apellidos</th>
                                    <th className="p-3">Historia Clinica</th>
                                    <th className="p-3">Fecha Ingreso</th>
                                    <th className="p-2">Opciones</th>
                                </tr>
                            </thead>
                            <tbody className="text-black bg-white">
                                {pacientes.map((paciente) => {
                                    return (
                                        <tr
                                            className="border-b border-opacity-20"
                                            key={paciente.id}
                                        >
                                            <td className="p-3">
                                                {paciente.cama.numero}
                                            </td>
                                            <td className="p-3">
                                                {paciente.name}
                                            </td>
                                            <td className="p-3">
                                                {paciente.surname}
                                            </td>
                                            <td className="p-3">
                                                {paciente.historia_clinica}
                                            </td>
                                            <td className="p-3">
                                                {paciente.fecha_ingreso}
                                            </td>
                                            <td className="p-3 text-right">
                                                <button
                                                    className="px-3 py-1 font-semibold rounded-md bg-sky-600 text-white mx-2 hover:cursor-pointer block mb-1.5"
                                                    onClick={() =>
                                                        solicitudOperacion(paciente.historia_clinica)
                                                    }
                                                >
                                                    Solicitud de Operacion
                                                </button>
                                                <button
                                                    className="px-3 py-1 font-semibold rounded-md bg-red-600 text-white mx-2 hover:cursor-pointer block"
                                                    onClick={() =>
                                                        eliminar(paciente.historia_clinica)
                                                    }
                                                >
                                                    Dar de Baja
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ListaPacientes
