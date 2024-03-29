import { useEffect, useState } from "react"
import ListaOperaciones from "../components/ListaOperaciones"
import clienteAxios from "../config/clienteAxios"
import ListaOperacionesUrgencias from "../components/ListaOperacionesUrgencias"
import Ocupacion from "../components/Ocupacion"
import { Link } from "react-router-dom"
import busc from "/src/iconos/loupe.png"

const Director = () => {
    const [operaciones, setOperaciones] = useState([])
    const [operacionesUrgencia, setOperacionesUrgencia] = useState([])
    const [camasSalas, setCamasSalas] = useState([])

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

    return (
        <div>
            <div className="flex justify-between">
            <h1 className="text-4xl font-black">Pagina principal</h1>
            <div className="flex-row">
                <img src={busc} className="h-12 w-12 p-1 rounded-md"></img>
                <span className="font-black text-lg">Buscar</span>
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
                        No hay Operaciones Planificadas
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
                        No hay Operaciones De Urgencia Realizadas En El Ultimo
                        Mes
                    </h1>
                </>
            )}

            <Ocupacion camasSalas={camasSalas} setCamasSala={setCamasSalas} />
        </div>
    )
}
export default Director
