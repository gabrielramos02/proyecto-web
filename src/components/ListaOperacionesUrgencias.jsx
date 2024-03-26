const ListaOperacionesUrgencias = ({
    operacionesUrgencia,
    setOperacionesUrgencia,
}) => {
    return (
        <div>
            <h1 className="text-4xl font-black text-center">
                Lista Operaciones Urgencia Ultimo Mes
            </h1>
            <div className="container p-2 mx-auto sm:p-4 text-gray-100 md:flex md:justify-center">
                <div className="overflow-x-auto rounded-lg shadow-lg w-full">
                    <table className="w-full">
                        <thead className="bg-sky-600">
                            <tr className="text-left">
                                <th className="p-3">
                                    Nombre y Apellidos del Paciente
                                </th>
                                <th className="p-3">Clasificacion</th>
                                <th className="p-3">Encargado</th>
                                <th className="p-3">Fecha Realizada</th>
                                <th className="p-3">Duracion Real</th>
                            </tr>
                        </thead>
                        <tbody className="text-black bg-white">
                            {operacionesUrgencia.map((operacion) => {
                                return (
                                    <tr
                                        className="border-b border-opacity-20"
                                        key={operacion.id}
                                    >
                                        <td className="p-3">
                                            {operacion.paciente.name}{" "}
                                            {operacion.paciente.surname}
                                        </td>
                                        <td className="p-3">
                                            {operacion.clasificacion}
                                        </td>
                                        <td className="p-3">
                                            {operacion.encargado.username}
                                        </td>
                                        <td className="p-3">
                                            {operacion.fecha_realizada}
                                        </td>
                                        <td className="p-3">
                                            {operacion.tiempo_duracion_real}
                                            {"h"}
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default ListaOperacionesUrgencias
