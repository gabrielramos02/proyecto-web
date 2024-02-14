import Alert from "./Alert"

const BuscarHistoria = ({ value }) => {
    const [msg, alert, handleSearch, historiaClinica, setHistoriaClinica] =
        value

    return (
        <div className="container md:flex md:justify-center min-w-screen">
            <div className="w-full md:flex md:justify-center md:flex-col">
                <h1 className="text-4xl font-black text-center">
                    Solicitud Operaciones
                </h1>

                <div className="md:flex md:flex-col md:items-center">
                    <div className="block w-3/5">
                        {msg && <Alert alert={alert} />}
                    </div>
                    <form
                        className="my-10 bg-white shadow rounded-lg px-10 py-5 w-3/5"
                        onSubmit={handleSearch}
                    >
                        <div className="mb-5">
                            <input
                                id="nombre"
                                type="text"
                                placeholder="Historia Clinica"
                                className="w-full p-3 border rounded-xl bg-gray-50"
                                value={historiaClinica}
                                onChange={(e) =>
                                    setHistoriaClinica(e.target.value)
                                }
                            ></input>
                        </div>
                        <input
                            type="submit"
                            value="Buscar Paciente"
                            className="bg-sky-600 w-full py-3 text-white uppercase text-bold rounded-md hover:bg-sky-700 hover:cursor-pointer transition-colors"
                        ></input>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default BuscarHistoria
