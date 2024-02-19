import { useState } from "react"

const Urgencias = () => {
    //TODO: implementar
    const [name,setName] = useState("")
    
    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div className="md:flex md:justify-center">
            <div className="min-w-96 md:mr-10 md:w-4/5">
                <h2 className="text-3xl text-center font-black">
                    Agregar Urgencia
                </h2>
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
                            // value={username}
                            // onChange={(e) => setUsername(e.target.value)}
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
                            // value={username}
                            // onChange={(e) => setUsername(e.target.value)}
                        ></input>
                    </div>
                    <div className="my-5">
                        <label className="uppercase text-gray-600 block text-md font-bold">
                            Tiempo Estimado:
                        </label>
                        <input
                            id="tiempoEstimado"
                            type="text"
                            placeholder="Tiempo Estimado"
                            className="w-full mt-3 p-2 border rounded-xl bg-gray-50"
                            // value={username}
                            // onChange={(e) => setUsername(e.target.value)}
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
