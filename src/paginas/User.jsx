import Director from "./Director"
import Medico from "./Medico"
import { Outlet, Navigate } from "react-router-dom"
import Header from "../components/Header"
import Sidebar from "../components/Sidebar"
import { useState } from "react"

const User = () => {
    const [isOpen, setIsOpen] = useState(true)
    return (
        <>
            <div className="bg-gray-100 ">
                <Header value={[isOpen, setIsOpen]} />

                <div className="flex flex-col items-center md:flex md:flex-row md:items-start md:min-h-screen">
                    <Sidebar value={[isOpen, setIsOpen]} />
                    <main className="flex-1 p-10">
                        <Outlet />
                    </main>
                </div>
            </div>
        </>
    )
}
export default User
