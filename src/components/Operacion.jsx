const Operacion = ({
    name,
    surname,
    tiempo,
    clasificacion,
    operacion,
    setOperacion,
}) => {
    return (
        <div className="bg-white my-5 mx-10 py-5 px-3 md:w-2/5 rounded-lg md:flex md:flex-col md:items-center">
            <h1 className="text-3xl font-bold text-center mb-3">Operación</h1>
            <div className="border font-semibold rounded-md bg-gray-50 w-full text-xl mx-3 px-3">
                <p className="py-1">Nombre del Paciente: {name}</p>
                <p className="py-1">Apellidos del Paciente: {surname}</p>
                <p className="py-1">Tiempo Estimado: {tiempo}</p>
                <p className="py-1">Clasificación: {clasificacion}</p>
            </div>
            <input
                type="button"
                value="Realizado"
                className="text-center my-5 py-2 px-6 bg-sky-600 rounded-lg text-white font-semibold text-xl"
                onClick={()=>setOperacion(operacion)}
            ></input>
        </div>
    )
}
export default Operacion
