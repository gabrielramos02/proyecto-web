import { useState, useEffect } from "react"
import Alert from "./Alert"
import clienteAxios from "../config/clienteAxios"

const ModificarUsuario = ({value}) => {
    const [cargar,SetCargar]= value
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [users, setUsers] = useState([])
    const [passwordConf, setPasswordConf] = useState("")

    const [alert, setAlert] = useState({})

    useEffect(() => {
        const getUsers = async () => {
            const access_token = localStorage.getItem("access_token")
            try {
                const { data } = await clienteAxios("/user/all", {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${access_token}`,
                    },
                })
                setUsers(data)
            } catch (error) {
                setAlert({
                    msg: error.response.data.detail,
                    error: true,
                })
            }
        }
        getUsers()
    }, [cargar])

    const editar = async (username) => {
        setUsername(username)
    }
    const eliminar = async (username) => {
        const access_token = localStorage.getItem("access_token")
        try {
            const { data } = await clienteAxios.put(
                `/user/desactivar/${username}`,
                {},
                {
                    headers: {
                        accept: "application/json",
                        Authorization: `Bearer ${access_token}`,
                    },
                }
            )
            setAlert({ msg: "Usuario Eliminado", error: false })
            setUsername("")
            SetCargar(!cargar)
        } catch (error) {
            setAlert({
                msg: error.response.data.detail,
                error: true,
            })
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const access_token = localStorage.getItem("access_token")
        if ([password, passwordConf].includes("")) {
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
            SetCargar(!cargar)
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
                Lista Usuarios
            </h2>
            <div className="block w-full">{msg && <Alert alert={alert} />}</div>
            {!username ? (
                <div className="min-w-96 mt-3">
                    <div className="container p-2 mx-auto sm:p-4 text-gray-100 md:flex md:justify-center">
                        <div className="overflow-x-auto rounded-lg shadow-lg w-full">
                            <table className="w-full">
                                <thead className="bg-sky-600">
                                    <tr className="text-left">
                                        <th className="p-3">username</th>
                                        <th className="p-3">rol</th>
                                        <th className="p-3">enabled</th>
                                        <th className="p-3">Status</th>
                                    </tr>
                                </thead>
                                <tbody className="text-black bg-white">
                                    {users.map((user) => {
                                        return (
                                            <tr
                                                className="border-b border-opacity-20"
                                                key={user.id}
                                            >
                                                <td className="p-3">
                                                    {user.username}
                                                </td>
                                                <td className="p-3">
                                                    {user.role}
                                                </td>
                                                <td className="p-3">
                                                    {user.enabled
                                                        ? "Habilitado"
                                                        : "Deshabilitado"}
                                                </td>
                                                <td className="p-3 text-right">
                                                    <button
                                                        className="px-3 py-1 font-semibold rounded-md bg-sky-600 text-white mx-2 hover:cursor-pointer"
                                                        onClick={() =>
                                                            editar(
                                                                user.username
                                                            )
                                                        }
                                                    >
                                                        Editar
                                                    </button>
                                                    <button
                                                        className="px-3 py-1 font-semibold rounded-md bg-red-600 text-white mx-2 hover:cursor-pointer"
                                                        onClick={() =>
                                                            eliminar(
                                                                user.username
                                                            )
                                                        }
                                                    >
                                                        Eliminar
                                                    </button>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            ) : (
                <form
                    className="my-10 bg-white shadow rounded-lg px-10 py-5"
                    onSubmit={handleSubmit}
                >
                    <div className="my-5">
                        <div className="text-center bg-sky-600 w-full py-2 text-white uppercase text-bold rounded-md">
                            {username}
                        </div>
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
            )}
        </div>
    )
}

export default ModificarUsuario
