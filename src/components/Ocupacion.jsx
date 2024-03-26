import { Line, LineChart, CartesianGrid, XAxis, YAxis } from "recharts"

const Ocupacion = ({ camasSalas, setCamasSalas }) => {
    return (
        <div>
            <h1 className="text-4xl font-black text-center">
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
                <YAxis height={10}/>
            </LineChart>
        </div>
    )
}
export default Ocupacion
