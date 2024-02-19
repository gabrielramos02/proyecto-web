const GestionPaciente = () => {
    //TODO: implementar
    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div className="container md:flex md:justify-center min-w-screen">
            <div className="w-full md:flex md:justify-center md:flex-col">
                <h1 className="text-4xl font-black text-center">
                    Baja Paciente
                </h1>

                <div className="md:flex md:flex-col md:items-center">
                    <div className="block w-3/5">
                        {/* {msg && <Alert alert={alert} />} */}
                    </div>
                    <form
                        className="min-w-96 my-10 bg-white shadow rounded-lg px-10 py-5 lg:w-3/5"
                        onSubmit={handleSubmit}
                    >
                        <div className="mb-5">
                            <input
                                id="nombre"
                                type="text"
                                placeholder="Historia Clinica"
                                className="w-full p-3 border rounded-xl bg-gray-50"
                                // value={historiaClinica}
                                // onChange={(e) =>
                                // setHistoriaClinica(e.target.value)
                                // }
                            ></input>
                        </div>
                        <input
                            type="submit"
                            value="Dar de Baja"
                            className="bg-red-600 w-full py-3 text-white uppercase text-bold rounded-md hover:bg-sky-700 hover:cursor-pointer transition-colors"
                        ></input>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default GestionPaciente
