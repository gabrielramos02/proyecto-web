import { useState, useEffect, createContext } from "react"
import clienteAxios from "../config/clienteAxios"

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({})
    useEffect(() => {
        const authUser = async () => {
            const access_token = localStorage.getItem("access_token")
            if (!access_token) {
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
            } catch (error) {}
        }
        authUser()
    }, [])

    return (
        <AuthContext.Provider
            value={{
                setAuth,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export { AuthProvider }

export default AuthContext
