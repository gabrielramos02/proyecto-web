import { useState } from "react"
import Alert from "./Alert"
import clienteAxios from "../config/clienteAxios"
import { useNavigate } from "react-router-dom"
import { validarPassword, validarUsername } from "../utils/regEx"

// TODO: Agregar alerta cuando crea user
const CrearUsuario = () => {
    const [cargar,SetCargar]= useState(true)
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConf, setPasswordConf] = useState("")
    const [role, setRole] = useState("")
    const navigate = useNavigate()

    const [alert, setAlert] = useState({})

    const handleSubmit = async (e) => {
        e.preventDefault()
        const access_token = localStorage.getItem("access_token")
        if ([username, password, password, role].includes("")) {
            setAlert({
                msg: "Todos los campos son obligatorios",
                error: true,
            })
            return
        }
        
        if(validarUsername(username)){
        }
        else{
            setAlert({
                msg: "El usuario no es valido",
                error: true,
            })
            return
        }

        if(validarPassword(password)){
        }
        else{
            setAlert({
                msg: "El password debe cumplir los requisitos minimos de seguridad, combinaciones alfanumericas, caracteres especiales y 8 caracteres minimo",
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
            const { data } = await clienteAxios.post(
                `/user/`,
                { username, password, role},
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${access_token}`,
                    },
                }
            )
            setAlert({ msg: "Usuario Agregado", error: false })
            setUsername("")
            setPassword("")
            setPasswordConf("")
            setRole("")
            SetCargar(!cargar)
            navigate("../")
        } catch (error) {
            setAlert({
                msg: error.response.data.detail,
                error: true,
            })
        }
    }
    
    const { msg } = alert
    return (
        <div className="min-w-96 md:mr-10 md:w-2/5">
            <h2 className="text-3xl text-center font-black">Crear Usuario</h2>
            <div className="block w-full">{msg && <Alert alert={alert} />}</div>
            <form
                className="my-10 bg-white shadow rounded-lg px-10 py-5"
                onSubmit={handleSubmit}
            >
                <div className="my-5">
                    <label
                        className="uppercase text-gray-600 block text-md font-bold"
                        htmlFor="usernameCrear"
                    >
                        Username:
                    </label>
                    <input
                        id="usernameCrear"
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
                        htmlFor="passwordCrear"
                    >
                        Password:
                    </label>
                    <input
                        id="passwordCrear"
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
                        htmlFor="passwordConfCrear"
                    >
                        Confirmar Password:
                    </label>
                    <input
                        id="passwordConfCrear"
                        type="password"
                        placeholder="Confirmar Password"
                        className="w-full mt-3 p-2 border rounded-xl bg-gray-50"
                        value={passwordConf}
                        onChange={(e) => setPasswordConf(e.target.value)}
                    ></input>
                </div>
                <div className="my-5">
                    <label
                        className="uppercase text-gray-600 block text-md font-bold"
                        htmlFor="rolCrear"
                    >
                        Rol
                    </label>
                    <select
                        id="rolCrear"
                        className="w-full mt-3 p-2 rounded-xl bg-gray-50"
                        defaultValue={role}
                        onChange={(e) => setRole(e.target.value)}
                    >
                        <option value={""}></option>
                        <option value={"medico"}>Medico</option>
                        <option value={"recepcionista"}>Recepcionista</option>
                    </select>
                </div>
                <input
                    type="submit"
                    value="Crear Usuario"
                    className="bg-sky-600 w-full py-3 text-white uppercase text-bold rounded-md hover:bg-sky-700 hover:cursor-pointer transition-colors mb-5 mt-5"
                ></input>
            </form>
        </div>
    )
}

export default CrearUsuario
