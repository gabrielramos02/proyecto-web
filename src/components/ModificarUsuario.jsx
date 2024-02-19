import React from "react"
const ModificarUsuario = () => {
    //TODO: implementar 
    const handleSubmit = (e)=>{
        e.preventDefault()
  
      }
  
    return (
        <div className="min-w-96 md:ml-10 md:w-2/5">
            <h2 className="text-3xl font-black text-center">
                Modificar Usuario
            </h2>
            <form
                className="my-10 bg-white shadow rounded-lg px-10 py-5"
                onSubmit={handleSubmit}
            >
                <div className="my-5">
                    <label
                        className="uppercase text-gray-600 block text-md font-bold"
                        htmlFor="username"
                    >
                        Username:
                    </label>
                    <input
                        id="username"
                        type="text"
                        placeholder="Username"
                        className="w-full mt-3 p-2 border rounded-xl bg-gray-50"
                        // value={username}
                        // onChange={(e) => setUsername(e.target.value)}
                    ></input>
                </div>
                <div className="my-5">
                    <label
                        className="uppercase text-gray-600 block text-md font-bold"
                        htmlFor="password"
                    >
                        Password:
                    </label>
                    <input
                        id="password"
                        type="password"
                        placeholder="Password"
                        className="w-full mt-3 p-2 border rounded-xl bg-gray-50"
                        // value={password}
                        //onChange={(e) => setPassword(e.target.value)}
                    ></input>
                </div>
                <div className="my-5">
                    <label
                        className="uppercase text-gray-600 block text-md font-bold"
                        htmlFor="password"
                    >
                        Confirmar Password:
                    </label>
                    <input
                        id="confirmarPass"
                        type="password"
                        placeholder="Password"
                        className="w-full mt-3 p-2 border rounded-xl bg-gray-50"
                        // value={password}
                        //onChange={(e) => setPassword(e.target.value)}
                    ></input>
                </div>
                
                <input
                    type="submit"
                    value="Modificar Usuario"
                    className="bg-sky-600 w-full py-2 text-white uppercase text-bold rounded-md hover:bg-sky-700 hover:cursor-pointer transition-colors mb-5 mt-5"
                ></input>
            </form>
        </div>
    )
}

export default ModificarUsuario
