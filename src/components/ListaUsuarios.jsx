import { useState, useEffect } from "react"
import Alert from "./Alert"
import clienteAxios from "../config/clienteAxios"
import { Link, useNavigate } from "react-router-dom"

const ModificarUsuario = () => {
    const [cargar, SetCargar] = useState(true)

    const [users, setUsers] = useState([])

    const [alert, setAlert] = useState({})

    const navigate = useNavigate()

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
        navigate(`./editarusuario/${username}`)
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
            <h2 className="text-3xl font-black text-center">Lista Usuarios</h2>
            <div className="block w-full">{msg && <Alert alert={alert} />}</div>

            <div className="min-w-96 mt-3">
                <div className="container p-2 mx-auto sm:p-4 text-gray-100 md:flex md:justify-center">
                    <div className="overflow-x-auto rounded-lg shadow-lg w-full">
                        <table className="w-full">
                            <thead className="bg-sky-600">
                                <tr className="text-left">
                                    <th className="p-3">username</th>
                                    <th className="p-3">rol</th>
                                    <th className="p-3">enabled</th>
                                    <th className="p-2">
                                        <Link
                                            to="./crearusuario"
                                            className=" hover:bg-sky-700 w-full p-1 text-white uppercase font-bold block text-center rounded-md"
                                        >
                                            <img 
                                            src="/src/iconos/add-user(1).png"
                                            className="h-10 p-1 w-10 rounded-md mx-auto hover:bg-sky-700 justify-center"
                                            ></img>
                                        </Link>
                                    </th>
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
                                            <td className="p-3">{user.role}</td>
                                            <td className="p-3">
                                                {user.enabled
                                                    ? "Habilitado"
                                                    : "Deshabilitado"}
                                            </td>
                                            <td className="p-3 text-right">
                                            <div className="flex gap-3 justify-center">
                                                <img
                                                    src="/src/iconos/edit.png"
                                                    className="p-1 h-10 w-10 bg-blue-300 hover:bg-blue-500 rounded-md"
                                                    onClick={() =>
                                                        editar(user.username)
                                                    }
                                                >
                                                </img>
                                                <img
                                                    src="/src/iconos/delete.png"
                                                    className="p-1 h-10 w-10 bg-red-400 hover:bg-red-600 rounded-md"
                                                    onClick={() =>
                                                        eliminar(user.username)
                                                    }
                                                >
                                                </img>
                                                </div>
                                            </td>
                                        
                                        </tr>
                                    
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModificarUsuario
