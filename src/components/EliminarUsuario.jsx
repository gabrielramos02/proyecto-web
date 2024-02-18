import React from "react"
import { useState } from "react"
const EliminarUsuario = () => {
    const [username, setUsername] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div className="md:flex md:flex-col md:items-center">
            <h2 className="font-black text-3xl text-center">
                Eliminar Usuario
            </h2>
            <div className="md:w-3/5">
                <form className="bg-white my-10 px-5 py-5 rounded-xl">
                    <label className="uppercase text-gray-600 block text-md font-bold">
                        Username
                    </label>
                    <input
                        className="w-full mt-3 p-2 border rounded-xl bg-gray-50"
                        id="bususername"
                        placeholder="username"
                    />
                    <input
                        type="submit"
                        value="Eliminar Usuario"
                        className="bg-red-600 w-full  py-2 text-white uppercase text-bold rounded-md hover:bg-red-700 hover:cursor-pointer transition-colors mb-5 mt-5"
                        onClick={handleSubmit}
                    ></input>
                </form>
            </div>
        </div>
    )
}

export default EliminarUsuario
