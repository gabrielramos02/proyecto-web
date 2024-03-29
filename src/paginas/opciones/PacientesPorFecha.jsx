import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import clienteAxios from "../../config/clienteAxios"

const PacientesPorFecha = () => {
    const params = useParams()
    const [pacientes, setPacientes] = useState([])

    useEffect(() => {
        const getPacientes = async () => {
            const access_token = localStorage.getItem("access_token")
            try {
                const { data } = await clienteAxios.get("/paciente", {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${access_token}`,
                    },
                    params: {
                        fecha_inicio: params.fechainicio,
                        fecha_fin: params.fechafin,
                    },
                })
                setPacientes(data)
            } catch (error) {
                console.log(error)
            }
        }
        getPacientes()
    }, [])
    return (
        <div className="min-w-96 px-10 w-full">
            {pacientes && pacientes.length ? (
                <>
                    {" "}
                    <h2 className="text-3xl font-black text-center">
                        {" "}
                        Lista Pacientes
                    </h2>
                    <div className="min-w-96 mt-3">
                        <div className="container p-2 mx-auto sm:p-4 text-gray-100 md:flex md:justify-center">
                            <div className="overflow-x-auto rounded-lg shadow-lg w-full">
                                <table className="w-full">
                                    <thead className="bg-sky-600">
                                        <tr className="text-left">
                                            <th className="p-3">Nombre</th>
                                            <th className="p-3">Apellidos</th>
                                            <th className="p-3">
                                                Historia Clinica
                                            </th>
                                            <th className="p-3">
                                                Fecha Ingreso
                                            </th>
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
                                                        {paciente.name}
                                                    </td>
                                                    <td className="p-3">
                                                        {paciente.surname}
                                                    </td>
                                                    <td className="p-3">
                                                        {paciente.historia_clinica ===
                                                        null
                                                            ? "Urgencia"
                                                            : paciente.historia_clinica}
                                                    </td>
                                                    <td className="p-3">
                                                        {paciente.fecha_ingreso}
                                                    </td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <h1 className="text-4xl font-black text-center">
                        No hay Pacientes
                    </h1>
                </>
            )}
        </div>
    )
}
export default PacientesPorFecha
