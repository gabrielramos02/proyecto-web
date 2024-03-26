import { useEffect, useState } from "react"
import ListaOperaciones from "../components/ListaOperaciones"
import clienteAxios from "../config/clienteAxios"
import ListaOperacionesUrgencias from "../components/ListaOperacionesUrgencias"
import Ocupacion from "../components/Ocupacion"

const Director = () => {
    const [operaciones, setOperaciones] = useState([])
    const [operacionesUrgencia, setOperacionesUrgencia] = useState([])
    const [camasSalas,setCamasSalas] = useState([])

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
            <h1 className="text-4xl font-black">Pagina principal</h1>
            <ListaOperaciones
                key={"operaciones"}
                operaciones={operaciones}
                setOperaciones={setOperaciones}
            />
            <ListaOperacionesUrgencias
                key={"urgencia"}
                operacionesUrgencia={operacionesUrgencia}
                setOperacionesUrgencia={setOperacionesUrgencia}
            />
            <Ocupacion camasSalas={camasSalas} setCamasSala={setCamasSalas} />
        </div>
    )
}
export default Director
