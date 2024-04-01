import { useEffect, useState } from "react"
import ListaOperaciones from "../components/ListaOperaciones"
import clienteAxios from "../config/clienteAxios"
import ListaOperacionesUrgencias from "../components/ListaOperacionesUrgencias"
import Ocupacion from "../components/Ocupacion"
import busc from "/src/iconos/loupe.png"
import Modal from "react-modal"
import Alert from "../components/Alert"
import { useNavigate } from "react-router-dom"

Modal.setAppElement("#root")

const Director = () => {
    const [operaciones, setOperaciones] = useState([])
    const [operacionesUrgencia, setOperacionesUrgencia] = useState([])
    const [camasSalas, setCamasSalas] = useState([])
    const [buscar, SetBuscar] = useState(false)
    const [fechaInicio, setFechaInicio] = useState("")
    const [fechaFin, setFechaFin] = useState("")
    const [alert, setAlert] = useState({})
    const navigate = useNavigate()
    useEffect(() => {
        const getOperaciones = async () => {
            const access_token = localStorage.getItem("access_token")
            try {
                const { data } = await clienteAxios(
                    "/operacion/operacionesplanificadas/all",
                    {
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${access_token}`,
                        },
                    }
                )
                setOperaciones(data)
            } catch (error) {
                console.log(error)
            }
        }
        getOperaciones()
        const getOperacionesUrgencia = async () => {
            const access_token = localStorage.getItem("access_token")
            try {
                const { data } = await clienteAxios(
                    "/operacion/operacionesultimomes",
                    {
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${access_token}`,
                        },
                    }
                )
                setOperacionesUrgencia(data)
            } catch (error) {
                console.log(error)
            }
        }
        getOperacionesUrgencia()
        const getCamasSalas = async () => {
            const access_token = localStorage.getItem("access_token")
            try {
                const { data } = await clienteAxios("/ocupacion", {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${access_token}`,
                    },
                })
                // data = data.filter(cama => cama)
                setCamasSalas(data)
            } catch (error) {
                setAlert({
                    msg: error.response.data.detail,
                    error: true,
                })
            }
        }
        getCamasSalas()
    }, [])

    const mostrarFecha = () => {
        SetBuscar(!buscar)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if ([fechaInicio, fechaFin].includes("")) {
            setAlert({
                msg: "Todos los campos son obligatorios.",
                error: true,
            })
            return
            
        }
        navigate(`/user/pacientesporfecha/${fechaInicio}/${fechaFin}`)
        mostrarFecha()
    }
    const { msg } = alert
    return (
        <div>
            <div className="flex justify-between">
                <h1 className="text-4xl font-black">Página principal.</h1>
                <div className="">
                    <img
                        src={busc}
                        className="h-12 w-12 p-1 rounded-md"
                        onClick={() => mostrarFecha()}
                    ></img>
                    <span className="font-black text-lg">Buscar</span>
                    <Modal
                        isOpen={buscar}
                        onRequestClose={mostrarFecha}
                        contentLabel="Busqueda por Fecha"
                        className="absolute top-24 right-20 bg-white border rounded-lg p-3"
                    >
                        <form onSubmit={handleSubmit}>
                            <div className="block w-full">
                                {msg && <Alert alert={alert} />}
                            </div>
                            <div className="">
                                <label
                                    className="uppercase text-gray-600 text-md font-bold"
                                    htmlFor="surname"
                                >
                                    Fecha Inicio:
                                </label>
                                <input
                                    id="surname"
                                    type="date"
                                    placeholder="Apellidos del Paciente"
                                    className="w-full mt-3 p-2 border rounded-xl bg-gray-50"
                                    value={fechaInicio}
                                    onChange={(e) =>
                                        setFechaInicio(e.target.value)
                                    }
                                ></input>
                            </div>
                            <div className="my-2">
                                <label
                                    className="uppercase text-gray-600 text-md font-bold"
                                    htmlFor="surname"
                                >
                                    Fecha Fin:
                                </label>
                                <input
                                    id="surname"
                                    type="date"
                                    placeholder="Apellidos del Paciente"
                                    className="w-full mt-3 p-2 border rounded-xl bg-gray-50"
                                    value={fechaFin}
                                    onChange={(e) =>
                                        setFechaFin(e.target.value)
                                    }
                                ></input>
                            </div>
                            <input
                                type="submit"
                                value="Buscar"
                                className="bg-sky-600 w-full py-3 text-white uppercase text-bold rounded-md hover:bg-sky-700 hover:cursor-pointer transition-colors mb-5 mt-5"
                            ></input>
                        </form>
                    </Modal>
                </div>
            </div>
            {operaciones.length ? (
                <>
                    <ListaOperaciones
                        key={"operaciones"}
                        operaciones={operaciones}
                        setOperaciones={setOperaciones}
                    />
                </>
            ) : (
                <>
                    <h1 className="text-4xl font-black text-center m-11">
                        No hay operaciones planificadas.
                    </h1>
                </>
            )}
            {operacionesUrgencia.length ? (
                <>
                    <ListaOperacionesUrgencias
                        key={"urgencia"}
                        operacionesUrgencia={operacionesUrgencia}
                        setOperacionesUrgencia={setOperacionesUrgencia}
                    />
                </>
            ) : (
                <>
                    <h1 className="text-4xl font-black text-center m-11">
                        No hay operaciones de urgencia realizadas en el último
                        mes.
                    </h1>
                </>
            )}

            <Ocupacion camasSalas={camasSalas} setCamasSala={setCamasSalas} />
        </div>
    )
}
export default Director
