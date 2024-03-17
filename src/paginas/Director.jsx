import { useEffect, useState } from "react"
import ListaOperaciones from "../components/ListaOperaciones"
import clienteAxios from "../config/clienteAxios"

const Director = () => {
    const [operaciones, setOperaciones] = useState([])

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
    }, [])

    return (
        <div>
            <h1 className="text-4xl font-black">Pagina principal</h1>
            <ListaOperaciones
                key={operaciones.length}
                operaciones={operaciones}
                setOperaciones={setOperaciones}
            />
        </div>
    )
}
export default Director
