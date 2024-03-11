import BuscarHistoria from "../../components/BuscarHistoria"
import { useState, useEffect } from "react"
import Alert from "../../components/Alert"
import clienteAxios from "../../config/clienteAxios"
import Operacion from "../../components/Operacion"

const OperacionRealizada = () => {
    const [operacion, setOperacion] = useState({})
    const [operaciones, setOperaciones] = useState([])
    const [tiempoReal, setTiempoReal] = useState("")
    const [descripcion, setDescripcion] = useState("")

    const [alert, setAlert] = useState({})

    useEffect(() => {
        const getOperaciones = async () => {
            const access_token = localStorage.getItem("access_token")
            try {
                const { data } = await clienteAxios("/operacion/me", {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${access_token}`,
                    },
                })
                setOperaciones(data)
            } catch (error) {
                setAlert({
                    msg: error.response.data.detail,
                    error: true,
                })
            }
        }
        getOperaciones()
    },[tiempoReal])

    
    const handleSubmit = async (e) => {
        e.preventDefault()
        const access_token = localStorage.getItem("access_token")
        if ([tiempoReal, descripcion].includes("")) {
            setAlert({
                msg: "Todos los campos son obligatorios",
                error: true,
            })
            return
        }
        try {
            const { data } = await clienteAxios.post(
                `/operacion/operacionrealizada/${operacion.id}/`,
                {
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${access_token}`,
                    },
                    params:{
                        tiempo_real:tiempoReal,
                        descripcion
                    }
                }
            )
            setAlert({ msg: "Operaracion Realizada", error: false })
            setOperacion("")
            setOperaciones([])
            setTiempoReal("")
            setDescripcion("")
        } catch (error) {
            setAlert({
                msg: error.response.data.detail,
                error: true,
            })
            console.log(error.response.data.detail)
        }
    }
    const { msg } = alert

    if (operacion.id) {
        return (
            <div className="container md:flex md:justify-center min-w-screen">
                <div className="w-full md:flex md:flex-col">
                    <h1 className="text-4xl font-black text-center">
                        Operacion Realizada
                    </h1>

                    <div className="md:flex md:flex-col md:items-center">
                        <div className="block w-3/5">
                            {msg && <Alert alert={alert} />}
                        </div>
                        <form
                            className="my-10 bg-white shadow rounded-lg px-10 py-5 w-3/5"
                            onSubmit={handleSubmit}
                        >
                            <h1 className="text-3xl font-bold text-center mb-3">
                                Operacion
                            </h1>
                            <div className="border font-semibold rounded-md bg-gray-50 w-full text-xl mb-5 px-3">
                                <p className="py-1">
                                    Nombre del Paciente:{" "}
                                    {operacion.paciente.name}
                                </p>
                                <p className="py-1">
                                    Apellidos del Paciente:{" "}
                                    {operacion.paciente.surname}
                                </p>
                                <p className="py-1">
                                    Tiempo Estimado:{" "}
                                    {operacion.tiempo_duracion_estimado}{" "}
                                </p>
                                <p className="py-1">
                                    Clasificacion: {operacion.clasificacion}{" "}
                                </p>
                            </div>

                            <div className="mb-5">
                                <input
                                    id="tiempoReal"
                                    type="time"
                                    placeholder="Tiempo Real"
                                    className="w-full p-3 border rounded-xl bg-gray-50"
                                    value={tiempoReal}
                                    onChange={(e) =>
                                        setTiempoReal(e.target.value)
                                    }
                                ></input>
                            </div>
                            <div className="mb-5">
                                <textarea
                                    id="descripcion"
                                    type="text"
                                    placeholder="Descripcion"
                                    className="w-full p-3 border rounded-xl bg-gray-50"
                                    value={descripcion}
                                    onChange={(e) =>
                                        setDescripcion(e.target.value)
                                    }
                                ></textarea>
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
        <div className="container md:flex md:justify-center min-w-screen">
            <div className="w-full md:flex md:justify-center md:flex-col">
                {operaciones && operaciones.length ? (
                    <>
                        {" "}
                        <h1 className="text-4xl font-black text-center">
                            Operaciones por Realizar
                        </h1>
                    </>
                ) : (
                    <>
                        <h1 className="text-4xl font-black text-center">
                            No hay Operaciones
                        </h1>
                    </>
                )}
                <div className="md:flex md:flex-row md:flex-wrap md:justify-center">
                    {operaciones.map((operacion) => {
                        return (
                            <Operacion
                                key={operacion.id}
                                name={operacion.paciente.name}
                                surname={operacion.paciente.surname}
                                tiempo={operacion.tiempo_duracion_estimado}
                                clasificacion={operacion.clasificacion}
                                setOperacion={setOperacion}
                                operacion={operacion}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
export default OperacionRealizada
