import { useState, useEffect, createContext } from "react"
import clienteAxios from "../config/clienteAxios"
import { useNavigate } from "react-router-dom"


const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({})
    const [cargando, setCargando] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        const authUser = async () => {
            const access_token = localStorage.getItem("access_token")
            if (!access_token) {
                setCargando(false)
                return
            }
            try {
                const { data } = await clienteAxios("/user/me", {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${access_token}`,
                    },
                })
                setAuth(data)
                navigate("/user")
            } catch (error) {
                setAuth({})
            } finally {
                setCargando(false)
            }
        }
        authUser()
    }, [])

    return (
        <AuthContext.Provider
            value={{
                auth,
                setAuth,
                cargando
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export { AuthProvider }

export default AuthContext
