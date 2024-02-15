const Operacion = ({ value }) => {
    const [handleOperacion, operacion] = value
    return (
        <div className="bg-white my-5 mx-10 py-5 px-3 md:w-2/5 rounded-lg md:flex md:flex-col md:items-center">
            <h1 className="text-3xl font-bold text-center mb-3">Operacion</h1>
            <div className="border font-semibold rounded-md bg-gray-50 w-full text-xl mx-3 px-3">
                <p className="py-1">Nombre del Paciente:</p>
                <p className="py-1">Apellidos del Paciente:</p>
                <p className="py-1">Tiempo Estimado:</p>
                <p className="py-1">Clasificacion:</p>
            </div>
            <input
                type="button"
                value="Realizado"
                className="text-center my-5 py-2 px-6 bg-sky-600 rounded-lg text-white font-semibold text-xl"
                onClick={handleOperacion}
            ></input>
        </div>
    )
}
export default Operacion
