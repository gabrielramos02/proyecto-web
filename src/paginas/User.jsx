import useAuth from "../hooks/useAuth"
import Director from "./Director"
import Medico from "./Medico"

const User = () => {
    const { auth } = useAuth()
    return (
        <>
            {auth.role === "director" ? (
                <Director/>
            ) : auth.role === "medico" ? (
                <Medico />
            ) : (
                <Recepcionista />
            )}
        </>
    )
}
export default User
