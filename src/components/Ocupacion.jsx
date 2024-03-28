import { Line, LineChart, CartesianGrid, XAxis, YAxis } from "recharts"

const Ocupacion = ({ camasSalas, setCamasSalas }) => {
    return (
        <div className="container flex flex-col items-center">
            <h1 className="text-4xl font-black text-center mb-10">
                Estadisticas de Ocupacion
            </h1>
            <LineChart
                width={1200}
                height={300}
                data={camasSalas}
                margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
            >
                <Line type="monotone" dataKey="ocupacion" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="sala" label={"Salas"}/>
                <YAxis height={10} allowDecimals={false} label={{ value: 'Camas', angle: -90, position: 'insideLeft' }}/>
            </LineChart>
        </div>
    )
}
export default Ocupacion
