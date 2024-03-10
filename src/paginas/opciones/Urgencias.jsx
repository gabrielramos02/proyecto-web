import { useState } from "react"
import clienteAxios from "../../config/clienteAxios"
import Alert from "../../components/Alert"

const Urgencias = () => {

    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [tiempoEstimado, setTiempoEstimado] = useState("")

    const [alert, setAlert] = useState({})

    const handleSubmit = async (e) => {
        e.preventDefault()
        const access_token = localStorage.getItem("access_token")
        if ([name, surname, tiempoEstimado].includes("")) {
            setAlert({
                msg: "Todos los campos son obligatorios",
                error: true,
            })
            return
        }
        const payload = {
            operacion: {
                clasificacion: "urgencia",
                tiempo_duracion_estimado: tiempoEstimado,
            },
            paciente_form: { name, surname },
        }
        try {
            const { data } = await clienteAxios.post(
                `/operacion/urgencia`,
                payload,
                {
                    headers: {
                        accept: "application/json",
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${access_token}`,
                    },
                }
            )
            setAlert({ msg: "Operacion Agregadad", error: false })
            setName("")
            setSurname("")
            setTiempoEstimado("")
        } catch (error) {
            setAlert({
                msg: error.response.data.detail,
                error: true,
            })
        }
    }

    const { msg } = alert

    return (
        <div className="md:flex md:justify-center">
            <div className="min-w-96 md:mr-10 md:w-4/5">
                <h2 className="text-3xl text-center font-black">
                    Agregar Urgencia
                </h2>
                <div className="block w-full">
                    {msg && <Alert alert={alert} />}
                </div>
                <form
                    className="my-10 bg-white shadow rounded-lg px-10 py-5"
                    onSubmit={handleSubmit}
                >
                    <div className="my-5">
                        <label className="uppercase text-gray-600 block text-md font-bold">
                            Nombre del Paciente:
                        </label>
                        <input
                            id="name"
                            type="text"
                            placeholder="Nombre del Paciente"
                            className="w-full mt-3 p-2 border rounded-xl bg-gray-50"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        ></input>
                    </div>
                    <div className="my-5">
                        <label className="uppercase text-gray-600 block text-md font-bold">
                            Apellidos del Paciente:
                        </label>
                        <input
                            id="surname"
                            type="text"
                            placeholder="Apellidos del Paciente"
                            className="w-full mt-3 p-2 border rounded-xl bg-gray-50"
                            value={surname}
                            onChange={(e) => setSurname(e.target.value)}
                        ></input>
                    </div>
                    <div className="my-5">
                        <label className="uppercase text-gray-600 block text-md font-bold">
                            Tiempo Estimado:
                        </label>
                        <input
                            id="tiempoEstimado"
                            type="time"
                            placeholder="Tiempo Estimado"
                            className="w-full mt-3 p-2 border rounded-xl bg-gray-50"
                            value={tiempoEstimado}
                            onChange={(e) => setTiempoEstimado(e.target.value)}
                        ></input>
                    </div>
                    <input
                        type="submit"
                        value="Agregar"
                        className="bg-sky-600 w-full py-3 text-white uppercase text-bold rounded-md hover:bg-sky-700 hover:cursor-pointer transition-colors mb-5 mt-5"
                    ></input>
                </form>
            </div>
        </div>
    )
}
export default Urgencias
