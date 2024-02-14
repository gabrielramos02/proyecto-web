import useAuth from "../hooks/useAuth"
import Director from "./Director"
import Medico from "./Medico"
import { Outlet, Navigate } from "react-router-dom"
import Header from "../components/Header"
import Sidebar from "../components/Sidebar"

const User = () => {
    return (
        <>
            <div className="bg-gray-100 ">
                <Header />

                <div className="md:flex md:min-h-screen">
                    <Sidebar />
                    <main className="flex-1 p-10">
                        <Outlet />
                    </main>
                </div>
            </div>
        </>
    )
}
export default User
