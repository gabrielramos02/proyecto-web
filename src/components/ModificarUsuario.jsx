import { useState } from "react"
import Alert from "./Alert"
import clienteAxios from "../config/clienteAxios"

const ModificarUsuario = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConf, setPasswordConf] = useState("")

    const [alert, setAlert] = useState({})

    const handleSubmit = async (e) => {
        e.preventDefault()
        const access_token = localStorage.getItem("access_token")
        if ([username, password, password].includes("")) {
            setAlert({
                msg: "Todos los campos son obligatorios",
                error: true,
            })
            return
        }
        if (password !== passwordConf) {
            setAlert({
                msg: "Las contrase;as deben coindicir",
                error: true,
            })
            return
        }
        try {
            const { data } = await clienteAxios.put(
                `/user/changepassword`,
                { username, password },
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${access_token}`,
                    },
                }
            )
            setAlert({ msg: "Usuario Actualizado", error: false })
            setUsername("")
            setPassword("")
            setPasswordConf("")
        } catch (error) {
            setAlert({
                msg: error.response.data.detail,
                error: true,
            })
        }
    }
    const { msg } = alert
    return (
        <div className="min-w-96 md:ml-10 md:w-2/5">
            <h2 className="text-3xl font-black text-center">
                Modificar Usuario
            </h2>
            <div className="block w-full">{msg && <Alert alert={alert} />}</div>
            <form
                className="my-10 bg-white shadow rounded-lg px-10 py-5"
                onSubmit={handleSubmit}
            >
                <div className="my-5">
                    <label
                        className="uppercase text-gray-600 block text-md font-bold"
                        htmlFor="usernameMod"
                    >
                        Username:
                    </label>
                    <input
                        id="usernameMod"
                        type="text"
                        placeholder="Username"
                        className="w-full mt-3 p-2 border rounded-xl bg-gray-50"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    ></input>
                </div>
                <div className="my-5">
                    <label
                        className="uppercase text-gray-600 block text-md font-bold"
                        htmlFor="passwordMod"
                    >
                        Password:
                    </label>
                    <input
                        id="passwordMod"
                        type="password"
                        placeholder="Password"
                        className="w-full mt-3 p-2 border rounded-xl bg-gray-50"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    ></input>
                </div>
                <div className="my-5">
                    <label
                        className="uppercase text-gray-600 block text-md font-bold"
                        htmlFor="passwordConfMod"
                    >
                        Confirmar Password:
                    </label>
                    <input
                        id="passwordConfMod"
                        type="password"
                        placeholder="Password"
                        className="w-full mt-3 p-2 border rounded-xl bg-gray-50"
                        value={passwordConf}
                        onChange={(e) => setPasswordConf(e.target.value)}
                    ></input>
                </div>

                <input
                    type="submit"
                    value="Modificar Usuario"
                    className="bg-sky-600 w-full py-2 text-white uppercase text-bold rounded-md hover:bg-sky-700 hover:cursor-pointer transition-colors mb-5 mt-5"
                ></input>
            </form>
        </div>
    )
}

export default ModificarUsuario
