import BuscarHistoria from "../../components/BuscarHistoria"
import { useState, useEffect } from "react"
import Alert from "../../components/Alert"
import clienteAxios from "../../config/clienteAxios"
import Operacion from "../../components/Operacion"

const OperacionRealizada = () => {
    const [operacion, setOperacion] = useState({})

    const[prueba,setPrueba] = useState(true)

    const [alert, setAlert] = useState({})

    const handleOperacion = async (e) => {
        e.preventDefault()
        setPrueba(!prueba)
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        setPrueba(!prueba)
    }
    const { msg } = alert
    
    if (prueba) {
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
                                <p className="py-1">Nombre del Paciente:</p>
                                <p className="py-1">Apellidos del Paciente:</p>
                                <p className="py-1">Tiempo Estimado:</p>
                                <p className="py-1">Clasificacion:</p>
                            </div>

                            <div className="mb-5">
                                <input
                                    id="tiempoReal"
                                    type="text"
                                    placeholder="Tiempo Real"
                                    className="w-full p-3 border rounded-xl bg-gray-50"
                                    // value={historiaClinica}
                                    // onChange={(e) =>
                                    // setHistoriaClinica(e.target.value)
                                    // }
                                ></input>
                            </div>
                            <div className="mb-5">
                                <textarea
                                    id="descripcion"
                                    type="text"
                                    placeholder="Descripcion"
                                    className="w-full p-3 border rounded-xl bg-gray-50"
                                    // value={historiaClinica}
                                    // onChange={(e) =>
                                    // setHistoriaClinica(e.target.value)
                                    // }
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
                <h1 className="text-4xl font-black text-center">
                    Operaciones por Realizar
                </h1>
                <div>
                    <Operacion value={[handleOperacion, operacion]} />
                </div>
            </div>
        </div>
    )
}
export default OperacionRealizada
