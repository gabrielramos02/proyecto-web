const Header = ({ value }) => {
    const cerrarSesion = (e) => {
        e.preventDefault()
        localStorage.clear()
        window.location.reload()
    }
    const [isOpen, setIsOpen] = value
    return (
        <header className="px-4 py-5 bg-white border-b">
            <div className="md:flex md:justify-between">
                <div>
                    <h2 className="font-black text-4xl uppercase text-sky-600 text-center">
                        Hospital
                    </h2>
                    <button
                        className="py-2 px-2 mt-2 bg-sky-600 text-white font-semibold rounded-md"
                        onClick={()=>setIsOpen(!isOpen)}
                    >
                        Hide Sidebar
                    </button>
                </div>
                <button
                    type="button"
                    className="place-self-center text-semi text-xl font-bold hover:underline"
                    onClick={cerrarSesion}
                >
                    Cerrar <span className="text-sky-600">Sesion</span>
                </button>
            </div>
        </header>
    )
}
export default Header
