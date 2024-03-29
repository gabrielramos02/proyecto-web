
const ListaOperaciones = ({ operaciones, setOperaciones }) => {
    return (
        <div>
            <h1 className="text-4xl font-black text-center">
                Operaciones Planificadas
            </h1>
            <div className="container p-2 mx-auto sm:p-4 text-gray-100 md:flex md:justify-center">
                <div className="overflow-x-auto rounded-lg shadow-lg w-full">
                    <table className="w-full">
                        <thead className="bg-sky-600">
                            <tr className="text-left">
                                <th className="p-3">Hora Ejecucion</th>
                                <th className="p-3">Clasificacion</th>
                                <th className="p-3">
                                    Nombre y Apellidos del Paciente
                                </th>
                                <th className="p-3">Encargado</th>
                                <th className="p-3">Duracion Estimada</th>
                            </tr>
                        </thead>
                        <tbody className="text-black bg-white">
                            {operaciones.map((operacion) => {
                                return (
                                    <tr
                                        className="border-b border-opacity-20"
                                        key={operacion.id}
                                    >
                                        <td className="p-3">
                                            {operacion.hora_ejecucion}
                                        </td>
                                        <td className="p-3">
                                            {
                                                operacion.solicitud_operacion
                                                    .clasificacion
                                            }
                                        </td>
                                        <td className="p-3">
                                            {
                                                operacion.solicitud_operacion
                                                    .paciente.name
                                            }{" "}
                                            {
                                                operacion.solicitud_operacion
                                                    .paciente.surname
                                            }
                                        </td>
                                        <td className="p-3">
                                            {
                                                operacion.solicitud_operacion
                                                    .encargado.username
                                            }
                                        </td>
                                        <td className="p-3">
                                            {
                                                operacion.solicitud_operacion
                                                    .tiempo_duracion_estimado
                                            }
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
export default ListaOperaciones
