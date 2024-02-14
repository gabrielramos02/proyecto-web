import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Alert from "../components/Alert"
import clienteAxios from "../config/clienteAxios"
import useAuth from "../hooks/useAuth"

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [alert, setAlert] = useState({})
    const navigate = useNavigate()

    const { auth, setAuth, cargando } = useAuth()

    const handleSubmit = async (e) => {
        e.preventDefault()

        if ([username, password].includes("")) {
            setAlert({
                msg: "Todos los campos son obligatorios",
                error: true,
            })
            return
        }
        try {
            const { data } = await clienteAxios.post(
                "/login",
                { username, password },
                {
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                    },
                }
            )
            setAlert({})
            localStorage.setItem("access_token", data.access_token)
            setAuth(data)
            window.location.reload()
        } catch (error) {
            setAlert({
                msg: error.response.data.detail,
                error: true,
            })
        }
    }
    const { msg } = alert
    return (
        <div>
            <h1 className="text-sky-600 font-black text-6xl text-center">
                Inicia <span className="text-slate-700">sesion</span>
            </h1>

            {msg && <Alert alert={alert} />}

            <form
                className="my-10 bg-white shadow rounded-lg px-10 py-5"
                onSubmit={handleSubmit}
            >
                <div className="my-5">
                    <label
                        className="uppercase text-gray-600 block text-xl font-bold"
                        htmlFor="username"
                    >
                        Usuario:
                    </label>
                    <input
                        id="username"
                        type="text"
                        placeholder="Usuario"
                        className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    ></input>
                </div>
                <div className="my-5">
                    <label
                        className="uppercase text-gray-600 block text-xl font-bold"
                        htmlFor="password"
                    >
                        Password:
                    </label>
                    <input
                        id="password"
                        type="password"
                        placeholder="Password"
                        className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    ></input>
                </div>
                <input
                    type="submit"
                    value="Iniciar Sesion"
                    className="bg-sky-600 w-full py-3 text-white uppercase text-bold rounded-md hover:bg-sky-700 hover:cursor-pointer transition-colors mb-7 mt-7"
                ></input>
            </form>
        </div>
    )
}
export default Login
