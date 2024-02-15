import { useState, useEffect } from "react"
import Alert from "../../components/Alert"
import clienteAxios from "../../config/clienteAxios"
import BuscarHistoria from "../../components/BuscarHistoria"

const SolicitudOperaciones = () => {
    const [historiaClinica, setHistoriaClinica] = useState("")

    const [paciente, setPaciente] = useState({})

    const [alert, setAlert] = useState({})

    const handleSearch = async (e) => {
        e.preventDefault()
        const access_token = localStorage.getItem("access_token")
        if ([historiaClinica].includes("")) {
            setAlert({
                msg: "Todos los campos son obligatorios",
                error: true,
            })
            return
        }
        try {
            const { data } = await clienteAxios(
                `/paciente/${historiaClinica}`,
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${access_token}`,
                    },
                }
            )
            setAlert({ msg: "Usuario Encontrado", error: false })
            setPaciente(data)
            setHistoriaClinica("")
        } catch (error) {
            setAlert({
                msg: error.response.data.detail,
                error: true,
            })
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        return
    }
    const { msg } = alert

    if (paciente.id) {
        return (
            <div className="container md:flex md:justify-center min-w-screen">
                <div className="w-full md:flex md:flex-col">
                    <h1 className="text-4xl font-black text-center">
                        Solicitud Operaciones
                    </h1>

                    <div className="md:flex md:flex-col md:items-center">
                        <div className="block w-3/5">
                            {msg && <Alert alert={alert} />}
                        </div>
                        <form
                            className="my-10 bg-white shadow rounded-lg px-10 py-5 w-3/5"
                            onSubmit={handleSubmit}
                        >
                            <div className="mb-5 w-full rounded-xl p-3 text-center bg-sky-600 text-white font-semibold uppercase">
                                Paciente: {paciente.name}
                            </div>

                            <div className="mb-5">
                                <input
                                    id="tiempoEstimado"
                                    type="text"
                                    placeholder="Tiempo Estimado"
                                    className="w-full p-3 border rounded-xl bg-gray-50"
                                    value={historiaClinica}
                                    onChange={(e) =>
                                        setHistoriaClinica(e.target.value)
                                    }
                                ></input>
                            </div>
                            <div className="md:flex md:justify-between mb-5 border py-3 px-2 rounded-xl">
                                <label className="font-semibold uppercase">
                                    Clasificacion:
                                </label>
                                <select className="w-1/2 font-semibold uppercase text-center">
                                    <option></option>
                                    <option className="font-semibold">
                                        Prioritarias
                                    </option>
                                    <option className="font-semibold">
                                        Regulares
                                    </option>
                                </select>
                            </div>
                            <input
                                type="submit"
                                value="Agregar Solicitud"
                                className="bg-sky-600 w-full py-3 text-white uppercase font-bold rounded-md hover:bg-sky-700 hover:cursor-pointer transition-colors"
                            ></input>
                        </form>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <BuscarHistoria
            value={[
                msg,
                alert,
                handleSearch,
                historiaClinica,
                setHistoriaClinica,
            ]}
        />
    )
}
export default SolicitudOperaciones
