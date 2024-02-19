import { useState } from "react"
import Alert from "../components/Alert"
import clienteAxios from "../config/clienteAxios"


const Recepcionista = () => {
    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [historia_clinica, setHistoriaClinica] = useState("")
    const [cama, setCama] = useState("")
    const [sala, setSala] = useState("")
    const [alert, setAlert] = useState({})
 
    const handleSubmit = async (e) => {
        e.preventDefault()
        const access_token = localStorage.getItem("access_token")
        if ([name, surname, historia_clinica, cama, sala].includes("")) {
            setAlert({
                msg: "Todos los campos son obligatorios",
                error: true,
            })
            return
        }
        try {
            
            const { data } = await clienteAxios.post(
                `/paciente/`,
                { name, surname, historia_clinica, cama, sala },
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${access_token}`,
                    },
                }
            )
            
            setAlert({ msg: "Paciente Agregado", error: false })
            setName("")
            setSurname("")
            setHistoriaClinica("")
            setCama("")
            setSala("")
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
                    Agregar Paciente
                </h2>
                <div className="block w-full">
                    {msg && <Alert alert={alert} />}
                </div>
                <form
                    className="my-10 bg-white shadow rounded-lg px-10 py-5"
                    onSubmit={handleSubmit}
                >
                    <div className="my-5">
                        <label
                            className="uppercase text-gray-600 block text-md font-bold"
                            htmlFor="name"
                        >
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
                        <label
                            className="uppercase text-gray-600 block text-md font-bold"
                            htmlFor="surname"
                        >
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
                        <label
                            className="uppercase text-gray-600 block text-md font-bold"
                            htmlFor="historiaClinica"
                        >
                            Historia Clinica:
                        </label>
                        <input
                            id="historiaClinica"
                            type="text"
                            placeholder="Historia Clinica"
                            className="w-full mt-3 p-2 border rounded-xl bg-gray-50"
                            value={historia_clinica}
                            onChange={(e) => setHistoriaClinica(e.target.value)}
                        ></input>
                    </div>
                    <div className="my-5">
                        <label
                            className="uppercase text-gray-600 block text-md font-bold"
                            htmlFor="cama"
                        >
                            Cama:
                        </label>
                        <input
                            id="cama"
                            type="text"
                            placeholder="Cama"
                            className="w-full mt-3 p-2 border rounded-xl bg-gray-50"
                            value={cama}
                            onChange={(e) => setCama(e.target.value)}
                        ></input>
                    </div>
                    <div className="my-5">
                        <label
                            className="uppercase text-gray-600 block text-md font-bold"
                            htmlFor="sala"
                        >
                            Sala:
                        </label>
                        <input
                            id="sala"
                            type="text"
                            placeholder="Sala"
                            className="w-full mt-3 p-2 border rounded-xl bg-gray-50"
                            value={sala}
                            onChange={(e) => setSala(e.target.value)}
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
export default Recepcionista
