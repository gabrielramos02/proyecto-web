import { Link, useNavigate } from "react-router-dom"
import Alert from "./Alert"
import { useEffect, useState } from "react"
import clienteAxios from "../config/clienteAxios"
import docs from "/src/iconos/documents.png"
import dele from "/src/iconos/delete.png"

const ListaPacientes = () => {
    const [cargar, SetCargar] = useState(true)
    const [sala, setSala] = useState("1")

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

    const solicitudOperacion = async (id) => {
        navigate(`./solicitudoperacion/${id}`)
    }

    const eliminar = async (id) => {
        const access_token = localStorage.getItem("access_token")
        try {
            const { data } = await clienteAxios.put(
                `/paciente/${id}`,
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
            {pacientes && pacientes.length ? (
                <>
                    {" "}
                    <h2 className="text-3xl font-black text-center">
                        {" "}
                        Lista de pacientes.
                    </h2>
                    <div className="min-w-96 mt-3">
                        <div className="container p-2 mx-auto sm:p-4 text-gray-100 md:flex md:justify-center">
                            <div className="overflow-x-auto rounded-lg shadow-lg w-full">
                                <table className="w-full">
                                    <thead className="bg-sky-600">
                                        <tr className="border-b">
                                            <td
                                                colSpan={6}
                                                className="text-center font-bold text-lg"
                                            >
                                                <div className="flex justify-between">
                                                    <div className="w-1/3">
                                                        <button
                                                            type="button"
                                                            onClick={() => {
                                                                if (
                                                                    Number(
                                                                        sala
                                                                    ) > 1
                                                                ) {
                                                                    setSala(
                                                                        String(
                                                                            Number(
                                                                                sala
                                                                            ) -
                                                                                1
                                                                        )
                                                                    )
                                                                }
                                                            }}
                                                            className="hover:bg-sky-700"
                                                        >
                                                            Anterior
                                                        </button>
                                                    </div>
                                                    <p className="w-1/3">
                                                        Sala:{sala}
                                                    </p>
                                                    <div className="w-1/3">
                                                        <button
                                                            type="button"
                                                            onClick={() => {
                                                                if (
                                                                    Number(
                                                                        sala
                                                                    ) < 10
                                                                ) {
                                                                    setSala(
                                                                        String(
                                                                            Number(
                                                                                sala
                                                                            ) +
                                                                                1
                                                                        )
                                                                    )
                                                                }
                                                            }}
                                                        >
                                                            Siguiente
                                                        </button>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="text-left">
                                            <th className="p-3">Nro Cama</th>
                                            <th className="p-3">Nombre</th>
                                            <th className="p-3">Apellidos</th>
                                            <th className="p-3">
                                                Historia Clinica
                                            </th>
                                            <th className="p-3">
                                                Fecha Ingreso
                                            </th>
                                            <th className="p-2">Opciones</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-black bg-white">
                                        {pacientes
                                            .filter(
                                                (paciente) =>
                                                    paciente.cama.sala
                                                        .numero === sala
                                            )
                                            .sort(
                                                (a, b) =>
                                                    a.cama.numero -
                                                    b.cama.numero
                                            )
                                            .map((paciente) => {
                                                return (
                                                    <tr
                                                        className="border-b border-opacity-20"
                                                        key={paciente.id}
                                                    >
                                                        <td className="p-3">
                                                            {
                                                                paciente.cama
                                                                    .numero
                                                            }
                                                        </td>
                                                        <td className="p-3">
                                                            {paciente.name}
                                                        </td>
                                                        <td className="p-3">
                                                            {paciente.surname}
                                                        </td>
                                                        <td className="p-3">
                                                            {
                                                                paciente.historia_clinica
                                                            }
                                                        </td>
                                                        <td className="p-3">
                                                            {
                                                                paciente.fecha_ingreso
                                                            }
                                                        </td>
                                                        <div className="flex gap-3 justify-center">
                                                        <td className="p-3 text-right flex flex-row gap-3">
                                                            <img
                                                                src={docs}
                                                                className="h-10 p-1 w-10 rounded-md hover:cursor-pointer bg-blue-300 hover:bg-blue-500"
                                                                onClick={() =>
                                                                    solicitudOperacion(
                                                                        paciente.id
                                                                    )
                                                                }
                                                            >
                                                          
                                                            </img>
                                                            <img
                                                                className="w-10 h-10 rounded-md p-1 bg-red-300 hover:bg-red-600"
                                                                src={dele}
                                                                onClick={() =>
                                                                    eliminar(
                                                                        paciente.id
                                                                    )
                                                                }
                                                            >
                                                           
                                                            </img>
                                                           
                                                        </td>
                                                        </div>
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
export default ListaPacientes
