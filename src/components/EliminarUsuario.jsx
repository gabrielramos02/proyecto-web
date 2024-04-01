import { useState } from "react"
import Alert from "./Alert"
import clienteAxios from "../config/clienteAxios"

const EliminarUsuario = () => {
    const [username, setUsername] = useState("")

    const [alert, setAlert] = useState({})
    const handleSubmit = async (e) => {
        e.preventDefault()
        const access_token = localStorage.getItem("access_token")
        if ([username].includes("")) {
            setAlert({
                msg: "Todos los campos son obligatorios.",
                error: true,
            })
            return
        }
        try {
            const { data } = await clienteAxios.put(
                `/user/desactivar/${username}`,{},
                {
                    headers: {
                        accept: "application/json",
                        Authorization: `Bearer ${access_token}`,
                    },
                }
            )
            setAlert({ msg: "Usuario Eliminado.", error: false })
            setUsername("")
        } catch (error) {
            setAlert({
                msg: error.response.data.detail,
                error: true,
            })
        }
    }
    const { msg } = alert

    return (
        <div className="md:flex md:flex-col md:items-center">
            <h2 className="font-black text-3xl text-center">
                Eliminar Usuario
            </h2>
            <div className="block w-3/5">{msg && <Alert alert={alert} />}</div>

            <div className="md:w-3/5">
                <form
                    className="bg-white my-10 px-5 py-5 rounded-xl"
                    onSubmit={handleSubmit}
                >
                    <label
                        className="uppercase text-gray-600 block text-md font-bold"
                        htmlFor="usernameEliminar"
                    >
                        Username
                    </label>
                    <input
                        className="w-full mt-3 p-2 border rounded-xl bg-gray-50"
                        id="usernameEliminar"
                        placeholder="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        type="submit"
                        value="Eliminar Usuario"
                        className="bg-red-600 w-full  py-2 text-white uppercase text-bold rounded-md hover:bg-red-700 hover:cursor-pointer transition-colors mb-5 mt-5"
                    ></input>
                </form>
            </div>
        </div>
    )
}

export default EliminarUsuario
